import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Main = ( {children} : Props) => {
  return (
    <div className="container mx-auto my-20">
      {children}
    </div>
  )
}
