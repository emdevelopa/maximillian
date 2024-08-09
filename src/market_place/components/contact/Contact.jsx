import React from 'react';
import Button from './Button';


const Contact = () => {
  return (
    <div className='m-auto text-center'>
      <Button />

      <div className='bg-[#282626] p-6 m-auto justify-center text-center rounded-lg'>
        <h1 className='text-4xl text-white'>Contact Us</h1>
        <h3 className='text-lg text-white py-3'>You have any question? </h3>
        <h3 className='text-lg text-white'>Please contact us</h3>
        <p className='text-md text-white py-3 w-1/2 text-center m-auto'>We provide 24/7 customer services. Reach out to us today if you need anything.</p>
        <Button />
      </div>

    </div>
  )
}

export default Contact