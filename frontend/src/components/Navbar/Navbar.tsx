import { useState } from "react";
import { Searchbar } from "../searchbar/Searchbar"
import { SideMenu } from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const showMenu = () => {
    setToggleMenu(true);
  }

  return (
    <>
      <SideMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>

      <div className="bg-black w-full text-center a-2 text-white top-0"><a href="" className=""><i className="fa-regular fa-message"/> The best gift in the world? Gift card from MOCKEA</a></div>
      <nav className="flex justify-center flex-col max-h-50 pt-2">
        <div className="flex">

          <ul className=" container flex justify-between mx-auto gap-4 py-2 max-h-14 items-center relative ">
            <button className="flex items-center justify-start absolute flex-col -left-20 text-sm" onClick={() => showMenu()}>
              <i className="fa-solid fa-bars rounded-full hover:bg-hovergrey py-5 px-3 fa-lg active:bg-clickgrey"/>
              Menu
            </button>
            <li><Link to="/"><img src="mockea.PNG" alt="mockeaLogo" className="h-full max-h-14 py-2.5" /></Link></li>
            <li className="flex grow"><Searchbar /></li>
            <li><i className="fa-regular fa-user fa-lg" /></li>
            <li><i className="fa-regular fa-heart fa-lg"/></li>
            <li><i className="fa-solid fa-cart-shopping fa-lg"/></li>
          </ul>
        </div>
        <ul className="flex mx-auto justify-between border-b w-full container py-2">
          <ul className="flex  gap-8 ">
            <li className="text-sm"><a href="" className="hover:underline  font-bold">Products</a></li>
            <li className="text-sm"><a href="" className="hover:underline font-bold">All rooms</a></li>
            <li className="text-sm"><a href="" className="hover:underline font-bold">Offers</a></li>
          </ul>
          <ul className="flex  gap-8 ">
            <li className="text-sm"><a href="" className=" font-bold">14145</a></li>
            <li className="text-sm"><a href="" className=" font-bold">Stockholm Kungens Kurva</a></li>
          </ul>
        </ul>
      </nav>
    </>
  )}
