
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
        
        <button className="w-60">
            <img src={service.image} alt={service.title}/>
            {service.title}
        </button>
    </div>
    
  )
}
