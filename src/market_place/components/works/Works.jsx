import React from 'react';
import { worksData } from './worksData';

const Works = () => {
    return (
        <div className='text-center'>
            <h1 className='m-auto text-center w-full py-5 text-5xl text-white'>How it Works</h1>
            <div className='grid grid-cols-5 gap-[2rem] justify-center w-full'>
                {worksData.map((works) => (
                    <div key={works.id} className='p-5 text-center text-white 	 rounded-2xl bg-[#403E3E]'>
                        <p className='rounded'></p>
                        <h4 className='py-3 font-semibold '>{works.actions}</h4>
                        <p className='w-2/3 m-auto  justify-self-center'>{works.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works