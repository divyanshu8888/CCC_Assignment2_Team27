import React, { useState } from 'react';

const HoverImage = ({ imageSrc, popupContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`hover-image-container ${isHovered ? 'shift-left' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="img-popup-container">
        <img className='hoverimg' src={imageSrc} alt="Hover Image" />
        {isHovered && <div className="popup">{popupContent}</div>}
      </div>
    </div>
  );
};

export default HoverImage;
