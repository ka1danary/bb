import React from 'react';
import moduleInput from  './MyInput.module.sass'

const MyInput = ({title, ...props}) => {
    return (
        <input placeholder={title} className={moduleInput.inputBox} {...props}/>
    );
};

export default MyInput;