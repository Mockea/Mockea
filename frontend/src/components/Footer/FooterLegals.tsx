import { Link } from 'react-router-dom'

export const FooterLegals = () => {
  return (
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
  )
}
