import {sourcePath} from "../../utils/path";
import {motion} from "framer-motion";

const Img=({src,className='',...rest})=>{
    return <img src={src.replace("./",sourcePath)} className={className.includes('pointer-events-')?className:className+' pointer-events-none'} {...rest}/>
}
export default Img

export const MotionImg =({src,...rest})=>{
    return <motion.img src={src.replace("./",sourcePath)} {...rest}/>
}