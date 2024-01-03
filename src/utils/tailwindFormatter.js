import tailwindObj from "../stores/tailwindObj";

const customClassList = [
    {class:'.bg-blur',properties:'backdrop-filter: blur(10px);'},
    {class:'.aspect-auto',properties:'aspect-ratio: auto;'},
    {class:'.aspect-square',properties:'aspect-ratio: 1 / 1;'},
    {class:'.aspect-video',properties:'aspect-ratio: 16 / 9;'},
]

export const pseudoClasses = {
    first: 'first-child',
    last: 'last-child',
    hover: 'hover',
    focus: 'focus',
    active: 'active',
    disabled: 'disabled',
    checked: 'checked',
    'nth-child': 'nth-child',
    'nth-of-type': 'nth-of-type',
    not: 'not',
    before: 'before',
    after: 'after',
    'placeholder-shown': 'placeholder-shown',
    empty: 'empty'
};

export const breakpoints = {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
};

const classToCss = {
    h: 'height',
    w: 'width',
    p: 'padding',
    m: 'margin',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left',
    px: ['padding-left', 'padding-right'],
    py: ['padding-top', 'padding-bottom'],
    mx: ['margin-left', 'margin-right'],
    my: ['margin-top', 'margin-bottom'],
    aspect: 'aspect-ratio',
    text: 'text',
    z:'z-index',
    "max-h":'max-height',
    "min-h":'min-height',
    "max-w":'max-width',
    "min-w":'min-width',
    "grid-cols": (value) => `grid-template-columns: repeat(${value}, minmax(0, 1fr));`,
    "grid-rows": (value) => `grid-template-rows: repeat(${value}, minmax(0, 1fr));`,
};

// 輔助函數：統一處理換行符的添加
function appendWithNewLine(existingText, newText) {
    return existingText + (existingText.length > 0 ? '\n' : '') + newText;
}

export const tailwindList = Object.values(tailwindObj).reduce((acc, h3Array) => {
    h3Array.forEach(h3Item => {
        if (h3Item.classList) {
            acc = acc.concat(h3Item.classList);
        }
    });
    return acc;
}, []);

export const getCss = (classText) => {
    let cssText = "";
    const unParseClassList = [];

    classText.split(' ').forEach((el) => {
        const findClass = [...tailwindList, ...customClassList].find(ele => ele.class.replace(".", "") === el);

        if (findClass) {
            cssText = appendWithNewLine(cssText, findClass.properties);
        } else {
            if (el.includes('[') && el.includes(']')) {
                cssText = appendWithNewLine(cssText, getDynamicCss(el));
            } else if (el) {
                unParseClassList.push(el);
            }
        }
    });

    if (unParseClassList.length > 0) {
        let commentText = unParseClassList.join(' ');
        cssText = appendWithNewLine(cssText, `/* ${commentText} */`);
    }

    return cssText;
}

export const formatCss = (classText) => {
    const styles = {
        normal: "",
        // 初始化所有偽類的樣式為空字串
        ...Object.fromEntries(Object.keys(pseudoClasses).map(key => [key, ""])),
        xs: "", md: "", lg: "", xl: "", '2xl': "",
    };

    classText.split(' ').forEach(el => {
        if (el.includes(":")) {
            const [state, value] = el.split(":");
            const pseudoClass = pseudoClasses[state];
            if (pseudoClass) {
                styles[state] += value + " ";
            } else if (styles[state] !== undefined) {
                styles[state] += value + " ";
            }
        } else {
            styles.normal += el + " ";
        }
    });

    return Object.fromEntries(
        Object.entries(styles).map(([key, value]) => [key, getCss(value.trim())])
    );
}

function getDynamicCss(classText) {
    let cssText = "";

    const regex = /(\w+-\w+|\w+)-\[(.+)\]/g;
    let match;

    while ((match = regex.exec(classText)) !== null) {
        const property = match[1];
        const value = match[2];

        if (typeof classToCss[property] === 'function') {
            cssText = appendWithNewLine(cssText, classToCss[property](value));
        } else if (classToCss[property]) {
            if (Array.isArray(classToCss[property])) {
                classToCss[property].forEach(prop => {
                    cssText = appendWithNewLine(cssText, `${prop}: ${value};`);
                });
            } else {
                cssText = appendWithNewLine(cssText, `${classToCss[property]}: ${value};`);
            }
        }
    }

    return cssText;
}

// 轉換為 JS 物件
// 轉換 CSS 屬性名為駝峰命名
function toCamelCase(str) {
    return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', ''));
}

// 轉換 CSS 文本為 React style 物件
function cssTextToStyleObject(cssText) {
    const styleObject = {};
    cssText.split(';').forEach(item => {
        let [key, value] = item.split(':').map(part => part.trim());
        if (key && value) {
            key = toCamelCase(key); // 確保使用駝峰命名
            styleObject[key] = isNaN(value) ? value : parseInt(value);
        }
    });
    return styleObject;
}

function styleObjectToString(styleObject) {
    return '{' + Object.entries(styleObject).map(([key, value]) => {
        // 對於字符串值，需要加引號
        const formattedValue = typeof value === 'string' ? `'${value}'` : value;
        return `${key}: ${formattedValue}`;
    }).join(', ') + '}';
}

// 修改 getCss 函數以返回 style 物件
export const getStyleObject = (classText) => {
    const jsStyleObj = cssTextToStyleObject(classText);
    return styleObjectToString(jsStyleObj)
}