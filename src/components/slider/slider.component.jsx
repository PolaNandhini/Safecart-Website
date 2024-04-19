// import React from "react"
// import './slider.component.css'
// import scent from "../../assets/images/scent.webp"
// import women1 from "../../assets/images/women1.webp"
// export function Slider() {
//     return (
//         <>
//             <div id="carouselExampleIndicators" class="carousel slide">
//                 <div class="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                 </div>
//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         <img src={scent} class="d-block w-100" alt="..."/ >
//                     </div>
//                     <div class="carousel-item">
//                         <img src={women1} class="d-block w-100" alt="..."/>
//                     </div>
//                     <div class="carousel-item">
//                         <img src={scent} class="d-block w-100" alt="..."/>
//                     </div>
//                 </div>
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </>
//     )
// }





import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import tv from "../../assets/images/tv.webp";

const Slide= () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: tv,
      alt: 'Slide 1',
      title: 'Slide 1 Title',
      content: 'Slide 1 Content',
    },
    {
      image:tv,
      alt: 'Slide 2',
      title: 'Slide 2 Title',
      content: 'Slide 2 Content',
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Carousel activeIndex={index} onSelect={setIndex}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.alt}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slide;