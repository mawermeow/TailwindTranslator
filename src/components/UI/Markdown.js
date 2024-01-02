import { useMemo, memo } from 'react';
import {createElement} from "react";
import { proxy, useSnapshot } from 'valtio';
import Carousel from "./Carousel";
import ReactMarkdown from 'react-markdown'
import Img from "./Img";
import gfm from 'remark-gfm'
import Audio from "./Audio";
import Video from "./Video";
import {HiVolumeUp} from "react-icons/hi";

const carouselState = proxy({
    carousels: [],
});
window.carouselState = carouselState

// 可在連結元素的開頭輸入 frontEndAction 來呼叫 controller 中設定的功能
// [執行 frontEndAction](https://frontEndAction.info-hide.miniMap-show.team-playSound-bgm)
// 會轉化為點擊後會執行 window.onEvent("info:hide;miniMap:show;team-playSound:bgm") 的連結元素

// 可在連結元素的開頭輸入 className 來啟用客製化樣式功能
// [將該行文字靠右對齊](https://className-div.w-full.text-right)
// [斜體行內文字](https://className-span.italic.text-[#FFE599])
// 會轉化為定義的元素，並包含所設定的 class 類別，可使用 tailwind 的樣式

// 文字加入 ⇢ 可以啟用特殊列點功能
// 文字加入 ↩ 也可以啟用特殊列點功能，但會隱藏前面的列點

const Markdown = memo(({ width, children,className="",...rest }) => {
    const snap = useSnapshot(carouselState);

    const processedText = useMemo(() => {
        const generatedText = generateMarkdownImages(children);
        return processCarouselImages(generatedText);
    }, [children]);

    return (
        <ReactMarkdown
            remarkPlugins={[gfm]}
            className={`markdown ${className}`}
            {...rest}
            components={{
                a: ({ node, ...props }) => {
                    if(props.href.includes('frontEndAction')){
                        const eventTextList = props.href.split('.').slice(1).join(';').replaceAll('-',':').replaceAll('team:','team-')
                        return <a children={props.children} rel="noopener noreferrer" onClick={()=>window.onEvent(eventTextList)}/>
                    }else if(props.href.includes('className')){
                        const tag = props.href.split('.')[0].split('-')[1]
                        const classes = props.href.split('.').slice(1).join(' ')
                        if(tag){
                            return createElement(tag, {
                                children:props.children,
                                className:decodeURIComponent(classes),
                            })
                        }else{
                            return <div children={props.children} className={decodeURIComponent(classes)}/>
                        }
                    }else{
                        return <a {...props} target="_blank" rel="noopener noreferrer" />
                    }
                },
                p: ({ node, ...props }) => {
                    const textContent = node.children[0]?.value || '';

                    let beforeText = '';
                    let afterText = '';

                    if (textContent.includes('⇢')) {
                        [beforeText, afterText] = textContent.split('⇢');
                    } else if (textContent.includes('↩︎')) {
                        [beforeText, afterText] = textContent.split('↩︎');
                    }

                    if (beforeText || afterText) {
                        return (
                            <div className={`flex py-1 gap-1 ${textContent.includes('↩︎')?'mb-2 -mt-[14px]':'my-2'}`}>
                                <div className={textContent.includes('↩︎') ? "opacity-0" : ""}>{beforeText}</div>
                                <div>{afterText}</div>
                            </div>
                        );
                    }
                    return <div className="my-3 whitespace-pre-wrap" {...props} />
                }, // 將 <p> 替換為 <div>
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-400 py-1 pl-4 mb-4" {...props} />, // 將 <p> 替換為 <div>
                img: ({ src, alt,title }) => {
                    if(alt=== 'youtube'){
                        // 檢查是否為 YouTube URL
                        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                        const match = youtubeRegex.exec(src);
                        if (match) {
                            const videoId = match[1];
                            return (
                                <iframe
                                    // width="560"
                                    // height="315"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={alt}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    height={width/16*9}
                                    width={width}
                                ></iframe>
                            );
                        }
                    }else if(alt==='iframe'){
                        return (
                            <iframe
                                src={src}
                                title={alt}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                height={width/16*9}
                                width={width}
                            ></iframe>
                        );
                    }else if (alt==='carousel') {
                        return <Carousel width={width} images={snap.carousels[src]||[]} />;
                    }else if (alt==='video') {
                        return <Video autoPlay={false} className="my-1" src={src.replace('./','./media/video/')} />;
                    }else if (alt==='audio') {
                        return <Audio className="my-1" src={src.replace('./','./media/audio/')} />;
                    }else{
                        return <>
                            {/*<div className=" text-center font-bold mt-4">{`[${alt}]`}</div>*/}
                            <Img className={title} src={src.replace('./','./media/images/')} alt={alt} />
                        </>
                    }
                },
            }}
        >
            {processedText}
        </ReactMarkdown>
    );
});

const generateMarkdownImages = (text) => {
    // 使用正則表達式匹配 markdown 圖片標籤
    const regex = /!\[(.*?)\]\((.*?)(\d{2})~(\d{2})\.(jpg|png)\)/g;
    let match;
    let lastIndex = 0;
    let result = '';

    while ((match = regex.exec(text)) !== null) {
        const description = match[1];  // 圖片描述
        const basePath = match[2];     // 圖片路徑，不包括最後的數字和擴展名
        const start = parseInt(match[3], 10); // 開始的數字
        const end = parseInt(match[4], 10);   // 結束的數字
        const extension = match[5];    // 擴展名

        // 添加匹配之前的文字
        result += text.slice(lastIndex, match.index);

        for (let i = start; i <= end; i++) {
            const number = String(i).padStart(2, '0'); // 將數字轉換為兩位數格式
            result += `![${description}](${basePath}${number}.${extension})\n`;
        }

        lastIndex = regex.lastIndex;
    }

    // 添加最後一次匹配後的文字
    result += text.slice(lastIndex);

    return result;
}

export default Markdown;


const processCarouselImages = (text) => {
    carouselState.carousels = []; // Clear the carousels state

    const lines = text.split('\n');
    const processedLines = [];

    let imageBuffer = [];
    let inCarouselBlock = false;

    for (const line of lines) {
        if (line.startsWith('![')) {
            const regex = /!\[(.*?)\]\((.*?)\)/;
            const match = line.match(regex);

            if (match) {
                const [, description, src] = match;

                if (!inCarouselBlock) {
                    // Start a new carousel block
                    inCarouselBlock = true;
                }

                imageBuffer.push({ description, src });
            }
        } else {
            // Non-image line
            if (inCarouselBlock) {
                if (imageBuffer.length >= 3) {
                    // Add images to carouselState.carousels and replace with placeholder
                    const carouselIndex = carouselState.carousels.length;
                    carouselState.carousels.push(imageBuffer.map(item => ({ description: item.description, src: item.src })));
                    processedLines.push(`![carousel](${carouselIndex})`);
                } else {
                    // Less than 3 images, keep as separate images
                    for (const item of imageBuffer) {
                        processedLines.push(`![${item.description}](${item.src})`);
                    }
                }

                inCarouselBlock = false;
                imageBuffer = [];
            }

            processedLines.push(line);
        }
    }

    return processedLines.join('\n');
};