import React from 'react';
import moduleChecbox from './MyCheckbox.module.sass'

const MyChecbox = ({...props}) => {
    return (
        <input type='checkbox' className={moduleChecbox.box}/>
    );
};

export default MyChecbox;