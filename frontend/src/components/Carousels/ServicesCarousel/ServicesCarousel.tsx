import { useEffect, useState } from "react"
import { ServiceCard } from "./ServiceCard";
import { ServiceData } from "./ServiceMockData";

type Service = {
  image: string,
  title: string
}

export const ServicesCarousel = () => {
  const [ services, setServices ] = useState<Service[]>();

  const GetData = () => {
    setServices(ServiceData)
  }

  useEffect(() => {
    GetData();
  }, [])

  const cards = services?.map(service => <ServiceCard key={service.title} service={service}/>)

  return (
    <div className="overflow-x-auto flex gap-6">
      {cards}
    </div>
  )
}
