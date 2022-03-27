import React, { useState } from 'react';
import './ColorBox.scss'
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

const getRandomColor = () => {
    const colorList = [
        'pink',
        'black',
        'red',
        'blue',
        'green',
    ]

    const randomIndex = Math.trunc(Math.random() * 5); 
    // Math.trunc: Lấy phần số nguyên
    return colorList[randomIndex];
}


function ColorBox(props) {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'pink';
        return initColor;
    });
    
    const handleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }

    return (
        <div
            className='color-box'
            style={{backgroundColor: color}}
            onClick={handleBoxClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;