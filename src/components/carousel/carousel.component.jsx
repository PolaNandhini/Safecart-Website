// import React from "react";
// import './carousel.component.css'
// import tv from "../../assets/images/tv.webp"
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Carousel } from 'react-responsive-carousel';
// import Container from 'react-bootstrap/Container';
// import { Link } from "react-router-dom";
// export function Carousell() {

//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 4,
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2,
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//         },
//       };


//     const items = [
//         {id: 1, image: tv, text: 'Dnata Headquarters- Emirates', text1: 'Business Bay, Zaabeel' },
//         {id: 2, image: tv, text: 'Burj Khalifa', text1: 'Downtown Dubai, Zaabeel'},
//         {id: 3, image: tv, text: 'Hatta Sedr Trailers', text1: 'Hatta, Al Aweer'},
//         {id: 4, image: tv, text: 'Best Royal Trips Travel', text1: 'Al Satwa, Jumeirah' },
//         {id: 5, image: tv, text: 'Helicopter Tour Dubai', text1: 'Al Sufouh 1, Jumeirah' },
//         {id: 6, image: tv, text: 'Lama Tourism', text1: 'Al Khabaisi, Deira' },
//         {id: 7, image: tv, text: 'Al Dhafra Insurance', text1: 'Al Khabaisi, Deira' },
//         {id: 8, image: tv, text: 'Tumi', text1: 'Downtown Dubai, Zaabeel' },
//         {id: 9, image: tv, text: 'Donatello Hotels &amp; Resorts', text1: 'Al Barsha 1, Hadaeq Mohammad Bin Rashid' },
//         {id: 1, image: tv, text: 'Lama Tourism', text1: 'Al Khabaisi, Deira' },
//         ];
//     return (

        
//         <>
            
//             <Container >
               

//                 <Row>
//                     <Col>
//                         <Carousel
//                             responsive={responsive}
//                             infinite={true}
//                             autoPlay={true}
//                             autoPlaySpeed={3000}
//                         >
//                             {items.map((item) => (

                               
//                                     <div className="tarvelscroll" key={item.id} style={{ position: 'relative', overflow: 'hidden', margin: '8px' }}>
//                                         <img src={item.image} alt={item.text} style={{ width: '30%', height: '100px', borderRadius: '12px' }} />
//                                         <div style={{
//                                             position: 'absolute',
//                                             bottom: 0,
//                                             left: 0,
//                                             width: '20%',
//                                             height: '50%',
//                                             borderRadius: '12px',
//                                             background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)'
//                                         }}></div>
//                                         <p style={{ position: 'absolute', bottom: '20px', color: 'white', fontSize: '16px', marginLeft: '10px' }}>{item.text1}</p>
//                                         <p style={{ position: 'absolute', bottom: '50px', color: 'white', marginLeft: '10px' }}>{item.text}</p>
//                                     </div>
                              
//                             ))}
//                         </Carousel>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }

// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
// import tv from "../../assets/images/tv.webp";



// const Carousell= () => {
//   const [index, setIndex] = useState(0);

//   const slides = [
//     {
//       image: tv,
//       alt: 'Slide 1',
//       title: 'Slide 1 Title',
//       content: 'Slide 1 Content',
//     },
//     {
//       image:tv,
//       alt: 'Slide 2',
//       title: 'Slide 2 Title',
//       content: 'Slide 2 Content',
//     },
//     // Add more slides as needed
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <Carousel activeIndex={index} onSelect={setIndex}>
//       {slides.map((slide, idx) => (
//         <Carousel.Item key={idx}>
//           <img
//             className="d-block w-100"
//             src={slide.image}
//             alt={slide.alt}
//           />
//           <Carousel.Caption>
//             <h3>{slide.title}</h3>
//             <p>{slide.content}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default Carousell;
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import travel1 from './famous1.jpg';
import tv from '../../assets/images/tv.webp';
import { Container, Row, Col } from 'react-bootstrap';

const Carousell= () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
         
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
         
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        
        },
      };
    
    
    
      const items = [
        { id: 1, image: tv, text: 'Dnata Headquarters- Emirates', text1: 'Business Bay, Zaabeel' },
        { id: 2, image: tv, text: 'Burj Khalifa', text1: 'Downtown Dubai, Zaabeel' },
        { id: 3, image: tv, text: 'Hatta Sedr Trailers', text1: 'Hatta, Al Aweer' },
        { id: 4, image: tv, text: 'Best Royal Trips Travel', text1: 'Al Satwa, Jumeirah' },
        { id: 5, image: tv, text: 'Helicopter Tour Dubai', text1: 'Al Sufouh 1, Jumeirah' },
        { id: 6, image: tv, text: 'Lama Tourism', text1: 'Al Khabaisi, Deira' },
        { id: 7, image: tv, text: 'Al Dhafra Insurance', text1: 'Al Khabaisi, Deira' },
        { id: 8, image: tv, text: 'Tumi', text1: 'Downtown Dubai, Zaabeel' },
        { id: 9, image: tv, text: 'Donatello Hotels &amp; Resorts', text1: 'Al Barsha 1, Hadaeq Mohammad Bin Rashid' },
        { id: 1, image: tv, text: 'Lama Tourism', text1: 'Al Khabaisi, Deira' },
      ];
  return (
    <div>
    <Container>

      <h3>Top 10 <span style={{ color: '#B2B2B2' }}>Travel Destinations</span></h3>
      <Row>
        <Col >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
          >
            {items.map((item) => (
              <div key={item.id} style={{margin:'20px'}}className="carousel-itemsing">
                <img src={item.image} alt={item.text} style={{ width: '100%', height: '530px', borderRadius: '12px', margin: '0 10px' }}/>
                
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%', 
                  height: '50%',
                  borderRadius: '12px',

                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)'
                }}></div>
                <div className="carousel-texting">
                  <p>{item.text1}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Carousell;