import {useEffect, useRef, useState} from "react";
import {sourcePath} from "../../utils/path";

const Video = ({ src,poster="",autoPlay=true,endCallback, startCallback=()=>{},timeCallbacks = [],skipCallback=()=>{}, ...rest }) => {
    const videoRef = useRef(null);
    const [hasCalledCallback, setHasCalledCallback] = useState(false);
    const [videoPoster,setVideoPoster]=useState("")

    const startHandler=() => {
        if(autoPlay){
            videoRef.current.play();
            startCallback()
            setHasCalledCallback(true)
        }
    }

    // 如果在 n 秒後還沒執行 startCallback，就執行 skipCallback
    useEffect(() => {
        if (hasCalledCallback) return; // 如果已經執行過 callback，就不再進行以下操作

        const timer = setTimeout(() => {
            if (!hasCalledCallback) {
                skipCallback()
                setHasCalledCallback(true); // 更新 state 來避免重複執行 callback
            }
        }, 4 * 1000); // n 秒轉換為毫秒

        return () => clearTimeout(timer); // 清除 timer 避免不必要的操作
    }, [hasCalledCallback]);


    useEffect(() => {
        if (videoRef.current) {
            // 當影片可以不中斷地播放到底時，將其透明度設置為1並調用startCallback
            videoRef.current.addEventListener("canplaythrough", startHandler);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener("canplaythrough", startHandler);
            }
        };
    }, [videoRef, startCallback]);

    useEffect(() => {
        if (videoRef.current && endCallback) {
            videoRef.current.addEventListener("ended", endCallback);
        }

        return () => {
            if (videoRef.current && endCallback) {
                videoRef.current.removeEventListener("ended", endCallback);
            }
        };
    }, [videoRef]);

    // 偵測特定秒數執行 callback
    useEffect(() => {
        const handleTimeUpdate = () => {
            for (let timeCallback of timeCallbacks) {
                if (videoRef.current && videoRef.current.currentTime >= timeCallback.time) {
                    timeCallback.callback();
                    // Remove this specific callback from the array to prevent it from being called multiple times.
                    const index = timeCallbacks.indexOf(timeCallback);
                    if (index > -1) {
                        timeCallbacks.splice(index, 1);
                    }
                }
            }
            if (videoRef.current && timeCallbacks.length === 0) {
                // Remove the event listener if there are no more timeCallbacks.
                videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            }
        }

        if (videoRef.current) {
            videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, [videoRef, timeCallbacks]);

    useEffect(()=>{
        const newPoster = poster.replace('./',sourcePath)
        checkImage(newPoster,(isValid)=>{
            if(isValid){
                setVideoPoster(newPoster)
            }
        })
    },[])

    return (
        <video playsInline ref={videoRef} autoPlay={autoPlay} poster={videoPoster} {...rest}>
            <source src={src.replace('./', sourcePath)} type="video/mp4" />
            您的瀏覽器不支援影片播放。
        </video>
    );
};

export default Video

// 範例
// <Video
//     src="yourVideoSource.mp4"
//     timeCallbacks={[
//         { time: 7, callback: () => console.log("7 seconds passed!") },
//         { time: 15, callback: () => console.log("15 seconds passed!") }
//     ]}
// />

function checkImage(url, callback) {
    const img = new Image();
    img.onload = function() {
        callback(true);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = url;
}