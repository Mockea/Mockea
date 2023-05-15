
export const Navbar = () => {
  return (
    <>

      <div className="bg-black w-full text-center p-2 text-white top-0"><a href="" className=""><i className="fa-regular fa-message"/>Världens bästa present? Presentkort från MOCKEA</a></div>
      <nav className="flex border justify-center flex-col">
        <div className="flex">
          <ul className="flex border items-center justify-start absolute flex-col">
            <li><i className="fa-solid fa-bars"/></li>
            <li>Menu</li>
          </ul>
          <ul className=" container flex justify-between border mx-auto gap-4 ">
            <li><img src="https://www.ikea.com/se/sv/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="mockeaLogo" /></li>
            <li className="flex grow"><i className="fa-solid fa-magnifying-glass"/>SearchBar</li>
            <li><i className="fa-regular fa-user" /></li>
            <li><i className="fa-regular fa-heart"/></li>
            <li><i className="fa-solid fa-cart-shopping"/></li>
          </ul>
        </div>
        <ul className="flex mx-auto justify-between border w-full container">
          <ul className="flex  gap-8 ">
            <li>Products</li>
            <li>All rooms</li>
            <li>Offers</li>
          </ul>
          <ul className="flex  gap-8 ">
            <li>14145</li>
            <li>Stockholm Kungens Kurva</li>
          </ul>
        </ul>
      </nav>
    </>
  )}
