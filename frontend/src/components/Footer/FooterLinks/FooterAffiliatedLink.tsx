type Props = {
  h3Text: string,
  pText: string,
  buttonText: string
}

export const FooterAffiliatedLink = ( {h3Text, pText, buttonText} : Props) => {
  return (
    <li className="px-5 pb-5 flex flex-col gap-5">
      <h3 className="font-bold">{h3Text}</h3>
      <p className="text-sm">{pText}</p>
      <button className="featured-links__button">{buttonText}</button>
  </li>
  )
}
