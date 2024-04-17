import React from 'react';
import moduleBigCard from './BigCard.module.sass'
import MyUserName from '../userName/MyUserName';
import MyPhotoCircle from '../photocircle/MyPhotoCircle';
import MyButton from '../buttons/buttonOrange/MyButton';
import { Link } from 'react-router-dom';

const BigCard = ({ active, setActive, data, experience='1 год', ...props }) => {

    const root = [moduleBigCard.card]

    if(active) {
        root.push(moduleBigCard.active)
        console.log('working')
    }

    return (
        <div className={root.join(' ')} onClick={() => setActive(false)}>
            <div className={moduleBigCard.cardBox} onClick={e => e.stopPropagation()}>
                <div className={moduleBigCard.nameBox}>
                    <MyUserName name={data.name} />
                    <p>
                        {data.date}
                    </p>
                </div>
                <div className={moduleBigCard.geoBox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{'margin-right' : '10px'}}>
                        <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="black" />
                    </svg> {data.geo}
                </div>
                <div className={moduleBigCard.textBox}>
                    Категория: {data.category}
                </div>
                <div className={moduleBigCard.textBox}>
                    Стаж: {experience}
                </div>
                <div className={moduleBigCard.textBox} style={{ 'fontSize': '18px' }}>
                    {data.title}
                </div>
                <div>
                    <h1 className={moduleBigCard.textBox} style={{'color' : '#000', 'font-size' : '20px'}}>
                        Фото
                    </h1>
                    <MyPhotoCircle />
                </div>
                <div className={moduleBigCard.linkBox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M24 4C18.6957 4 13.6086 6.10714 9.85786 9.85786C6.10714 13.6086 4 18.6957 4 24C4 29.3043 6.10714 34.3914 9.85786 38.1421C13.6086 41.8929 18.6957 44 24 44C29.3043 44 34.3914 41.8929 38.1421 38.1421C41.8929 34.3914 44 29.3043 44 24C44 18.6957 41.8929 13.6086 38.1421 9.85786C34.3914 6.10714 29.3043 4 24 4Z" fill="#29B6F6" />
                        <path d="M33.95 15L30.204 34.126C30.204 34.126 30.043 35 28.959 35C28.383 35 28.086 34.726 28.086 34.726L19.972 27.993L16.002 25.992L10.907 24.637C10.907 24.637 10 24.375 10 23.625C10 23 10.933 22.702 10.933 22.702L32.249 14.234C32.249 14.234 32.9 13.999 33.375 14C33.667 14 34 14.125 34 14.5C34 14.75 33.95 15 33.95 15Z" fill="white" />
                        <path d="M23.0001 30.505L19.5741 33.879C19.5741 33.879 19.4251 33.994 19.2261 33.999C19.1571 34.001 19.0831 33.99 19.0071 33.956L19.9711 27.991L23.0001 30.505Z" fill="#B0BEC5" />
                        <path d="M29.897 18.196C29.728 17.976 29.416 17.936 29.196 18.103L16 26C16 26 18.106 31.892 18.427 32.912C18.749 33.933 19.007 33.957 19.007 33.957L19.971 27.992L29.803 18.896C30.023 18.729 30.064 18.416 29.897 18.196Z" fill="#CFD8DC" />
                    </svg>
                    <p>
                        <Link to='https://t.me/ka1danary' target="_blank" style={{ 'color': '#29B6F6', 'fontSize': '18px' }}>{data.tg}</Link>
                    </p>
                </div>
                <div>
                    <button className={moduleBigCard.numberBox} title="Скопировать номер">
                    {data.number}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <div className={moduleBigCard.closeBox}>
                    <MyButton title='Скрыть' onClick={(() => setActive(false))}/>
                </div>
            </div>
        </div>
    );
};

export default BigCard;