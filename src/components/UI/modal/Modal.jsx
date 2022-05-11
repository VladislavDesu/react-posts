import React from 'react';
import cl from "./Modal.module.scss"

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.modal];

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
            <div onClick={(e) => e.stopPropagation()} className={cl.modalContent}>{children}</div>
        </div>
    );
};

export default Modal;