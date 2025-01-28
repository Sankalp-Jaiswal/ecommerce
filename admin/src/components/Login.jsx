import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendURL } from '../App'
import {toast} from 'react-toastify'


const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandeler = async (e) => {
        try {
            e.preventDefault()


            const response = await axios.post(backendURL + `/api/user/admin`, {
                email: email,
                password: password
            });


            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error("Invalid email or password")
                toast.error(response.data.message) // Ensure error toast is displayed
            }

        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response?.data?.message || 'An error occurred') // Display error toast
        }
    }

    return (
        <div className='min-h-screen flex justify-center items-center w-full'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandeler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='rounded w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder="your@email.com" required />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='rounded w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder="********" required />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submin'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login