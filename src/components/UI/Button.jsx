import styles from "../../styles/UI/Button.module.scss";

import React from 'react';

const Button = ({text, ...props}) => {
    return (
        <button {...props} className={styles.Button}>
            {text}
        </button>
    );
};

export default Button;
