import React from 'react';
import { Testimonies } from './Testimonials';
import image1 from '../../assets/masked2.jpg';


const Testimonial = () => {
    return (
        <div className='py-[3rem]'>
            <div className='py-4 m-auto text-center'>
                <h1 className='text-5xl text-white'>Testimonials</h1>
                <p className='text-white  py-4'>Maximillian is reliable and trusted. They deal in healthy pets.</p>
            </div>
            <div className='flex py-[2rem] gap-[2rem] w-full'>
                
                <div className='gap-2 grid grid-cols-3'>
                    {Testimonies.map((testimony) => (
                        <div className='w-3/4 text-white text-center justify-center m-auto align-text p-5 bg-[#403E3E] rounded-lg bg-gradient-to-r from-[#050505] to-[#212121]' key={testimony.id}>
                            <img className='w-1/4 rounded-full justify-center m-auto align-text' src={testimony.image} alt="" />
                            <h1 className='py-3 text-2xl'>{testimony.name}</h1>
                            <p className='text-md'>{testimony.testimony}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial