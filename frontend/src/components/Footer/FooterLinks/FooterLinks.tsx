import { FooterAffiliatedLink } from './FooterAffiliatedLink'
import { FooterLinksCard } from './FooterLinksCard'



const familyLinks = [
  ["Your MOCKA family","title"],
  ["Logga in", ""],
  ["my shopping list", ""],
  ["Follow my order", ""],
  ["Current offers" , ""],
  ["MOCKEA Family support" , ""]
]


const customerServiceLinks = [
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

const shopLinks = [
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

  const infoLinks = [
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



export const FooterLinks = () => {

  const LinksCardsJSX = [familyLinks, shopLinks, customerServiceLinks, infoLinks ].map( (data, index) => <FooterLinksCard key={index} linksAndText={data} />);

  return (
    <div className="footer-content grid grid-cols-[2fr_1fr_1fr_1fr_1fr]">
      <ul className="footer__featured-links pe-20 text-start me-16">
        <FooterAffiliatedLink h3Text={"Join the MOCKEA Family"} pText={"Give your ideas new life with offers, inspiration and lots of activities in our department stores - completely free of charge"} buttonText={"Become a member here"}/>
        <FooterAffiliatedLink h3Text={"MOCKEA for business"} pText={"Our company experts help with flexible, affordable and more sustainable solutions."} buttonText={"MOCKEA for business"}/>
      </ul>
        {LinksCardsJSX}
    </div>
  )
}
