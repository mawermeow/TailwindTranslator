import {useSnapshot} from "valtio";
import {uiState} from "../stores/model";
import {useEffect} from "react";

/*
  使用方式：
  const { visible } = useMutually(moduleName, showCallback, hideCallback);

  關於 useMutually：
  這個 React Hook `useMutually` 用於管理界面中多個模組的相互顯示狀態。
  當啟用一個模組時，它將自動隱藏其他所有已註冊的模組，適用於需要互斥顯示的界面元素。

  ## 參數：
  - `moduleName`：字符串，表示當前模組的唯一標識。
  - `showCallback`：函數，當模組顯示時的回調函數。接收一個對象參數，包含 `showModule`（當前顯示模組名稱）和 `hideModules`（被隱藏模組的名稱數組）。
  - `hideCallback`：函數，當模組隱藏時的回調函數。接收一個對象參數，包含 `showModule`（當前顯示模組名稱）和 `hideModules`（被隱藏模組的名稱數組）。

  ## 返回值：
  - 返回一個對象 `{ visible }`，其中 `visible` 是一個布爾值，表示當前模組是否顯示。
*/


const mutuallyList=[]

export const mutuallyClose=(ruleOut)=>{
    mutuallyList.filter(el=>el!==ruleOut).forEach(el=>{
        uiState[el].visible = false
    })
}

const useMutually=(module,showCallback=()=>{},hideCallback=()=>{})=>{
    const {visible}=useSnapshot(uiState[module])

    useEffect(() => {
        const hasModule = mutuallyList.find(el=>el===module)
        if(module && !hasModule){
            mutuallyList.push(module)
        }
    }, []);

    useEffect(() => {
        if(visible){
            mutuallyClose(module)
            showCallback({showModule:module,hideModules:mutuallyList.filter(el=>el!==module)})
        }else{
            hideCallback({showModule:module,hideModules:mutuallyList.filter(el=>el!==module)})
        }
    }, [visible]);

    return {visible}
}
export default useMutually