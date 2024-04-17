import React from 'react';
import moduleButtonLight from './MyButtonLight.module.sass'

const MyButtonLight = ({title, ...props}) => {
    return (
        <button {...props} className={moduleButtonLight.buttonBox}>
            {title}
        </button>
    );
};

export default MyButtonLight;