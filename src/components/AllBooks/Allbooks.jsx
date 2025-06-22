import React from 'react'
import Book1 from '../../assets/books/book1.jpg'
import Book2 from '../../assets/books/book2.jpg'
import Book3 from '../../assets/books/book3.jpg'
import { FaStar } from 'react-icons/fa'
const Allbooks = () => {
  const BooksData = [
    {
      id:1,
      img:Book1,
      title:"Who's there",
      rating:5.0,
      author:"Someone",
    },
    {
       id:2,
      img:Book2,
      title:"Who's there",
      rating:5.0,
      author:"Someone",
    },
    {
      id:3,
      img:Book3,
      title:"Who's there",
      rating:5.0,
      author:"Someone",
    },
    {
       id:4,
      img:Book1,
      title:"Who's there",
      rating:5.0,
      author:"Someone",
    },
    {
       id:5,
      img:Book2,
      title:"Who's there",
      rating:5.0,
      author:"Someone",
    }
  ]
  return (
    <div className='py-10'>
        <div className='p-4'>
          {/* header */}
          <div
          data-aos="slide-up"
          className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300 ">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eius doloremque a, iste omnis nulla!{''}
            </p>
          </div>
          {/* card */}
          <div data-aos="slide-up">
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-5'>
            {
              BooksData.map((data)=>(
                <div className='space-y-3'>
                  <img src={data.img} alt=""
                  className='h-[220px] w-[150px] object-cover rounded-md'/>
                  <div>
                    <h2 className='font-semibold'>{data.title}</h2>
                    <p className='text-sm text-gray-700 dark:text-gray-400'>{data.author}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar 
                      className='text-yellow-500'/>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex justify-center'>
            <button className='bg-blue-500 px-5 py-2 rounded-full text-white
                   text-[15px] font-bold hover:scale-105 duration-200 hover:bg-white
                  hover:text-blue-500 mt-15 shadow-md'> View All Books</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Allbooks