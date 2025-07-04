import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({OrderPopup,handleOrderPopup}) => {
  return (
<>
{
    OrderPopup && (
        <div className='h-screen fixed w-screen top-0 left-0 z-20 backdrop-blur-sm '>
           <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900
            dark:text-white duration-200 p-4 rounded-b-md shadow-md w-[300px]'>
              {/* header */}
              <div className='flex items-center justify-between'>
                <h1>Order Your Book</h1>
                <div>
                    <IoCloseOutline
                    className='text-2xl cursor-pointer'
                    onClick={()=>handleOrderPopup(false)}
                    />
                </div>
              </div>
              {/* form-body */}
              <div className='mt-4'>
                  <input type="text" placeholder='Name' className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'/>
                 <input type="email" placeholder='email' className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'/>
                 <input type="text" placeholder='address' className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'/>
                 <div className="flex justify-center">
                     <button className='bg-blue-500 text-white px-6 py-2 rounded-full font-semibold'>Order Now</button>
                 </div>
              </div>
           </div>
        </div>
    )
}

</>
  )
}

export default Popup