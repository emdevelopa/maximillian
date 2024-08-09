import React from 'react'

const Footer = ({ logo }) => {
  return (
    <div className='grid grid-cols-4 text-white gap-2 py-[3rem]'>
      <div>
        <img className="w-[6em] " src={logo} alt="logo" />
        <div>
          Social Media
        </div>
      </div>
      <div>
        <h5 className='text-lg'>Links</h5>
        <div>
          <li><a href="">About Us</a></li>
          <li><a href="">Store</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Services </a></li>
        </div>
      </div>
      <div>
        <h5 className='text-lg'>Communities</h5>
        <div>
          <li><a href="">Books</a></li>
          <li><a href="">Books</a></li>
          <li><a href="">Books</a></li>
          <li><a href="">Books</a></li>
        </div>
      </div>
      <div>
        <h5 className='text-lg'>Subscribe to our newsletter</h5>
        <div>
          <p className='py-2 text-[1em]'>To get the lastes news, updates and discount about our products subscribe today.</p>
          <div className='flex gap-x-4'>
            <input type="text" placeholder='Email' className='bg-transparent	border-solid	border p-2 rounded-md'/>
            <button className='border-solid	border-solid	border p-2 rounded-md border-[ #F0EAEA]'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer