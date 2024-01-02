import {proxy, useSnapshot} from "valtio";
import useElementSize from "../../hooks/useElementSize";
import {windowSizeState} from "../../stores/windowSizeState";
import {useEffect, useState} from "react";

export const mouseState = proxy({clientX:0, clientY:0,type:""})

export const clickMenuProps=(handler)=>{
    return {
        onClick:(e)=>{
            mouseState.clientX = e.clientX
            mouseState.clientY = e.clientY
            handler&&handler()
        },
    }
}
export const hoverMenuProps=(type,hoverHandler,leaveHandler)=>{
    return {
        onMouseMove: (e) => {
            mouseState.clientX = e.clientX
            mouseState.clientY = e.clientY
            mouseState.type = type
            hoverHandler&&hoverHandler()
        },
        onMouseLeave: (e) => {
            mouseState.type = ""
            leaveHandler&&leaveHandler()
        }
    }
}
export const contextMenuProps=(handler)=>{
    return {
        onContextMenu:(e)=>{
            e.preventDefault()
            mouseState.clientX = e.clientX
            mouseState.clientY = e.clientY
            handler&&handler()
        },
    }
}

const ContextMenuContainer = ({
                                  children,
                                  className="fixed z-50 pointer-events-none",
                                  positionY = 'bottom',
                                  positionX = 'center',
                                  positionOffset = 10,
                                  edgeDistance = 16,
                                  ...rest
                              }) => {
    const { clientX, clientY } = useSnapshot(mouseState);
    const [ref, width, height] = useElementSize([children]);
    const { currentWidth, currentHeight } = useSnapshot(windowSizeState);

    const [position,setPosition]=useState({top:0,left:0})

    useEffect(()=>{
        const offsetX = positionX === "center" ? -width / 2 : positionX === "left" ? -width - positionOffset : positionOffset;
        const offsetY = positionY === "bottom" ? positionOffset : positionY === "top" ? -height - positionOffset : -height / 2;

        let newX = clientX + offsetX + window.scrollX;
        let newY = clientY + offsetY + window.scrollY;

        newX = Math.max(newX, edgeDistance);
        newY = Math.max(newY, edgeDistance);

        if (newX + width > currentWidth) {
            newX = currentWidth - width - edgeDistance;
        }
        if (newY + height > currentHeight) {
            newY = currentHeight - height - edgeDistance;
        }

        setPosition({ top: newY, left: newX });
    }, [ width, height, clientX, clientY, currentWidth, currentHeight]);



    return (
        <div
            ref={ref}
            style={position}
            className={className}
            {...rest}
        >
            {children}
        </div>
    );
};

export default ContextMenuContainer;
