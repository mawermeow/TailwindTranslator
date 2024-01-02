import {motion,AnimatePresence} from "framer-motion";
import {useState,useEffect} from 'react'
import {useSnapshot} from "valtio";
import {uiState} from "../../stores/model";

export const appendBubble=(type,text)=>{
    uiState.bubble.bubbleList = [
        ...uiState.bubble.bubbleList,
        {id:Math.random(),type,message:text},
    ]
}
window.appendBubble=appendBubble
function BubbleModal() {
    const {bubbleList}=useSnapshot(uiState.bubble)

    return (
        <div className="fixed bottom-24 w-full flex justify-center sm:w-auto sm:bottom-4 sm:left-4 pointer-events-none z-50">
            <div className="flex flex-col gap-2 items-start">
                {bubbleList.map((bubble, index) => (
                    <Bubble key={index} bubble={bubble} />
                ))}
            </div>
        </div>
    );
}
export default BubbleModal;

const Bubble = ({bubble}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 2000); // 2秒后开始关闭动画

        return () => {
            clearTimeout(timer); // 组件卸载时清除定时器
        };
    }, []);

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                uiState.bubble.bubbleList = uiState.bubble.bubbleList.filter(
                    (el) => el.id !== bubble.id
                );
            }, 300); // 等待300ms的退出动画完成后移除泡泡
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isOpen, bubble.id]);

    return (
        <AnimatePresence>{isOpen&&
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0}}
            className={`${bubble.type==='error'
                ?'bg-rose-500 text-white'
                :bubble.type==='success'?'bg-cyan-600 text-white':'bg-white text-black'
            } w-max max-w-xs shadow-md py-2 px-4 rounded-md pointer-events-auto cursor-pointer select-none`}
            onClick={handleClose}
        >
            {bubble.message}
        </motion.div>
        }</AnimatePresence>
    );
}

