import { Link } from "react-router-dom"
import { FooterLinks } from "./FooterLinks"
import { FooterAffiliatedLink } from "./FooterAffiliatedLink"
import { FooterSupportedPayments } from "./FooterSupportedPayments"

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

    const footerSocials = [
      ["facebook", ""],
      ["instagram", ""],
      ["pinterest", ""],
      ["youtube", ""],
      ["twitter", ""],
    ]

    const FooterSocialsJSX = footerSocials.map(social =>  <li><Link to=""><i className={`fa-brands fa-${social} footer__links-icons`}></i></Link></li>)

  return (
    <div className="footer relative bottom-0 bg-grey py-10 mt-20 pt-20">
      <div className="container mx-auto text-center flex flex-col gap-5">
        <div className="footer-content grid grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            <ul className="footer__featured-links pe-20 text-start me-16">
                <FooterAffiliatedLink h3Text={"Join the MOCKEA Family"} pText={"Give your ideas new life with offers, inspiration and lots of activities in our department stores - completely free of charge"} buttonText={"Become a member here"}/>
                <FooterAffiliatedLink h3Text={"MOCKEA for business"} pText={"Our company experts help with flexible, affordable and more sustainable solutions."} buttonText={"MOCKEA for business"}/>
            </ul>
            <FooterLinks linksAndText={family} />
            <FooterLinks linksAndText={handla} />
            <FooterLinks linksAndText={kundservice} />
            <FooterLinks linksAndText={info} />
        </div>
        <div className="footer__bottom flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <menu className="footer__links flex gap-6 items-center ">
              <FooterSocialsJSX /> 
              <FooterSupportedPayments />
            </menu>
           <Link to="/" className="border border-gray-300 hover:border-black rounded-full flex gap-4 items-center px-5 py-1.5"><i className="fa-solid fa-globe fa-lg "></i>Change country</Link>
          </div>
          <hr></hr>
          <div className="text-sm footer__legal flex justify-between mt-4">
            <p> © Inter MOCKEA Systems B.V. 1999-2023</p>
            <ul className="flex gap-2">
              <li><Link to="/" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:underline">Cookie policy</Link></li>
              <li><Link to="/" className="hover:underline">Responsible Disclosure Policy</Link></li>
              <li><Link to="/" className="hover:underline">Settings for Cookies</Link></li>
              <li><Link to="/" className="hover:underline">Purchase & delivery terms</Link></li>
              <li><Link to="/" className="hover:underline">Company information</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
