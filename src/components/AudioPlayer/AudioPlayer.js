import React, { useState, useEffect } from 'react';
import {audioInstances, audioState, pauseSound, playSound} from "../../stores/audioState";
import {getSoundSubtitle, getSoundTitle, getSoundTitleList} from "../../stores/data";
import {useSnapshot} from "valtio";
import {ReactComponent as Subtitle} from "./subtitle.svg";
import {ReactComponent as SubtitleActive} from "./subtitleActive.svg";
import {ReactComponent as Arrow} from "./arrow.svg";
import {ReactComponent as Play} from "./play.svg";
import {ReactComponent as Pause} from "./pause.svg";
import {ReactComponent as Restart} from "./restart.svg";
import {ReactComponent as Prev} from "./prev.svg";
import {ReactComponent as Next} from "./next.svg";
import Slider from "../UI/Slider";
import Img from "../UI/Img";
import {uiState} from "../../stores/model";
import FadeDiv from "../UI/FadeDiv";
import useElementSize from "../../hooks/useElementSize";
import {motion} from "framer-motion";
import {teamState} from "../../stores/teamPanoMiddleWare";
import {AiOutlineUnorderedList} from "react-icons/ai";
import MarqueeText from "../UI/MarqueeText";
import {
    appendAudioMessage,
    closeAudioPlayerChangeScene,
    openAudioPlayerHandler,
    showAudioMessage
} from "./AudioMessage";
import {findNeighbors} from "../../utils/arrayUtils";

const floorHotspotStyle = "IconDefaultPointSpotStyle_go"
const autoNextSound=true

const AudioPlayer = () => {
    // const {id:learnId}=useSnapshot(uiState.learn.data)
    // const soundList = getSoundTitleList(learnId)

    const {controlled,controller}=useSnapshot(teamState)
    const {isPlaying,masterVolume}=useSnapshot(audioState)
    const {scene}=useSnapshot(uiState.miniMap.krpano)
    const {visible,showController,showPlayList, soundName,updateSoundName,isFirstTimeOpen,switchSoundCanAutoPlay}=useSnapshot(uiState.audioPlayer)
    const isPlayingSound = isPlaying[soundName]
    const [progress, setProgress] = useState(0); // 当前播放进度
    const [volume, setVolume] = useState(masterVolume); // 默认音量为 0.5
    const [restartRef,restartWidth]=useElementSize([visible])
    const [isSubtitleVisible,setIsSubtitleVisible]=useState(true)
    const {prev,next,isLast}=findNeighbors('soundName',soundName,soundList)

    const subtitles = getSoundSubtitle(soundName)
    const [currentSubtitle, setCurrentSubtitle] = useState(null);
    const [previousSubtitle, setPreviousSubtitle] = useState(null);

    const [lookAt,setLookAt]=useState({})

    useEffect(() => {
        const audioInstance = audioInstances[soundName];

        if (!audioInstance) {
            console.error(`Audio instance for "${soundName}" not found.`);
            return;
        }

        const handleTimeUpdate = () => {
            const progress = (audioInstance.currentTime / audioInstance.duration) * 100;
            // console.log(audioInstance.currentTime)
            setProgress(progress);

            const subtitle = subtitles.find(s => audioInstance.currentTime >= s.start && audioInstance.currentTime <= s.end);

            if (subtitle && subtitle.text !== currentSubtitle) {
                setPreviousSubtitle(currentSubtitle);
                setCurrentSubtitle(subtitle.text);

                // 換句子時要執行的內容
                // console.log(subtitle.text)
                if(subtitle.onEvent.length>0){
                    window.onEvent(subtitle.onEvent)
                }

                if (subtitle.callback && audioInstance.currentTime === subtitle.start) {
                    subtitle.callback();
                }
            }else if (!subtitle && currentSubtitle) {
                setCurrentSubtitle(null);
            }
        };

        const handleVolumeChange = () => {
            setVolume(audioInstance.volume);
        };

        const handleSongEnded = () => {
            // 當歌曲播放完畢，自動播放下一首
            if (!isLast && autoNextSound) {
                uiState.audioPlayer.switchSoundCanAutoPlay = true
                uiState.audioPlayer.updateSoundName = next.soundName;
            }
            if(isLast){
                uiState.audioPlayer.showController = true
                showAudioMessage(
                    `${uiState.learn.data.prefix}導覽結束`,
                    `恭喜您完成了「${uiState.learn.data.title}」的專題導覽。`,
                    "結束導覽",
                    ()=>{
                        window.onEvent('audioPlayer:hide;audioMessage:hide;')
                    },
                )
            }
        };

        audioInstance.addEventListener('timeupdate', handleTimeUpdate);
        audioInstance.addEventListener('volumechange', handleVolumeChange);
        audioInstance.addEventListener('ended', handleSongEnded);

        return () => {
            audioInstance.removeEventListener('timeupdate', handleTimeUpdate);
            audioInstance.removeEventListener('volumechange', handleVolumeChange);
            audioInstance.addEventListener('ended', handleSongEnded);
        };
    }, [soundName,subtitles]);

    const handleProgressChange = (newValue) => {
        const audioInstance = audioInstances[soundName];
        // audioInstance.currentTime = (newValue / 100) * audioInstance.duration;
        const newTime = (newValue / 100) * audioInstance.duration;
        window.onEvent(`team-changeSoundTime:${soundName}-${newTime}`)
    };

    const handleVolumeChange = (newValue) => {
        const audioInstance = audioInstances[soundName];
        audioInstance.volume = newValue;
    };

    const togglePlay=()=>{
        if(window.krHelper?.krObj){
            if(isPlayingSound){
                setLookAt({s:window.krHelper.krObj.get('xml.scene'),v:window.krHelper.krObj.get('view.vlookat'),h:window.krHelper.krObj.get('view.hlookat'),f:window.krHelper.krObj.get('view.fov')})
            }else{
                setLookAt(p=>{
                    if(p!=={}){
                        window.krHelper.goScene(lookAt.s)
                        window.krHelper.goLookAt(lookAt.v,lookAt.h,lookAt.f,1)
                    }
                    return {}
                })
            }
        }
        window.onEvent(`team-${isPlayingSound?'pause':'play'}Sound:${soundName}`)
    }

    useEffect(()=>{
        if(!visible){
            setIsSubtitleVisible(true)
            uiState.audioPlayer.showController = true
            uiState.audioPlayer.showPlayList = false
            window.onEvent(`pauseSound:${soundName};changeSoundTime:${soundName}-0;`)
        }else{
            window.onEvent(`learn:hide;info:hide;${isFirstTimeOpen?'':`playSound:${soundName};`}`)
            if(isFirstTimeOpen){
                uiState.audioPlayer.isFirstTimeOpen = false
                openAudioPlayerHandler(togglePlay)
            }
        }
    },[visible])

    // 開啟導覽時，地板hotspot失效
    useEffect(()=>{
        if(window.hasKrpano){
            if(visible){
                window.krHelper.allHotspot(el=>{
                    if(el.style===floorHotspotStyle){
                        el.onclickBackup = el.onclick
                        el.onclick=closeAudioPlayerChangeScene
                    }
                })
            }else{
                window.krHelper.allHotspot(el=>{
                    if(el.style===floorHotspotStyle&&el.onclickBackup){
                        el.onclick = el.onclickBackup
                        el.onclickBackup = undefined
                    }
                })
            }
        }
    },[visible,scene])

    useEffect(()=>{
        if(updateSoundName!==soundName){
            handleProgressChange(0)
            window.onEvent(`pauseSound:${soundName}`)
            uiState.audioPlayer.soundName = updateSoundName
            if(switchSoundCanAutoPlay && !isFirstTimeOpen){
                window.onEvent(`playSound:${updateSoundName}`)
            }
        }
    },[updateSoundName])

    return <>
        <FadeDiv zIndex={40} visible={visible&&showController} className={`fixed bottom-0 inset-x-0 flex flex-col items-center pointer-events-auto`}>
            <Slider
                thumbClass=""
                trackClass="bg-[#E83932] h-2"
                trackBgClass="bg-[#FFFFFF] h-2"
                value={progress}
                onChange={handleProgressChange}
            />
            <div className="w-full flex items-center justify-between h-16 bg-black/50 pointer-events-none">
                {/*左半邊的組件*/}
                <div className="h-full py-2 px-2 flex items-center">
                    <div
                        className="bg-white/20 hover:bg-white/30 h-full rounded-md hidden md:flex gap-2 items-center justify-center px-4 text-white img-btn"
                        onClick={()=>uiState.audioPlayer.showPlayList=!showPlayList}
                    >
                        <div className="max-w-[120px] w-full overflow-hidden text-base">
                            <MarqueeText>{getSoundTitle(soundName)}</MarqueeText>
                        </div>
                        {/*<div className="">{getSoundTitle(soundName)}</div>*/}
                        <div className="w-6 svg-w-full rotate-180"><Arrow/></div>
                    </div>
                    <div className="img-btn translate-x-2 md:translate-x-6 w-6 svg-w-full text-white md:hidden flex items-center" onClick={()=>uiState.audioPlayer.showPlayList=!showPlayList}><AiOutlineUnorderedList/></div>
                </div>

                {/*中間的控制組件*/}
                <div className="fixed w-full flex justify-center">
                    <motion.div className="flex gap-4 sm:gap-8 items-center justify-center" ref={restartRef}>
                        <motion.div style={{translateX:-restartWidth*0.7}}  className="absolute h-8 img-btn svg-h-full text-[#AEAEAE] hover:text-[#848484] active:text-[#AEAEAE]"  onClick={()=>handleProgressChange(0)}><Restart/></motion.div>
                        <div className="h-8 img-btn svg-h-full text-transparent hover:text-[#AEAEAE] active:text-transparent" onClick={()=>{
                            if(prev){
                                uiState.audioPlayer.switchSoundCanAutoPlay = true
                                uiState.audioPlayer.updateSoundName = prev.soundName
                            }
                        }}><Prev/></div>
                        <div className="h-10 img-btn svg-h-full text-[#F2662A] hover:text-[#7A7A7A] active:text-[#F2662A] transition-colors" onClick={togglePlay}>{!isPlayingSound?<Play/>:<Pause/>}</div>
                        <div className="h-8 img-btn svg-h-full text-transparent hover:text-[#AEAEAE] active:text-transparent" onClick={()=>{
                            if(next) {
                                uiState.audioPlayer.switchSoundCanAutoPlay = true
                                uiState.audioPlayer.updateSoundName = next.soundName
                            }
                        }}><Next/></div>
                    </motion.div>
                </div>

                {/*右半邊的組件*/}
                <div className={`flex gap-8 px-8 items-center ${controlled?'canTouch':''}`}>
                    <div className="w-28 md:flex hidden gap-1 items-center">
                        <div className="h-8"><Img className="h-full object-contain" src="./media/images/player/icon_volume.png"/></div>
                        <Slider
                            thumbClass=""
                            trackClass="bg-[#EB711D] h-[2px] group-hover:h-1"
                            trackBgClass="bg-[#FFFFFF] h-[2px] group hover:h-1"
                            value={volume}
                            min={0}
                            max={1}
                            step={0.01}
                            onChange={handleVolumeChange}
                        />
                    </div>
                    {/*<div className={`h-8 svg-h-full img-btn transition-colors ${isSubtitleVisible?'text-[#EB711D]':'text-white'}`} onClick={()=>setIsSubtitleVisible(p=>!p)}><Subtitle/></div>*/}
                    <div className="h-8 img-btn svg-h-full text-transparent hover:text-[#AEAEAE] active:text-transparent" onClick={()=>{
                        setIsSubtitleVisible(p=>!p)
                    }}>{isSubtitleVisible?<SubtitleActive/>:<Subtitle/>}</div>
                </div>

            </div>

        </FadeDiv>

        <FadeDiv
            zIndex={41}
            visible={visible&&showPlayList&&showController}
            className="fixed inset-0 pointer-events-auto"
            onClick={()=>uiState.audioPlayer.showPlayList=false}
        >
            <div className="absolute bottom-20 bg-black/30 rounded-md px-4 py-2 left-2 ">
                <div className="px-4 w-full overflow-hidden text-white mb-4 border border-white rounded-full text-base">
                    <MarqueeText>{getSoundTitle(soundName)}</MarqueeText>
                </div>
                {soundList.map((el,i)=>{
                    return <div className="img-btn px-4 py-2 border-b border-b-transparent hover:border-white text-white text-base" key={i} onClick={()=> {
                        uiState.audioPlayer.switchSoundCanAutoPlay = true
                        uiState.audioPlayer.updateSoundName = el.soundName
                    }}>{el.title}</div>
                })}
            </div>
        </FadeDiv>

        <FadeDiv visible={visible&&isSubtitleVisible} className="fixed bottom-20 text-center text-2xl md:text-3xl tracking-widest text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
            {currentSubtitle}
        </FadeDiv>

        <FadeDiv
            visible={visible&&isPlayingSound}
            zIndex={30}
            className="pointer-events-auto fixed inset-0"
            onClick={()=>uiState.audioPlayer.showController=!showController}/>
    </>
};

export default AudioPlayer;
