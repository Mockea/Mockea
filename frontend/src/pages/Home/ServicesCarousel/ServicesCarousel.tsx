import { useState } from "react"
import { ServiceCard } from "./ServiceCard";

type Service = {
  image: string,
  title: string
}

export const ServicesCarousel = () => {
  const [ services, setServices ] = useState<Service[]>();

  const cards = services?.map(service => <ServiceCard service={service}/>)

  return (
    <div className="overflow-x-auto">
      {cards}
    </div>
  )
}
