type SideMenuLinksProps = {
    linksAndText: string[][],
    spacing: number
  }

  export const SideMenuLinks = ({linksAndText} : SideMenuLinksProps) => {
    return (
      <ul>
          {linksAndText.map(element => {
            return <li className="hover:underline mb-5"><a href={element[1]}>{element[0]}</a></li>
            })
          }
      </ul>
    )
  }

//   <a href="" ><h3 className="">Products</h3></a>
