import Logo from "../assets/website/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Navbar = ({handleOrderPopup}) => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Seller",
      link: "/#services",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Books",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Authors",
      link: "/#",
    },
  ];

  return (
    <div className="shadow-lg bg-white dark:bg-gray-800 dark:text-white">
      <div className="px-4 py-3 sm:py-0 lg:px-17 m-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Books
            </a>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div>
                <DarkMode/>
            </div>
            <ul className=" items-center gap-2 md:gap-4 hidden sm:flex">
              {Menu.map((menu) => (
                <li>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4
                     hover:text-blue-500 duration-200 font-semibold"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              {/* dropdown section */}
              <li
                className="group relative cursor-pointer">
                <a
                  href="/#"
                  className="flex h-[72px] items-center gap-0.5 font-semibold">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition-duation-300 group-hover:rotate-180" />
                  </span>
                </a>
                {/* dropdown links section */}
                <div className="hidden absolute -left-9 z-[10] group-hover:block text-black bg-white p-2 shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md text-sm p-2 hover:bg-blue-200 hover:text-blue-600 font-semibold">
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <button
              onClick={handleOrderPopup}
                className="font-semibold bg-gradient-to-r from-blue-500 to-blue-300 text-white
                             px-4 py-2 rounded-full flex items-center gap-3 cursor-pointer hover:scale-105 duration-300">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
