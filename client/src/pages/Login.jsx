import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendURL } = useContext(ShopContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandeler = async (e) => {
    e.preventDefault()
    try {
      if (currentState === 'Sign Up') {        
        const response = await axios.post(backendURL + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          // navigate('/')
          // toast.success("Registration successful")
        } else {
          toast.error(response.data.message)
        }
      }else if (currentState === 'Login') {
        const response = await axios.post(backendURL + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          // navigate('/')
          // toast.success("Login successful")
        } else {
          toast.error(response.data.message)
        }

      }
      } catch (error) {
        console.error("Error during registration:", error)
        toast.error(error.response?.data?.message || "Registration failed")
      }
    }

    useEffect(()=>{
      if(token){
        navigate('/')
        }
    },[token])

  return (
      <form onSubmit={onSubmitHandeler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === "Login" ? "" : <input onChange={(e) => setName(e.target.value)} value={name} required type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />}

        <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} value={password} required type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          {currentState === 'Login'
            ? <p className='cursor-pointer'>Forgot your password?</p>
            : <p className='cursor-pointer'>Already have account?</p>
          }

          {currentState === 'Login'
            ? <p className='cursor-pointer' onClick={() => setCurrentState('Sign Up')}>Create Account</p>
            : <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Login Here</p>
          }
        </div>
        <button type='submit' className='bg-black text-white font-light mt-4 px-8 py-2'>{currentState === "Login" ? 'Sign In' : 'Sign Up'}</button>
      </form>
    )
  }

  export default Login