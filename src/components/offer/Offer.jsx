// import React from 'react';
// import { offer } from '../../Data';
// // Import Swiper React components from the main entry point
// import { Swiper, SwiperSlide } from 'swiper'; // Import directly from 'swiper'

// // Import Swiper styles from the main entry point
// import 'swiper/swiper-bundle.css'; // This should include all necessary styles

// // Import required modules directly from 'swiper'
// import { Pagination } from 'swiper'; // Import modules directly from 'swiper'

// import './offer.css';

// const Offer = () => {
//   return (
//     <section className="offer section" id="offer">
//       <h2 className="section__title" data-title="Offer">
//         Special Offer For You  
//       </h2>

//       <Swiper 
//         pagination={{
//           type: 'bullets', // Add pagination type
//         }} 
//         modules={[Pagination]} 
//         className="container"
//       >
//         {offer.map(({ img, title, discount, description }, index) => {
//           return (
//             <SwiperSlide key={index} className="offer__item"> {/* Add a unique key */}
//               <div className="offer__img-wrapper">
//                 <img src={img} alt="" className="offer__img" />
//               </div> 

//               <div className="offer__content">
//                 <h3 className="offer__title">{title}</h3>    
//                 <span className="offer__discount">{discount}</span>
//                 <p className="offer__description">{description}</p>
//                 <a href="/" className="btn">Order Now!</a>
//               </div>      
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// }

// export default Offer;