import React, { useState } from "react"
import cn from 'classnames';
import style from '../modal/modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../modal-overlay";


export const Modal = ({ title, onClose, children }) => { 
    
    // return createPortal (
    //     <>
    //     <div className={style.modal}>
    //         <h1 className={style.title}>{title}</h1>
    //         <CloseIcon onClick={onClose}/>
    //         {children}
    //     </div>
    //     <ModalOverlay onClick={onClose}></ModalOverlay>
    //     </>
    // )
        
//     return (
//         <div className={style.popup}>
//             <h1>Заголовок модального окна</h1>
//             <button className={style.button} onClick={() => {console.log('push the button')}}>
//                 <CloseIcon />
//             </button>
//         </div>
//    )
}