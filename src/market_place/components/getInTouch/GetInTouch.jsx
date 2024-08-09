import React from 'react';
import svgimage from '../../assets/Ellipse 25.svg';

const GetInTouch = () => {
  return (
    <div className='w-full text-center justify-center m-auto flex'>
        <div className='justify-center flex flex-col py-4 text-white'>
            <h1 className='text-4xl'>Get in Touch</h1>
            <p className='text-lg '>We provide 24/7 customer services. Reach out to us today if you need anything.</p>
            <img className='w-1/2 m-auto py-3' src={svgimage} alt="" />
        </div>
    </div>
  )
}

export default GetInTouch