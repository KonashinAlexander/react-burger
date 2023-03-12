import React, { useEffect } from "react";
import PropsType from "props-type";
import style from '../modal-overlay/modal-overlay.module.css';


export const ModalOverlay = ({onClick}) => {

    return (
        <div className={style.overlay}>

        </div>
    ) 
}

ModalOverlay.propsType = {
    onClick: PropsType.func
}