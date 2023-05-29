import { FooterIcons } from "./FooterIcons"
import { FooterLegals } from "./FooterLegals"
import { FooterLinks } from "./FooterLinks/FooterLinks"

export const Footer = () => {


  return (
    <div className="footer relative bottom-0 bg-grey py-10 mt-80 pt-20">
      <div className="container mx-auto text-center flex flex-col gap-5">
        <FooterLinks />
        <div className="footer__bottom flex flex-col gap-5">
          <FooterIcons />
          <hr></hr>
          <FooterLegals />
        </div>
      </div>
    </div>
  )
}
