import React, { useEffect } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Input({
    name,
    type,
    label,
    placeholder,
    aboveContent,
    belowContent,
    value,
    setValue
}) {
    const [errors, setErrors] = React.useState([])
    const [isHovered, setIsHovered] = React.useState(false)


    const validateEmail = (email) => {
        let errorList = []

        if(value.length === 0) {
            return []
        }

        // if value is 3 characters or less, return false
        // if(value.length <= 3) {
        //     errorList.push('Email must be longer than 3 characters')
        // }else{
        //     errorList = errorList.filter(error => error !== 'Email must be longer than 3 characters')
        // }

        // if value doesnt contain @, return false
        // if(!value.includes('@')) {
        //     errorList.push('Email must contain an @')
        // }else{
        //     errorList = errorList.filter(error => error !== 'Email must contain an @')
        // }

        // if value doesnt contain a . after the @, return false
        // if(!value.includes('.', value.indexOf('@'))) {
        //     errorList.push('Email must contain a . after the @')
        // }else{
        //     errorList = errorList.filter(error => error !== 'Email must contain a . after the @')
        // }

        const re = /\S+@\S+\.\S+/
        if(!re.test(email)) {
            errorList.push('Email must be a valid email')
        }else{
            errorList = errorList.filter(error => error !== 'Email must be a valid email')
        }

        return errorList
    }

    const validatePassword = (password) => {
        let errorList = []

        if(value.length === 0) {
            return []
        }

        // if value is 3 characters or less, return false
        if(value.length <= 3) {
            errorList.push('Password must be longer than 3 characters')
        }else{
            errorList = errorList.filter(error => error !== 'Password must be longer than 3 characters')
        }

        return errorList
    }

    const handleChange = (event) => {
        const v = errors.length > 0 ? '' : event.target.value
        setValue(v)
    }

    useEffect(() => {
        if(type === 'email') {
            setErrors(validateEmail(value))
        }else if(type === 'password') {
            setErrors(validatePassword(value))
        }
    }, [value])

    // const handleFocus = () => {
    //     alert('focused')
    //     setIsFocused(true)
    // }

    // const handleBlur = () => {
    //     alert('blurred')
    //     setIsBlurred(true)
    // }

    


  return (
    <div>
        <div className='flex justify-between items-center'>
            <label
            className={`block text-gray-700 text-sm font-bold mb-2 text-left`}
            htmlFor={name}
            >
            {label}
            </label>
            {aboveContent}
        </div>
        <div className='relative'>
            <input
                name={name}
                className={`bg-gray-300 rounded-lg shadow-xl p-3 w-full h-[50px] text-black font-bold foucs:outline-none foucs:ring-2 foucs:ring-gray-600 foucs:border-transparent focus-visible:outline-none focus-visible:border-2 focus-visible:border-gray-600 ${errors.length > 0 ? 'border-2 border-red-500 focus-visible:border-red-500' : 'border-2 border-gray-300'} ${errors.length > 0 ? 'text-red-500' : ''} ${errors.length > 0 ? 'bg-red-300 ' : 'bg-gray-300'}`}
            id={name}
            type={type}
            placeholder={placeholder}
                onChange={handleChange}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                value={value}
            />
            <IoCloseCircleSharp
                onMouseEnter={() => setIsHovered(true)}
                onClick={() => setValue('')}
             className={`absolute right-3 top-1/2  text-gray-500 -translate-y-1/2 cubic-bezier(0.4, 0, 0.2, 1) transition-all duration-150 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'} ${errors.length > 0 ? 'text-red-500' : 'text-gray-500'}`}
             />
                    </div>
                    {errors.map((error, i) => {
                        return <p key={i} className='text-red-500 text-xs font-bold mt-1'>{error}</p>
                    })}

            {belowContent}
        </div>
  )
}
