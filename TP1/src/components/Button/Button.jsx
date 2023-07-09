// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Buttonmodule.css';

// eslint-disable-next-line react/prop-types
const Button = ({ color, label, callback }) => {
    return (
        <button style={{ backgroundColor: color }} onClick={callback} className={styles.button}>
            {label}
        </button>
    );
};

export default Button;