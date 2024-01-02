import Typewriter from "typewriter-effect";
import FadeDiv from "./FadeDiv";

const Writer=({start,text,endCallback})=>{
    return <FadeDiv visible={start} className="absolute inset-0 flex items-center justify-center px-8 pt-8 whitespace-pre-wrap">
        <Typewriter
            options={{cursor:"",skipAddStyles:'w-20 h-20'}}
            onInit={(typewriter) => {
                typewriter.pauseFor(500)
                    .typeString(text)
                    .callFunction(() => {
                        endCallback()
                    })
                    .start()
            }}
        />
    </FadeDiv>
}
export default Writer