import React from 'react';
import hello from '../../assets/hello.svg';
import { Button } from '../petsCollection/Button';

const GetInTouch = () => {
  return (
    <div className='w-full text-center justify-center m-auto '>
        <div className='justify-center m-auto  py-4 text-white'>
            <h1 className='text-4xl'>Get in Touch</h1>
            <p className='text-lg '>We provide 24/7 customer services. Reach out to us today if you need anything.</p>
            <img className='justify-center m-auto py-[2rem]' src={hello} alt="" />
            <Button>Contact Us</Button>
        </div>
    </div>
  )
}

export default GetInTouch