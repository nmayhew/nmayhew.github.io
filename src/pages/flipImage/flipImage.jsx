import React, { useState } from 'react';
import './flipImage.css'; // Import the CSS file for the component
import frontImg from '../../assets/me/me.JPG';
import backImg from '../../assets/me/me_back.JPG';
const FlipImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className={`flip-image ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className="front">
                <img src={frontImg} alt="Front formal" />
            </div>
            <div className="back">
                <img src={backImg} alt="Back informal" />
            </div>
        </div>
    );
};

export default FlipImage;
