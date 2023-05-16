type FooterLinksProps = {
  linksAndText: string[][]
}

export const FooterLinks = ({linksAndText} : FooterLinksProps) => {
  return (
    <ul className="">
        {linksAndText.map(element => {
            if (element[1].toUpperCase() == "TITLE") {
                return <li className="font-semibold mb-1">{element[0]}</li>
            } else {
                return <li className="hover:underline"><a href={element[1]}>{element[0]}</a></li>
            }
          })
        }
    </ul>
  )
}
