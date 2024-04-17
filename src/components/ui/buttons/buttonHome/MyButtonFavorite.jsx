import React from 'react';
import moduleButtonBar from './MyButtonHome.module.sass'

const MyButtonFavorite = () => {
    return (
        <div className={moduleButtonBar.buttonBox} style={{'width' : '133px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.48 11.9758L8 10.4758L10.52 11.9955L9.86 9.15343L12.08 7.25869L9.16 7.00211L8 4.3179L6.84 6.98238L3.92 7.23896L6.14 9.15343L5.48 11.9758ZM3.06 15.2719L4.36 9.7258L0 5.99554L5.76 5.50211L8 0.271851L10.24 5.50211L16 5.99554L11.64 9.7258L12.94 15.2719L8 12.3311L3.06 15.2719Z" fill="black" />
            </svg>
            <div>
                Мои заявки
            </div>
        </div>
    );
};

export default MyButtonFavorite;