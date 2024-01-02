import {sourcePath} from "../../utils/path";

const Audio=({src,controls=true,controlsList="nodownload",...rest})=>{
    return <audio controls={controls} controlsList={controlsList} src={src.replace('./',sourcePath)} {...rest}></audio>
}
export default Audio