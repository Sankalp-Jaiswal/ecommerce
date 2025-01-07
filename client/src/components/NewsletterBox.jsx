import React from 'react'

const NewsletterBox = () => {

    const submitHandler = (e) =>{
        e.preventDefault();
    }

  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, unde? Perspiciatis, eligendi.</p>
        <form onSubmit={submitHandler} className='w-full border pl-5 sm:w-1/2 flex items-center gap-3 mx-auto my-6'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox