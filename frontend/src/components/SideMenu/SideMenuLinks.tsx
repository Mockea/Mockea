type SideMenuLinksProps = {
    linksAndText: string[][],

  }

  export const SideMenuLinks = ({linksAndText} : SideMenuLinksProps) => {
    return (
      <>
          {linksAndText.map(element => {
            return <li className="hover:underline"><a href={element[1]}>{element[0]}</a></li>
            })
          }
      </>
    )
  }

//   <a href="" ><h3 className="">Products</h3></a>
