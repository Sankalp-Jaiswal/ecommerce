import React from 'react'
import Home from './Home'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img src={assets.about_img} className='w-full max-w-[450px] mx-auto sm:mx-0' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed expedita maxime laudantium, recusandae quia provident impedit.</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quod dolores ullam voluptatum earum mollitia impedit nam beatae libero doloribus!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat libero a autem magnam similique distinctio nam nisi blanditiis et esse dolor saepe, eveniet culpa est perspiciatis! Natus, autem non!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat asperiores facilis temporibus quibusdam nisi totam provident assumenda pariatur exercitationem ipsa.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat asperiores facilis temporibus quibusdam nisi totam provident assumenda pariatur exercitationem ipsa.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat asperiores facilis temporibus quibusdam nisi totam provident assumenda pariatur exercitationem ipsa.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About