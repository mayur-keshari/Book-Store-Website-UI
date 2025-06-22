import React from "react";
import BoardImg from "../../assets/website/board.png"
import PlayStoreImg from "../../assets/website/play_store.png"
import AppStoreImg from "../../assets/website/app_store.png"
const AppStoreBanner = () => {
const bannerImg = {
  backgroundImage: `url(${BoardImg})`,
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"100%",
  width:"100%",
}

  return <div className="bg-gray-100 dark:bg-gray-800 text-white py-10" style={bannerImg}>
  <div className="p-4 ">
    <div className="space-y-6 max-w-xl mx-auto ">
      <h1 
      data-aos="slide-up"
      className="text-2xl text-center sm:text-4xl font-semibold">Read Books at your fingertips</h1>
      <div
      data-aos="slide-up"
      className="flex flex-wrap justify-center items-center gap-4">
        <a href="#">
          <img src={PlayStoreImg} alt="Playstore" className="max-w-[150px] sm:max-w-[120px] lg:max-w-[200px]"/>
        </a>
        <a href="#">
          <img src={AppStoreImg} alt="Appstore" className="max-w-[150px] sm:max-w-[120px] lg:max-w-[200px]"/>        
          </a>
      </div>
    </div>
  </div>
    </div>;
};

export default AppStoreBanner;
