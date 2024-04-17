import React from 'react';
import moduleButtonBar from './MyButtonHome.module.sass'

const MyButtonHome = () => {
    return (
        <div className={moduleButtonBar.buttonBox} style={{'width' : '74px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M1.75 14.2222H4.375V8.88889H9.625V14.2222H12.25V6.22222L7 2.22222L1.75 6.22222V14.2222ZM0 16V5.33333L7 0L14 5.33333V16H7.875V10.6667H6.125V16H0Z" fill="black" />
            </svg>
            <div>
                Улей
            </div>
        </div>
    );
};

export default MyButtonHome;