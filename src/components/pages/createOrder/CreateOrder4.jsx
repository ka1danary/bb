import React from 'react';
import moduleCreateOrderPage from './CreateOrder.module.sass'
import { Link } from 'react-router-dom';
import MyInput from '../../ui/inputs/MyInput';
import MyButton from '../../ui/buttons/buttonOrange/MyButton';

const CreateOrder4 = () => {
    return (
        <div className={moduleCreateOrderPage.create}>
            <div className={moduleCreateOrderPage.createBox}>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z" fill="#FDC029" />
                    </svg>
                    <h1 style={{ 'margin-left': '10px' }}>
                        Создать заказ
                    </h1>
                </div>
                <div>
                    <h2>
                        Город
                    </h2>
                    <MyInput title='Владивосток'/>
                </div>
                <div>
                    <h2>
                        Дом
                    </h2>
                    <MyInput title='Дом'/>
                </div>
                <div>
                    <h2>
                        Квартира
                    </h2>
                    <MyInput title='Дом'/>
                </div>
                <div style={{ 'margin-top': '30px', 'display': 'flex', 'alignItems': 'right', 'justifyContent': 'right' }}>
                    <Link to='/'>
                        <MyButton title='Далее' />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CreateOrder4;