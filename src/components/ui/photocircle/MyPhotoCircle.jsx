import React from 'react';
import MyPhoto from './photoCard/MyPhoto';
import moduleMyPhotoCircle from './MyPhotoCircle.module.sass'
import photo1 from './1.jpg'
import photo2 from './2.jpg'

const MyPhotoCircle = ({ img = ['./1.jpg', '2', '3', '4'] }) => {

    const image = [photo1, photo2, photo1, photo2]
    return (
        <div className={moduleMyPhotoCircle.circleBox}>
            {image.map((el) =>
                <div>
                    <MyPhoto img={el} />
                </div>
            )}
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                    <path d="M12.3333 10L2.33333 20L0 17.6667L7.66667 10L0 2.33333L2.33333 0L12.3333 10Z" fill="black" />
                </svg>
            </button>
        </div>
    );
};

export default MyPhotoCircle;