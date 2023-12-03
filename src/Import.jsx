import React from 'react'
import toast from 'react-hot-toast';

export default function Import() {

    const isValidAmazonUrl = (url) => {
        const regex = /^(https?:\/\/)?(www\.)?(amazon\.com)(\/.*)?$/
        return regex.test(url)
    }

    const handleAdd = () => {
        const currentUrl = window.location.href;
        if(isValidAmazonUrl(currentUrl)){
           toast.success(`${currentUrl}\nValid Amazon URL`)
        }else{
            toast.error(`${currentUrl}\nInvalid Amazon URL`)
        }
    }

  return (
    <>
     <button
            onClick={handleAdd}
          className='bg-[#222] text-[ghostwhite] text-center font-bold uppercase rounded-lg p-3 w-full'
         >
          IMPORT
        </button>
        <small
          className='text-black text-center text-xs'
        >
          Click to import products on any valid Amazon URL.
        </small>
        </>
  )
}
