import React from 'react';
import moduleMain from './MainPage.module.sass'
import MyCategory from '../../ui/category/MyCategory';
import MySmallCard from '../../ui/smallCard/MySmallCard';

const MainPage = ({ data, category, type, ...props}) => {
    return (
        <div>
            <div className={moduleMain.mainPageBox}>
                <div style={{'position' : 'sticky', 'top' : '0', 'background' : '#171820', 'height' : '130px', 'padding-top' : '10px'}}>
                    <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 18" fill="none">
                            <path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z" fill="#FDC029" />
                        </svg>
                        <h1 style={{ 'margin-left': '10px' }}>
                            Улей
                        </h1>
                    </div>
                    <div style={{ 'display': 'flex' }}>
                        <MyCategory title='Категория' category={category} style={{ 'margin-right': '30px' }} />
                        <MyCategory title='Тип' category={type}/>
                    </div>
                </div>

                <h1 style={{ 'margin-top': '40px' }}>
                    Недавние объявления </h1>.
                <div className={moduleMain.cardBox}>
                    {data.map((el) =>
                        <div>
                            <MySmallCard
                                data={el}
                            />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default MainPage;