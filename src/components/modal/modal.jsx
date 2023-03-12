import React, { useState } from "react"
import { createPortal } from "react-dom";
import PropTypes, { number, string } from 'prop-types';
import cn from 'classnames';
import style from '../modal/modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

const modalRoot = document.querySelector('#modals')

export const Modal = ({ title, onClose, children }) => { 
    
    return createPortal (
        <>
            <div className={style.modal}>
                <div className={style.box_title}>
                    <h1 className={style.title}>{title}</h1>
                    <CloseIcon onClick={onClose}/>
                </div>
                {children}
            </div>
            <ModalOverlay onClick={onClose}></ModalOverlay>
        </>, 
        modalRoot
    )
}



Modal.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.any
}

ModalOverlay.propTypes = {    
    onClick: PropTypes.func    
}

CloseIcon.propTypes = {
    onClick: PropTypes.func 
}