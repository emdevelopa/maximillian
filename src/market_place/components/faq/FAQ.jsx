import React, { useState } from 'react';
import { FAQs } from './faqData';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";




const FAQ = () => {
  const [showFaq, setShowFaq] = useState({})

  const toggleAccordion = (index) => {
    setShowFaq(prevState =>({
      ...prevState, [index]: !prevState[index]
    }));
  };



  return (
    <div className='text-white py-[3rem]'>
      <h1 className='text-4xl py-5 w-full  text-center'>Frequently Asked Questions</h1>

      <div className='w-full m-auto justify-center'>
        {
          FAQs.map((faqs, index) => (
            <div key={index} className='border-b-2'>
              <div onClick={() => toggleAccordion(index)} className='flex justify-between py-2 text-2xl cursor-pointer'>
                <h2  className=''>{faqs.question}</h2>
                {showFaq [index]?  <IoIosArrowUp />  : <IoIosArrowDown />}
              </div>
              {showFaq[index] && <p>{faqs.answer}</p>}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FAQ
