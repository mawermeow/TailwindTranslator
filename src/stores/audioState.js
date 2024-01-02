import {proxy, subscribe} from "valtio"
import {sourcePath} from "../utils/path"
import {AUDIO_PLAYER_PLAYLIST} from "./data";

const DEFAULT_PLAYLIST = {
    all_click:{src: "./media/audio/all_click.mp3", loop: false, multiInstance:true},
    ...AUDIO_PLAYER_PLAYLIST,
}

export const audioState = proxy({
    playlist: { ...DEFAULT_PLAYLIST },
    isPlaying: Object.keys(DEFAULT_PLAYLIST).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
    canPlay:false,
    masterVolume: 0.5,
})

const playSound = (soundName) => {
    const soundData = audioState.playlist[soundName];

    if (soundData.multiInstance) {
        // 如果 multiInstance 為 true，則創建一個新的音頻實例並播放
        const audio = new Audio(soundData.src.replace('./', sourcePath));
        audio.muted = !audioState.canPlay;
        audio.volume = audioState.masterVolume;
        audio.play().catch((error) => {
            console.log("播放失敗：", error);
            if (soundData.errorCallback) {
                soundData.errorCallback();
            }
        });
        audio.addEventListener("ended", () => {
            audio.remove();
        });
    } else {
        // 如果 multiInstance 為 false，則使用 audioInstances 中的元素進行播放
        const audio = audioInstances[soundName];
        if (audio) {
            audioState.isPlaying[soundName] = true;
            audio.loop = soundData.loop;
            audio.muted = !audioState.canPlay;
            audio.volume = audioState.masterVolume;
            audio.play().catch((error) => {
                console.log("播放失敗：", error);
                if (soundData.errorCallback) {
                    soundData.errorCallback(audio);
                }
            });
        } else {
            console.error(`Audio instance for ${soundName} not found!`);
        }
    }
};



const pauseSound = (soundName) => {
    const soundData = audioState.playlist[soundName]
    if (!soundData.multiInstance) {
        audioState.isPlaying[soundName] = false
    }
    // 如果音效是多實例播放，則在此不能直接暫停，因為可能有多個實例在播放。
}

const changeSoundTime=(soundName,newValue) => {
    const audioInstance = audioInstances[soundName];
    audioInstance.currentTime = newValue
};

const listenAtTime = (key, targetSeconds, onTargetTimeReached) => {
    const audio = audioInstances[key]
    if (!audio) return
    const timeUpdateHandler = () => {
        if (audio.currentTime >= targetSeconds) {
            onTargetTimeReached()
            // 一旦達到目標時間，移除事件監聽以防止多次觸發
            audio.removeEventListener("timeupdate", timeUpdateHandler)
        }
    }
    audio.addEventListener("timeupdate", timeUpdateHandler)
}
// 範例
// playSound("two_success")
// listenAtTime("two_success", 5, () => {
//     console.log("two_success已播放5秒")
// })

const setMasterVolume = (volume) => {
    audioState.masterVolume = volume;
    Object.values(audioInstances).forEach(audio => {
        if(!audio.backupVol){
            audio.backupVol = audio.volume
        }
        audio.volume = audio.backupVol * audioState.masterVolume;  // 根據 masterVolume 調整每個音效的音量
    });
};

let audioInstances = {}

const initAudioInstances = () => {
    const playlist = audioState.playlist
    Object.keys(playlist).forEach((key) => {
        if (!audioInstances[key]) {
            const audio = new Audio(playlist[key].src.replace('./', sourcePath))
            audio.autoplay = false
            audio.addEventListener("ended", handleAudioEnded(key))
            audioInstances[key] = audio
        }
    })
}

const updatePlayingAudios = () => {
    const playlist = audioState.playlist
    const isPlaying = audioState.isPlaying
    Object.keys(playlist).forEach((key) => {
        const audio = audioInstances[key]
        if (audio) {
            if (isPlaying[key]) {
                audio.loop = playlist[key].loop
                audio.play().catch((error) => {
                    console.log("播放失敗：", error);
                    if (playlist[key].errorCallback) {
                        playlist[key].errorCallback();
                    }
                });
                audio.volume = audioState.masterVolume
            } else {
                audio.pause()
            }
        }
    })
}

const cleanUpAudioInstances = () => {
    const playlist = audioState.playlist
    Object.keys(playlist).forEach((key) => {
        const audio = audioInstances[key]
        if (audio) {
            audio.pause()
            audio.removeEventListener("ended", handleAudioEnded(key))
            delete audioInstances[key]
        }
    })
}

const handleAudioEnded = (key) => () => {
    if (!audioState.playlist[key].loop) {
        audioState.isPlaying[key] = false
    }
}

initAudioInstances()
subscribe(audioState.isPlaying, updatePlayingAudios)
window.addEventListener("unload", cleanUpAudioInstances)
document.addEventListener("click", () => {
    audioState.canPlay = true;
});

export { audioInstances,
    playSound, pauseSound, changeSoundTime,
    listenAtTime, setMasterVolume, }

window.setMasterVolume = setMasterVolume