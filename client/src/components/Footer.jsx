import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquid dolores, at similique perspiciatis culpa?</p>
            </div>

            <div>
                <p className='text-xl font-medium mb5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 8303584456</li>
                    <li>sankalpjaiswal264@gmail.com</li>
                </ul>
            </div>

        </div>
        <div className=''>
                <hr />
                <p className='py5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer