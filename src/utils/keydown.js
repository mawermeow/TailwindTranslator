import {keydownChecker, specialKeyChecker} from "./keydownChecker";
import {mutuallyClose} from "../hooks/useMutually";
import {enterClosestHotspot, spotEnable} from "./krpano";

// handlerModules = ['infoHandler']
// window.infoHandler={
//     visible,
//     'Escape':()=>{},
//     'ArrowLeft':()=>{},
//     'ArrowRight':()=>{},
//     'ArrowUp':()=>{},
//     'ArrowDown':()=>{},
//     'Space':()=>{},
// }

export const keydownSetting=(handlerModules={},keySequences=[])=>{
    keydownChecker(keySequences)

    specialKeyChecker({
        'Escape':()=>{
            handleSpecialAction(handlerModules,'Escape')
            mutuallyClose('')
            spotEnable()
            document.getElementById('krpanoSWFObject')?.focus()
        },
        'ArrowUp':()=>{
            handleSpecialAction(handlerModules,'ArrowUp',()=>{
                window.krHelper?.krObj?.control?.panoControl?.focusLoss()
            },()=>{
                document.getElementById('krpanoSWFObject')?.focus()
            })
        },
        'ArrowDown':()=>{
            handleSpecialAction(handlerModules,'ArrowDown',()=>{
                window.krHelper?.krObj?.control?.panoControl?.focusLoss()
            },()=>{
                document.getElementById('krpanoSWFObject')?.focus()
            })
        },
        'ArrowLeft':()=>{
            handleSpecialAction(handlerModules,'ArrowLeft',()=>{
                window.krHelper?.krObj?.control?.panoControl?.focusLoss()
            },()=>{
                document.getElementById('krpanoSWFObject')?.focus()
            })
        },
        'ArrowRight':()=>{
            handleSpecialAction(handlerModules,'ArrowRight',()=>{
                window.krHelper?.krObj?.control?.panoControl?.focusLoss()
            },()=>{
                document.getElementById('krpanoSWFObject')?.focus()
            })
        },
        'Space':()=>{
            handleSpecialAction(handlerModules,'Space',()=>{

            },()=>{
                enterClosestHotspot()
            })
        },
    })
}


// 以下為專案特化方法
const executeModuleHandler = (key, module, additionalAction) => {
    const moduleObj = window[module];
    if (moduleObj?.visible) {
        if(typeof moduleObj[key] === 'function') {
            moduleObj[key]();
        }
        additionalAction();
    }
};

const handleSpecialAction = (handlerModules, key, customCallback=()=>{}, defaultCallback=()=>{}) => {
    let isDefault = true;
    handlerModules.forEach(module => {
        executeModuleHandler(key, module, () => {
            isDefault = false;
            customCallback();
        });
    });
    if (isDefault) {
        defaultCallback();
    }
};