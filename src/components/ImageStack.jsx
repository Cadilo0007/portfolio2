// ImageStack.jsx
import { useState } from 'react';
import HeroPic from '../assets/profile1.jpg';
import HeroPic1 from '../assets/profile2.jpg';
import HeroPic2 from '../assets/profile3.jpg';
import HeroPic3 from '../assets/profile4.jpg';
import HeroPic4 from '../assets/profile5.jpg';

const imagesArray = [HeroPic, HeroPic2, HeroPic3, HeroPic4, HeroPic1]; // You can replace with different images later

const ImageStack = () => {
  const [currentIndex, setCurrentIndex] = useState(imagesArray.length - 1);

  const handleClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <figure className="images relative w-32 h-32">
      {imagesArray.map((src, index) => {
        let className = 'image';
        if (index === currentIndex) {
          className += ' image--current';
        } else if (index === (currentIndex + 1) % imagesArray.length) {
          className += ' image--next';
        } else {
          className += ' image--out';
        }

        return (
          <img
            key={index}
            src={src}
            alt={`Profile ${index + 1}`}
            className={`${className} absolute w-30 h-30 object-cover rounded-xl transition-all cursor-pointer z-99`}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </figure>

  );
};

export default ImageStack;
