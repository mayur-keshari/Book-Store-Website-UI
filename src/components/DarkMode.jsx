import React, { useEffect, useState } from 'react'
import Darkpng from '../assets/website/dark-mode-button.png'
import Lightpng from '../assets/website/light-mode-button.png'
const DarkMode = () => {
    const [theme, settheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(()=>{
      if(theme == 'dark'){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
      }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
      }  
    },[theme])
    return (
        <>
        <div className='relative'>
            <img src={Lightpng} alt="lightbtn"
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
             absolute right-0 z-10 ${
                theme == 'dark' ? 'opacity-0' : 'opacity-100'
             }`}
             onClick={()=>settheme(theme == "dark" ? "light" : "dark")}/>
            <img src={Darkpng} alt="darkbtn"
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] duration-300
              ${
                theme == 'dark' ? 'opacity-100' : 'opacity-0'
             }`}
             onClick={()=>settheme(theme == "dark" ? "light" : "dark")}/>
        </div>
        </>
    )
}

export default DarkMode