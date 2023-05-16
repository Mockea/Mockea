import { Box, FormControlLabel, Slide, Switch } from "@mui/material";
import { useState } from "react";

type SideMenuProps = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>,
  toggleMenu: boolean
}

export const SideMenu = ({setToggleMenu, toggleMenu} : SideMenuProps) => {
  // const [checked, setChecked] = useState<boolean>(true);

  return (
    <>
      {toggleMenu && (<div className="h-screen z-10 w-screen bg-[rgba(0,0,0,.3)] absolute" onClick={() => setToggleMenu(false)}></div>)}
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <Slide direction="right" in={toggleMenu} mountOnEnter unmountOnExit>
          {
                  <aside className="h-full absolute z-10 bg-white border p-5 grid grid-cols-[1fr_3fr]">
                  <div className="side-menu__cross text-center p-10" ><i className="fa-solid fa-xmark rounded-full hover:bg-hovergrey px-3.5 py-5 fa-lg active:bg-clickgrey" onClick={() => setToggleMenu(false)}></i></div>
                  <div className="side-menu__content p-10">
                    <img src="src/assets/mockea.PNG" alt="mockeaLogo" className="h-full max-h-10" />
                    <div className="side-menu__content-links flex flex-col gap-4 mt-6">
                      <div className="side-menu__content-links--head text-4xl font-bold flex flex-col gap-9">
                        <a href="" ><h3 className="">Products</h3></a>
                        <a href="" ><h3 className="">All rooms</h3></a>
                        <a href="" ><h3 className="">Offers</h3></a>
                      </div>
                      <div className="side-menu__content-links--main font-semibold flex flex-col gap-4 mt-5">
                        <a href=""className=""><p>Inspiration, tips and ideas</p></a>
                        <a href=""className=""><p>Planing tools</p></a>
                        <a href=""className=""><p>Services</p></a>
                        <a href=""className=""><p>Second hand</p></a>
                        <a href="" className=""><p>Design with MOCKEA Kreativ</p></a>
                      </div>
                      <div className="flex flex-col gap-3 mt-5 text-sm">
                        <a href=""><p>Customer support</p></a>
                        <a href=""><p>Follow my order</p></a>
                        <a href=""><p>Common questions</p></a>
                        <a href=""><p>MOCKEA for business</p></a>
                        <a href=""><p>MOCKEA Restaurant and Bistro</p></a>
                        <a href=""><p>MOCKEA Family</p></a>
                        <a href=""><p>MOCKEA Wishlist</p></a>
                      </div>
                      <a href="" className="border border-gray-300 hover:border-black rounded-full flex gap-4 items-center px-5 py-1.5 mt-5 me-auto"><i className="fa-solid fa-globe fa-lg "></i>Change country</a>
                    </div>
                  </div>
            </aside>
          }
        </Slide>
      </Box>

    </>
  )
}
