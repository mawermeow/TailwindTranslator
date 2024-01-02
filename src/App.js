import {useEffect, useState} from "react";
import Input from "./components/UI/Input";
import FadeDiv from "./components/UI/FadeDiv";
import { formatCss, getCss } from "./stores/tailwindObj";
import { copyText } from "./utils/download";
import Markdown from "./components/UI/Markdown";
import ContextMenuContainer, {hoverMenuProps} from "./components/UI/ContextMenuContainer";
import {useSnapshot} from "valtio";
import {uiState} from "./stores/model";
import {FaRegCircleQuestion} from "react-icons/fa6";
import {FaRegCopy} from "react-icons/fa";
import BubbleModal, {appendBubble} from "./components/UI/BubbleModal";

const App = () => {
    const [tailwindClasses, setTailwindClasses] = useState("");
    const [output, setOutput] = useState({});
    const [className, setClassName] = useState("");
    const [outputWithClassName, setOutputWithClassName]=useState({})

    const handleCssGeneration = (value) => {
        setTailwindClasses(value);
    };

    const getCssText=(value, key)=>{
        const exception = {
            first:'first-child',last:'last-child'
        }
        let textToCopy = value;
        if (className) {
            // 如果 className 為空，只複製轉化後的內容
            textToCopy = key === 'normal'
                ? `.${className}{\n${value}\n}`
                :Object.keys(exception).includes(key)
                    ? `.${className}:${exception[key]} {\n${value}\n}`
                    : `.${className}:${key} {\n${value}\n}`;
        }
        return textToCopy
    }

    const handleCopy = (value, key) => {
        const textToCopy = getCssText(value, key)
        copyText(textToCopy,()=>appendBubble('success','copy success!'));
    };

    const handleCopyAll = () => {
        let allTextToCopy = '';
        const formattedCss = formatCss(tailwindClasses);
        Object.entries(output).forEach(([key, value]) => {
            if(formattedCss[key]){
                allTextToCopy += getCssText(value, key) + '\n';
            }
        });
        copyText(allTextToCopy,()=>appendBubble('success','copy success!'));
    };

    // 使用 useEffect 監聽 className 和 tailwindClasses 的變化
    useEffect(() => {
        const formattedCss = formatCss(tailwindClasses);
        const cssWithClassName = {};
        Object.entries(formattedCss).forEach(([key, val]) => {
            cssWithClassName[key] = `.${className}${key !== 'normal' ? ':' + key : ''} {\n${val}\n}`;
        });
        setOutput(formattedCss)
        setOutputWithClassName(cssWithClassName)
    }, [className, tailwindClasses]); // 依賴項

    return (
        <FadeDiv visible={true} className={`fixed inset-0 flex flex-col items-center gap-4 p-10 pointer-events-auto`}>
            <div className="w-full max-w-5xl flex gap-4 justify-center">
                <div className="text-2xl font-bold">Tailwind Translator</div>
            </div>

            {/* 自定義類別名稱輸入 */}
            <div className="flex gap-1 border border-cyan-600 rounded w-full max-w-5xl overflow-hidden">
                <div className="bg-cyan-600 text-white font-bold text-lg border-r border-cyan-600 text-center w-28">
                    ClassName
                </div>
                <Input className="rounded px-2 text-cyan-600 flex-1" value={className}
                       onChange={(value) => setClassName(value)}/>
                <div onClick={handleCopyAll} className="img-btn px-2 border-l border-cyan-600 bg-cyan-600 text-white hover:text-cyan-600 hover:bg-white active:text-white active:bg-cyan-600 flex items-center justify-center">
                    <div className="svg-w-full w-4">
                        <FaRegCopy />
                    </div>
                </div>
            </div>

            {/* Tailwind CSS 規則輸入 */}
            <div className="flex gap-1 border border-cyan-600 rounded w-full max-w-5xl">
                <div className="bg-cyan-600 text-white font-bold text-lg border-r border-cyan-600 text-center w-28">
                    Tailwind
                </div>
                <Input className="rounded px-2 text-cyan-600 flex-1" value={""}
                       onChange={(value) => handleCssGeneration(value)}/>
            </div>

            {/* 輸出並複製 */}
            <div className="w-full max-w-5xl">
                {Object.entries(output).map(([key, value]) => {
                    if (!value) {
                        return <div key={key}></div>
                    }
                    return (
                        <div key={key}
                             className="relative img-btn flex flex-col border rounded border-cyan-600 p-4 mb-4 hover:text-cyan-500 active:text-black"
                             onClick={() => handleCopy(value, key)}
                        >
                            <div className="absolute right-2 top-2 w-4 svg-w-full pointer-events-none"><FaRegCopy /></div>
                            <div>
                                <div className="font-bold text-xl border-b pb-2 mb-2 text-cyan-600">{key}</div>
                                <div className="whitespace-pre-wrap">{value}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Tip/>
            <div
                className="w-8 aspect-square svg-w-full fixed bottom-4 right-4"
                {...hoverMenuProps(
                    'tip',
                    () => uiState.tip.visible = true,
                    () => uiState.tip.visible = false,
                )}
            ><FaRegCircleQuestion/></div>
            <BubbleModal/>
        </FadeDiv>
    );
}

export default App;


const Tip = () => {
    const {visible} = useSnapshot(uiState.tip)
    return <ContextMenuContainer
        className="fixed z-50 pointer-events-none"
        positionY='top'
        positionX='left'
        positionOffset={10}
        edgeDistance={16}
    >
        <FadeDiv visible={visible} className="w-full max-w-xl bg-white bg-blur rounded border border-cyan-600 px-4 py-2">


        <Markdown>
            {`
歡迎使用 Tailwind Translator！
此工具專為需要切換 Tailwind 與 vanilla css 寫法的懶人所設計。

這個工具可以幫助您將 Tailwind CSS 類別轉換為普通的 CSS 代碼。以下是如何使用此工具的簡單指南：

1.⇢設定自定義類別名稱（可選）:
在「ClassName」輸入框中，您可以輸入一個自定義的 CSS 類別名稱。這個名稱將用於生成的 CSS 代碼中。如果留空，則只會生成標準的 CSS 代碼。


2.⇢輸入 Tailwind CSS 規則:
在「Tailwind」輸入框中，輸入您希望轉換的 Tailwind CSS 類別。您可以輸入任何有效的 Tailwind CSS 類別，例如：\`bg-red-500 text-center p-4\`。

3.⇢生成和複製 CSS 代碼:
輸入後，轉換的 CSS 代碼將顯示在下方。您可以點擊任何一塊代碼來將其複製到剪貼板。

這個工具支持常規 CSS 以及特殊的偽類（例如：\`:first-child\` 和 \`:last-child\`）。請隨意使用並將您的 Tailwind CSS 轉換為普通的 CSS！`}
        </Markdown>
        </FadeDiv>
    </ContextMenuContainer>
}