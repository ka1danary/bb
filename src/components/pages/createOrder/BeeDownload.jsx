import React from 'react';
import moduleCreateOrderPage from './CreateOrder.module.sass'
import { Link } from 'react-router-dom';
import MyButton from '../../ui/buttons/buttonOrange/MyButton';
import MyBee from '../../ui/beeImg/MyBee';


const BeeDownload = () => {
    return (
        <div className={moduleCreateOrderPage.create}>
            <div className={moduleCreateOrderPage.createBox}>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <img src="BeeBoardApp\client\src\components\pages\createOrder\Sprite-0002.png" alt="bee"/>
                    <h1 style={{ 'margin-left': '10px' }}>
                        Создать заказ
                    </h1>
                </div>
                <div style={{ 'margin-top': '30px', 'display': 'flex', 'alignItems': 'right', 'justifyContent': 'right' }}>
                    <Link to='/'>
                        <MyButton title='Готово!' />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BeeDownload;