import React from 'react';
import {Link} from 'react-router-dom'
import moduleBee from './MyBee.module.sass'
import bee from './Sprite-0002.png'

const MyBee = () => {
    return (
        <div className={moduleBee.beeBox}>
            <img src={bee} alt='bee'/>
            <Link to='https://t.me/BeeAssistantBot' target="_blank" style={{'color' : '#DF751D', 'font-size': '24px', 'font-weight' : '300'}}>Bee Bot</Link>
        </div>
    );
};

export default MyBee;