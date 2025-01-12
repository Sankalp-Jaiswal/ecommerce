import React, { useContext } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {

  const {companyName}= useContext(ShopContext)

  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>123 Main St <br /> Anytown, USA 12345</p>
          <p className=' text-gray-500'>Tel: (+91) 83035 84456 <br />Email: sankalpjaiswal265@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carriers at {companyName}</p>
          <p className=' text-gray-500'>Learn more about teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact