import styles from "../../styles/UI/Modal.module.scss";

import React from 'react';

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [styles.Modal];
    if(visible) rootClasses.push(styles.active)

    return (
        <div className={rootClasses.join(" ")} onClick={()=>setVisible(false)}>
            <div className={styles.ModalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
