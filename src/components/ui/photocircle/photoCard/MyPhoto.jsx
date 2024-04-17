import React from 'react';
import modulePhoto from './MyPhoto.module.sass'

const MyPhoto = ({img, ...props}) => {
    return (
        <button>
            <img src={img} alt="Name" className={modulePhoto.photoBox}/>
        </button>
    );
};

export default MyPhoto;