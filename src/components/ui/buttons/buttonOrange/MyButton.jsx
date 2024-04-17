import React from 'react';
import moduleButton from './MyButton.module.sass'

const MyButton = ({title, ...props}) => {
    return (
        <button {...props} className={moduleButton.buttonBox}>
            {title}
        </button>
    );
};

export default MyButton;