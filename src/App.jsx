import React from "react"
import BestBook from "./components/BestBook/BestBook"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner/Banner"
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner"
import Allbooks from "./components/AllBooks/Allbooks"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import AOS from "aos";
import "aos/dist/aos.css"
import Popup from "./components/Popup/Popup"
function App() {

  const[OrderPopup, setOrderPopup] = React.useState(true)

  const handleOrderPopup = () =>{
    setOrderPopup(!OrderPopup)
  }
   React.useEffect(()=>{
    AOS.init({
      offset:100,
      duartion:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
   },[])
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup ={handleOrderPopup}/>
        <BestBook handleOrderPopup ={handleOrderPopup}/>
        <Banner/>
        <AppStoreBanner/>
        <Allbooks/>
        <Testimonials/>
        <Footer/>
        <Popup handleOrderPopup ={handleOrderPopup} OrderPopup={OrderPopup}/>
      </div>
    </>
  )
}

export default App
