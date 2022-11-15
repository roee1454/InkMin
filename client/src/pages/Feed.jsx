import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'



export default function Feed() {
  return (
    <div className='slider-wrapper'>
      <Splide options={{ perPage: 2, width: 600, height: 200, }}>
        <SplideSlide><img src={img1} alt='קעקוע#1'></img></SplideSlide>
        <SplideSlide><img src={img2} alt='2'></img></SplideSlide>
        <SplideSlide><img src={img3} alt='3'></img></SplideSlide>
        <SplideSlide><img src={img4} alt='4'></img></SplideSlide>
      </Splide>
    </div>
  )
}
