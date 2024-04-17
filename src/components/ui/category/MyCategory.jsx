import React from 'react';
import { useState } from 'react';
import moduleCategory from './MyCategory.module.sass'

const MyCategory = ({ title, category=[], ...props }) => {

    const [categoryButton, setCategory] = useState(title)

    const [visible, setVisible] = useState(false)

    const rootClasses = [moduleCategory.dropCategoryBox]

    if (visible) {
        rootClasses.push(moduleCategory.active)
        console.log('work')
    }

    return (
        <div>
            <button {...props} className={moduleCategory.categoryBox} onClick={() => setVisible(!visible)}>
                {categoryButton}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                    <path d="M9 11L0 2.08108L2.1 0L9 6.83784L15.9 0L18 2.08108L9 11Z" fill="black" />
                </svg>
            </button>
            <div className={rootClasses.join(' ')}>
                {category.map((el) => 
                    <button 
                    style={{'padding' : '3px', 'display' : 'flex', 'justifyContent' : 'space-between', 'alignContent' : 'center'}} className={moduleCategory.buttonBox}
                    onClick={() => setCategory(el)}
                    >
                        {el}
                    </button>
                )} 
            </div>
        </div>

    );
};

export default MyCategory;