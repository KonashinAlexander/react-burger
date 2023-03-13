import React, { useEffect } from "react";
import PropsType from "props-type";
import style from '../modal-overlay/modal-overlay.module.css';


export const ModalOverlay = ({onClick, onKeyDown}) => {

    const handleKeyDown = (e) => {
        console.log(e.key)
    }
    

    return (
        <div className={style.overlay} onClick={onClick} onKeyDown={handleKeyDown}>

        </div>
    ) 
}

ModalOverlay.propsType = {
    onClick: PropsType.func,
    onKeyDown: PropsType.func
}