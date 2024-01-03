import {useEffect, useState} from "react";
import Input from "./components/UI/Input";
import FadeDiv from "./components/UI/FadeDiv";
import {breakpoints, formatCss, getCss, pseudoClasses} from "./utils/tailwindFormatter";
import { copyText } from "./utils/download";
import Markdown from "./components/UI/Markdown";
import {clickMenuProps} from "./components/UI/ContextMenuContainer";
import {useSnapshot} from "valtio";
import {uiState} from "./stores/model";
import {FaRegCircleQuestion} from "react-icons/fa6";
import {FaRegCopy} from "react-icons/fa";
import BubbleModal, {appendBubble} from "./components/UI/BubbleModal";
import Scroller from "./components/UI/Scroller";
import Img from "./components/UI/Img";

const App = () => {
    const [tailwindClasses, setTailwindClasses] = useState("");
    const [output, setOutput] = useState({});
    const [className, setClassName] = useState("");


    const handleCssGeneration = (value) => {
        setTailwindClasses(value);
    };

    const getCssText = (value, key) => {

        let textToCopy = value;
        if (className) {
            if (breakpoints[key]) {
                // 對於響應式斷點，將 CSS 規則嵌套在媒體查詢中
                textToCopy = `${breakpoints[key]} {\n  .${className} {\n${value}\n  }\n}`;
            } else if (pseudoClasses[key]) {
                // 對於特殊偽類
                textToCopy = `.${className}:${pseudoClasses[key]} {\n${value}\n}`;
            } else {
                // 對於普通類別或其他情況
                textToCopy = key === 'normal'
                    ? `.${className} {\n${value}\n}`
                    : `.${className}:${key} {\n${value}\n}`;
            }
        }
        return textToCopy;
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

    }, [className, tailwindClasses]); // 依賴項

    return (
        <FadeDiv visible={true} className={`fixed inset-0 flex flex-col items-center gap-4 p-10 pointer-events-auto`}>
            <div className="w-full max-w-5xl flex flex-col gap-4 items-center justify-center">

                {/*<Img className="w-full max-w-5xl -mb-7" src="./media/images/banner.png"/>*/}
                <Img className="w-48 md:w-80 -mb-5" src="./media/images/banner.png"/>
                <div className="text-2xl md:text-4xl font-bold">Tailwind Translator</div>
            </div>

            {/* 自定義類別名稱輸入 */}
            <div className="flex gap-1 border border-cyan-600 rounded w-full max-w-5xl overflow-hidden">
                <div className="bg-gradient-to-t via-cyan-600 from-[#076A82] to-cyan-600 text-white font-bold text-lg border-r border-cyan-600 text-center w-28">
                    ClassName
                </div>
                <Input className="w-full rounded px-2 text-cyan-600 flex-1" value={className}
                       onChange={(value) => setClassName(value)}/>
                <div onClick={handleCopyAll} className="bg-gradient-to-t via-cyan-600 from-[#076A82] to-cyan-600 pointer-events-auto cursor-pointer px-2 border-l border-cyan-600 text-white hover:text-cyan-600 hover:to-white hover:via-white hover:from-white active:text-white active:bg-cyan-600 flex items-center justify-center">
                    <div className="svg-w-full w-4">
                        <FaRegCopy />
                    </div>
                </div>
            </div>

            {/* Tailwind CSS 規則輸入 */}
            <div className="flex gap-1 border border-cyan-600 rounded w-full max-w-5xl">
                <div className="bg-gradient-to-t via-cyan-600 from-[#076A82] to-cyan-600 text-white font-bold text-lg border-r border-cyan-600 text-center w-28">
                    Tailwind
                </div>
                <Input className="w-full rounded px-2 text-cyan-600 flex-1" value={""}
                       onChange={(value) => handleCssGeneration(value)}/>
            </div>

            {/* 輸出並複製 */}
            <div className="w-full max-w-5xl flex-1 relative">
                <Scroller>
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
                                    <div className="font-bold text-xl border-b pb-2 mb-2 text-cyan-600">{`${key}${{...pseudoClasses,...breakpoints}[key]?` - ${{...pseudoClasses,...breakpoints}[key]}`:""}`}</div>
                                    <div className="whitespace-pre-wrap">{value}</div>
                                </div>
                            </div>
                        )
                    })}
                </Scroller>
            </div>

            <div
                className="w-8 aspect-square svg-w-full fixed bottom-4 right-4 cursor-pointer pointer-events-auto text-cyan-600"
                {...clickMenuProps(
                    // 'tip',
                    () => uiState.tip.visible = !uiState.tip.visible,
                    // () => uiState.tip.visible = false,
                )}
            >
                <FaRegCircleQuestion/>
            </div>
            <Tip/>
            <BubbleModal/>
        </FadeDiv>
    );
}

export default App;


const Tip = () => {
    const {visible} = useSnapshot(uiState.tip)

    return <FadeDiv visible={visible}
        className="fixed z-50 pointer-events-none inset-0 flex items-center justify-center"
    >
        <div className={`fixed z-30 inset-0 bg-black/30 bg-blur ${visible?'pointer-events-auto':''}`} onClick={()=>uiState.tip.visible=false}></div>
        <div className={`relative z-40 w-full max-w-xl h-5/6 m-6 md:m-auto bg-white bg-blur rounded border border-cyan-600 px-6 py-4 ${visible?'pointer-events-auto':''}`}>

            <Scroller
                thumbClassName = '-right-5 w-1 bg-cyan-600/50 rounded-full'
            >
                <div className="absolute">
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

這個工具支持常規 CSS 以及特殊的偽類（例如：\`:active\` 、 \`:after\` 和 \`:last-child\`）。請隨意使用並將您的 Tailwind CSS 轉換為普通的 CSS！`}
                    </Markdown>

                    <div className="w-full flex justify-end">
                        <Img className="w-48" src="./media/images/sticker.png"/>
                    </div>
                </div>

            </Scroller>

        </div>
    </FadeDiv>
}