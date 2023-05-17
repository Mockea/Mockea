import { Box, FormControlLabel, Slide, Switch } from "@mui/material";
import { useState } from "react";
import { SideMenuLinks } from "./SideMenuLinks"

type SideMenuProps = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>,
  toggleMenu: boolean
}

export const SideMenu = ({setToggleMenu, toggleMenu} : SideMenuProps) => {
  // const [checked, setChecked] = useState<boolean>(true);

  const head = [
    ["Products",""],
    ["All rooms", ""],
    ["Offers", ""],
  ]

  const main = [
    ["Inspiration, tips and ideas",""],
    ["Planing tools", ""],
    ["Services", ""],
    ["Second hand", ""],
    ["Design with MOCKEA Kreativ", ""]
  ]

  const support = [
    ["Customer support",""],
    ["Follow my order", ""],
    ["Common questions", ""],
    ["MOCKEA for business", ""],
    ["MOCKEA Restaurant and Bistro", ""],
    ["MOCKEA Family", ""],
    ["MOCKEA Wishlist", ""]
  ]

  if (toggleMenu) { document.body.style.overflow = "hidden"}
  return (
    <>
      {toggleMenu && (<div className="h-screen z-10 w-screen bg-[rgba(0,0,0,.3)] absolute" onClick={() => setToggleMenu(false)}></div>)}
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <Slide direction="right" in={toggleMenu} mountOnEnter unmountOnExit>
          {
            <aside className="h-full absolute z-10 bg-white border p-5 grid grid-cols-[1fr_3fr]">
                  <button className="side-menu__cross text-center p-10 max-h-10" ><i className="fa-solid fa-xmark rounded-full hover:bg-hovergrey px-3.5 py-5 fa-lg active:bg-clickgrey" onClick={() => setToggleMenu(false)}></i></button>
                  <div className="side-menu__content p-10">
                    <img src="src/assets/mockea.PNG" alt="mockeaLogo" className="h-full max-h-10 mb-20" />
                    <div className="side-menu__content-links flex flex-col gap-4 mt-6">
                      <ul className="side-menu__content-links--head text-4xl font-bold flex flex-col gap-9">
                        <SideMenuLinks linksAndText={head}/>
                      </ul>
                      <ul className="side-menu__content-links--main font-semibold flex flex-col gap-4 mt-5">
                        <SideMenuLinks linksAndText={main}/>
                      </ul>
                      <ul className="flex flex-col gap-3 mt-5 text-sm">
                        <SideMenuLinks linksAndText={support}/>
                      </ul>
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
export { SideMenuLinks };
