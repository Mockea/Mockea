import { FooterLinks } from "./FooterLinks"

export const Footer = () => {


  const family = [
    ["Your MOCKA family","title"],
    ["Logga in", ""],
    ["my shopping list", ""],
    ["Follow my order", ""],
    ["Current offers" , ""],
    ["MOCKEA Family support" , ""]
  ]


  const kundservice = [
    ["Customer services", "title"],
    ["Customer service",  ""],
    ["Contact Us",  ""],
    ["Shop by phone",  ""],
    ["common questions",  ""],
    ["Help us get better",  ""],
    ["Service Services",  ""],
    ["Returns & complaints",  ""],
    ["Purchase & delivery conditions",  ""]
  ]

  const handla = [
    ["Shop at MOCKEA", "Title"],
    ["Department stores & opening hours" , "url"],
    ["Payment options" , ""],
    ["Delivery options" , ""],
    ["Personal planning" , ""],
    ["Planning tool" , ""],
    ["The entire range" , ""],
    ["Product guides" , ""],
    ["Brochures" , ""],
    ["Gift cards" , ""],
    ["The restaurants" , ""],
  ]

    const info = [
      ["This is IKEA" , "title"],
      ["Work at IKEA" , ""],
      ["IKEA Museum" , ""],
      ["Life at home" , ""],
      ["IKEA Foundation" , ""],
      ["Furnishing tomorrow" , ""],
      ["Social responsibility" , ""],
      ["About us" , ""],
      ["Press room" , ""]
    ]


  // family.map(element =>  <li><a href={value}>{key}</a></li>)


  return (
    <div className="footer relative bottom-0 bg-grey py-10 mt-20 pt-20">
      <div className="container mx-auto text-center flex flex-col gap-5">
        <div className="footer-content grid grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            <ul className="footer__featured-links pe-20 text-start me-16">
                <li className="px-5 pb-5 flex flex-col gap-5">
                    <h3 className="font-bold">Join the MOCKEA Family</h3>
                    <p className="text-sm">Give your ideas new life with offers,
                     inspiration and lots of activities in our department stores - completely free of charge.</p>
                    <button className="featured-links__button">Become a member here</button>
                </li>
                <li className="px-5 pb-5 flex flex-col gap-5">
                    <h3 className="font-bold">MOCKEA for business</h3>
                    <p className="text-sm">Our company experts help with flexible, affordable and more sustainable solutions.</p>
                    <button className="featured-links__button">MOCKEA for business</button>
                </li>
            </ul>
            <FooterLinks linksAndText={family} />
            <FooterLinks linksAndText={handla} />
            <FooterLinks linksAndText={kundservice} />
            <FooterLinks linksAndText={info} />
        </div>
        <div className="footer__bottom flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <menu className="footer__links flex gap-6 items-center ">
              <li><a href=""><i className="fa-brands fa-facebook footer__links-icons"></i></a></li>
              <li><a href=""><i className="fa-brands fa-instagram footer__links-icons"></i></a></li>
              <li><a href=""><i className="fa-brands fa-pinterest footer__links-icons"></i></a></li>
              <li><a href=""><i className="fa-brands fa-youtube footer__links-icons"></i></a></li>
              <li><a href=""><i className="fa-brands fa-twitter footer__links-icons"></i></a></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/visa.svg" alt="visa" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/master-card.svg" alt="mc" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/american-express.svg" alt="ax" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikano.svg" alt="ikano" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/klarna.svg" alt="klarna" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/swish.svg" alt="swish" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/bankid.svg" alt="bankid" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-payment-providers/apple-pay.svg" alt="apple pay" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-secure-logos/visa-secure.svg" alt="visa secure" /></li>
              <li><img className="footer__links-square-icons"src="https://www.ikea.com/global/assets/logos/external-secure-logos/master-card-id-check.svg" alt="mc id check" /></li>
            </menu>
            <a href="" className="border border-gray-300 hover:border-black rounded-full flex gap-4 items-center px-5 py-1.5"><i className="fa-solid fa-globe fa-lg "></i>Change country</a>
          </div>
          <hr></hr>
          <div className="text-sm footer__legal flex justify-between mt-4">
            <p> © Inter IKEA Systems B.V. 1999-2023</p>
            <ul className="flex gap-2">
              <li><a href="" className="hover:underline">Privacy Policy</a></li>
              <li><a href="" className="hover:underline">Cookie policy</a></li>
              <li><a href="" className="hover:underline">Responsible Disclosure Policy</a></li>
              <li><a href="" className="hover:underline">Settings for Cookies</a></li>
              <li><a href="" className="hover:underline">Purchase & delivery terms</a></li>
              <li><a href="" className="hover:underline">Company information</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


{/* <ul className="footer__handla">
<li className="text-semibold">Shop at MOCKEA</li>
<li><a href="">Department store & opening hours</a></li>
<li><a href="">Payment options</a></li>
<li><a href="">Delivery options</a></li>
<li><a href="">Personal planning</a></li>
<li><a href="">Planning tool</a></li>
<li><a href="">The entire range</a></li>
<li><a href="">Product guides</a></li>
<li><a href="">Brochures</a></li>
<li><a href="">Gift cards</a></li>
<li><a href="">The restaurant</a></li>
</ul>
<ul className="footer__kundservice">
<li className="text-semibold">Customer service</li>
<li><a href="">Customer service</a></li>
<li><a href="">Contact Us</a></li>
<li><a href="">Shop by phone</a></li>
<li><a href="">common questions</a></li>
<li><a href="">Help us get better</a></li>
<li><a href="">Service Services</a></li>
<li><a href="">Returns & complaints</a></li>
<li><a href="">Purchase & delivery conditions</a></li>
</ul>
<ul className="footer__company-info">
<li className="text-semibold">This is IKEA</li>
<li><a href="">Work at IKEA</a></li>
<li><a href="">IKEA Museum</a></li>
<li><a href="">Life at home</a></li>
<li><a href="">IKEA Foundation</a></li>
<li><a href="">Furnishing tomorrow</a></li>
<li><a href="">Social responsibility</a></li>
<li><a href="">About us</a></li>
<li><a href="">Press room</a></li>
</ul> */}
