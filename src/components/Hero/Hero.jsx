import React, { useState } from 'react'
import Book1 from '../../assets/books/book1.jpg'
import Book2 from '../../assets/books/book2.jpg'
import Book3 from '../../assets/books/book3.jpg'
import Vector from '../../assets/website/blue-pattern.png'

const Hero = ({handleOrderPopup}) => {
    const[ImageId, setImageId]= useState(Book2);
    const [Title, setTitle] = useState("Who's there");
    const [Desc, setDesc] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quasi saepe quas voluptatem laboriosam qui perferendis");

    const bgImage = {
        backgroundImage:`url(${Vector})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%",
    };

    const ImageList = [
        {
            id:2,
            img:Book2,
            title:"His Life will forever be Changed",
            description:" Lorem His Life will forever be Changed Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, ea."
        },
        {
            id:1,
            img:Book1,
            title:"Who's there",
            description:" Lorem Who's there , Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, ea."
        },
        {
            id:3,
            img:Book3,
            title:"Lost Boy",
            description:" Lorem Lost Boy, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, ea."
        },
    ]
  return (
    <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex 
    justify-center items-center dark:bg-gray-950 dark:text-white duration-200'
    style={bgImage}>

        <div className="p-4 pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text-content-section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 min-w-[100px]'>
                    <h1 
                    data-aos="zoom-out" data-aos-duration="500"
                    className='text-5xl sm:text-6xl lg:text-6xl font-bold lg:pl-[50px]'>{Title}
                    <p 
                    data-aos="slide-up" data-aos-duration="500" data-aos-delay="100"
                    className='bg-clip-text text-transparent bg-gradient-to-b from-blue-500
                     to-blue-300 text-right text-sm font-semibold'>by Anonymous</p>
                    </h1>
                    <p
                    data-aos="slide-up" data-aos-duration="500" data-aos-delay="100"
                    className='text-sm lg:pl-[50px]'>{Desc}</p>
                    <div>
                        <button
                        onClick={handleOrderPopup}
                        data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"
                        className='bg-gradient-to-r from-blue-500 to-blue-300 text-white
                         px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 lg:ml-[50px]'>Order Now</button>
                    </div>
                </div>
                {/* Image-section */}
                <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                    {/* main-image */}
                 <div 
                 data-aos="zoom-in" data-aos-once="true"
                 className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
                        <img src={ImageId} alt=""
                        className='w-[300px] h-[300px] sm:h-[350px] sm:w-[350px] sm:scale-125 object-contain mx-auto'/>
                 </div>
                 {/* other-image -section */}
                 <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-transparent rounded-full '>
                    {
                   ImageList.map((data)=>(
                    <img
                    data-aos="zoom-in" data-aos-duration="true"
                    src={data.img}
                    className='max-w-[100px] h-[100px] object-contain inline-block hover-scale-110 duration-200'
                    onClick={()=>{
                       setImageId(data.id == 1 ? Book1 : data.id == 2 ? Book2 : Book3);
                       setTitle(data.title);
                       setDesc(data.description)
                    }}/>
                   ))
                    }
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero