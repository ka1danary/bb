import React from 'react';
import moduleButtonBar from './MyButtonHome.module.sass'

const MyButtonCreateOrder = () => {
    return (
        <div className={moduleButtonBar.buttonBox} style={{'width' : '157px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <path d="M6 8.27197H0V6.27197H6V0.271973H8V6.27197H14V8.27197H8V14.272H6V8.27197Z" fill="#171820" />
            </svg>
            <div>
                    Создать заказ
                </div>
        </div>
    );
};

export default MyButtonCreateOrder;