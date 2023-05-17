type FooterLinksProps = {
  linksAndText: string[][]
}

export const FooterLinks = ({linksAndText} : FooterLinksProps) => {
  return (
    <ul className="flex flex-col gap-3 text-start text-sm">
        {linksAndText.map(element => {
            if (element[1].toUpperCase() == "TITLE") {
                return <li className="font-semibold mb-1" key={element[0]}>{element[0]}</li>
            } else {
                return <li className="hover:underline" key={element[0]} ><a href={element[1]}>{element[0]}</a></li>
            }
          })
        }
    </ul>
  )
}
