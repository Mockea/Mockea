
type Props = {
    service: Service
}

type Service = {
    image: string,
    title: string
}

export const ServiceCard = ({service} : Props) => {

  return (
    <div>
        <img src={service.image} alt={service.title} />
        <button>{service.title}</button>
    </div>
    
  )
}
