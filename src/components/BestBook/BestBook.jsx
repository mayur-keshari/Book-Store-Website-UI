import React from "react";
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/books/book1.jpg";
import Img2 from "../../assets/books/book2.jpg";
import Img3 from "../../assets/books/book3.jpg";
const BestBook = ({handleOrderPopup}) => {
  const BooksData = [
    {
      id: 1,
      img: Img1,
      title: "His Life will forever be Changed",
      description:
        " Lorem His Life will forever be Changed Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, ea.",
    },
    {
      id: 2,
      img: Img2,
      title: "Who's there",
      description:
        " Lorem Who's there , Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, ea.",
    },
    {
      id: 3,
      img: Img3,
      title: "Lost Boy",
      description:
        " Lorem Lost Boy, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, ea.",
    },
  ];
  return (
    <>
      <div className="py-10">
        <div className="p-4">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300 ">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eius doloremque a, iste omnis nulla!
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 gap-[100px] sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
            {BooksData.map((book) => (
              <div
              data-aos="zoom-in"
                className="rounded-xl bg-white dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500
                                 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px] ">
                  <img
                    src={book.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center p-4">
                  <div className="w-full flex items-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{book.title}</h1>
                  <p className="text-gray-500  group-hover:text-white duration-300 text-sm line-clamp-2 ">
                    {book.description}
                  </p>
                  <button 
                  onClick={handleOrderPopup}
                  className="min-w-[40px] bg-blue-500 to-blue-300 px-2 py-1 rounded-full text-white
                   text-[15px] font-semibold hover:scale-105 duration-200 group-hover:bg-white group-hover:text-blue-500 ">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBook;
