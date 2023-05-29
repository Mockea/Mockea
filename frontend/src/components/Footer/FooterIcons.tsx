
import { FooterSupportedPayments } from './FooterSupportedPayments'
import { Link } from 'react-router-dom'

const footerSocials = [
  ["facebook", ""],
  ["instagram", ""],
  ["pinterest", ""],
  ["youtube", ""],
  ["twitter", ""],
]

const FooterSocialsJSX = footerSocials.map(social =>  <li><Link key={social[0]} to=""><i className={`fa-brands fa-${social[0]}  footer__links-icons`}></i></Link></li>)

export const FooterIcons = () => {
  return (
    <div className="flex justify-between items-center">
      <menu className="footer__links flex gap-6 items-center ">
        {FooterSocialsJSX }
        <FooterSupportedPayments />
      </menu>
     <Link to="/" className="border border-gray-300 hover:border-black rounded-full flex gap-4 items-center px-5 py-1.5"><i className="fa-solid fa-globe fa-lg "></i>Change country</Link>
    </div>
  )
}
