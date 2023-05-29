import { useState } from "react";
import { Searchbar } from "../searchbar/Searchbar"
import { SideMenu } from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import { TopBanner } from "./TopBanner";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const showMenu = () => {
    setToggleMenu(true);
  }

  return (
    <>
      <SideMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      <TopBanner />

      <nav className="flex justify-center flex-col max-h-50 pt-2">
        <div className="flex">

          <ul className=" container flex justify-between mx-auto gap-4 py-2 max-h-14 items-center relative ">
            <button className="flex items-center justify-start absolute flex-col -left-20 text-sm" onClick={() => showMenu()}>
              <i className="fa-solid fa-bars rounded-full hover:bg-hovergrey py-5 px-3 fa-lg active:bg-clickgrey"/>
              Menu
            </button>
            <li><Link to="/"><img src="src/assets/mockea.png" alt="mockeaLogo" className="h-full max-h-14 py-2.5" /></Link></li>
            <li className="flex grow"><Searchbar /></li>
            <li><Link to="/"><i className="fa-regular fa-user fa-lg" /></Link></li>
            <li><Link to="/"><i className="fa-regular fa-heart fa-lg"/></Link></li>
            <li><Link to="/"><i className="fa-solid fa-cart-shopping fa-lg"/></Link></li>
          </ul>
        </div>
        <ul className="flex mx-auto justify-between border-b w-full container py-2">
          <ul className="flex  gap-8 ">
            <li className="text-sm"><Link to="/" className="hover:underline  font-bold">Products</Link></li>
            <li className="text-sm"><Link to="/" className="hover:underline font-bold">All rooms</Link></li>
            <li className="text-sm"><Link to="/" className="hover:underline font-bold">Offers</Link></li>
          </ul>
          <ul className="flex  gap-8 ">
            <li className="text-sm"><Link to="/" className=" font-bold">14145</Link></li>
            <li className="text-sm"><Link to="/" className=" font-bold">Stockholm Kungens Kurva</Link></li>
          </ul>
        </ul>
      </nav>
    </>
  )}
