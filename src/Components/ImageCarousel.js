// import React, { useState } from 'react';
// import './ImageCarousel.css';

// const images = [
//   "https://via.placeholder.com/300/0000FF/FFFFFF?text=Image1",
//   "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image2",
//   "https://via.placeholder.com/300/00FF00/FFFFFF?text=Image3",
//   "https://via.placeholder.com/300/FFFF00/FFFFFF?text=Image4",
//   "https://via.placeholder.com/300/FF00FF/FFFFFF?text=Image5",
//   "https://via.placeholder.com/300/00FFFF/FFFFFF?text=Image6"
// ];

// const ImageCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const handleNext = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const visibleImages = () => {
//     const imagesCount = images.length;
//     const endIndex = (startIndex + 3) % imagesCount;
//     return endIndex > startIndex
//       ? images.slice(startIndex, startIndex + 3)
//       : [...images.slice(startIndex), ...images.slice(0, endIndex)];
//   };

//   return (
//     <div className="carousel-container">
//       <button className="carousel-button" onClick={handlePrev}>&lt;</button>
//       <div className="carousel">
//         {visibleImages().map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Event ${startIndex + index + 1}`}
//             className={`carousel-image ${index === 1 ? 'active' : ''}`}
//           />
//         ))}
//       </div>
//       <button className="carousel-button" onClick={handleNext}>&gt;</button>
//     </div>
//   );
// }

// export default ImageCarousel;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'; // Import your CSS file

const CarouselComponent = () => {
  const settings = {
    centerMode: false, // Disable center mode to show only 3 images fully
    centerPadding: '0px', // No padding on the sides
    slidesToShow: 3, // Show exactly 3 images
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        }
      }
    ]
  };

  return (
    <div className="carousel">
      <Slider {...settings} className="carousel-main">
        <div>
          <img src="https://lh4.googleusercontent.com/xGrEaIqsFUFNz2VOOG7BDZ4GeNQ6lWTQWUuPyAFxIhTSU0vuIVpqgAQqLDMP-jrV_aY=w2400" alt="Tree Plantation" />
          <h2 className="name">Tree Plantation</h2>
        </div>
        <div>
          <img src="https://lh6.googleusercontent.com/tE36cHV2BNamnMFLmylZTEl0pAgZMkbCy8mux2h6i3rNP3coyGcSI3kaLnGKa9d2V6M=w2400" alt="Donation Drive" />
          <h2 className="name">Donation Drive</h2>
        </div>
        {/* <div>
          <img src="https://lh5.googleusercontent.com/vvjBKV4UcpVWeiBFfH4ocHHjKw_WOApkbZ6bcrG_fOFIuTJLJF2vlDlNeOe2YEYtcXM=w2400" alt="Diwali" />
          <h2 className="name">Diwali</h2>
        </div> */}
        <div>
          <img src="https://lh4.googleusercontent.com/3yJ2JamjexdSnjLbnA9L2UA5WkM3up1RfR1-UlygsuVn43YVT-V5Eu-uaboT5a64nk8=w2400" alt="Christmas" />
          <h2 className="name">Christmas</h2>
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/3n2tqKWbPQ4n3oAu4oAo5eKUlZXCGafwWPHpC9WxlHTFvMHwqIvihHn-Jt0h_3yhnog=w2400" alt="Cleanup Drives" />
          <h2 className="name">Cleanup Drives</h2>
        </div>
        <div>
          <img src="https://lh5.googleusercontent.com/b_jXqf1NWKH0XP-EbzBm8SmIjrPd-09pG2CdhheCdWe99I3kwgyG8CKJHALIOoQ61Hc=w2400" alt="Udaan Marathon" />
          <h2 className="name">Udaan Marathon </h2>
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/MXKhaFE_jRBerQ4VrV6NT0dhS3-l4kxIgkelzdLi9FpHVgeVmAjg5qXYO4FQ0Zl1MLg=w2400" alt="Orphanage Visits" />
          <h2 className="name">Orphanage Visits</h2>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;

