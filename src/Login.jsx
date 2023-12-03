import React from 'react'
import Input from './Input'
import { useStore } from './store'
import { login } from './api'
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const { setLoading, setAuth } = useStore()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(email !== '' && password !== ''){
            setLoading(true)
            const res = await login(email, password)
            if(res){
                setAuth(res)
                toast.success('Logged in successfully')
            }else{
                toast.error('Error logging in')
            }
            setLoading(false)
        }else{
            console.log('error')
        }
    }
  return (
    <form
        onSubmit={handleSubmit}
     className='bg-white rounded-lg shadow-xl p-3 flex flex-col gap-5'>
    
        <Input
            name='email'
            type='email'
            label='Email'
            placeholder='john@gmail.com'
            value={email}
            setValue={setEmail}
        />
    
        <Input
            name='password'
            type='password'
            label='Password'
            placeholder=''
            value={password}
            setValue={setPassword}
            aboveContent={<a
                className='inline-block align-baseline font-bold text-xs text-gray-500 hover:text-black'
                href='#'
                >
                Forgot Password?
                </a>}
        />
    
        <div className='flex flex-col items-center justify-between'>
            <button
            className='bg-[#222] text-[ghostwhite] text-center font-bold uppercase rounded-lg p-3 w-full mt-3'
            >
            Sign In
            </button>
            
        </div>
       <p className='text-black text-sm'>Don't have an account? <a href="#" className='text-center text-sm text-gray-500 font-bold hover:text-black'>Sign up</a></p>
    </form>
  )
}
