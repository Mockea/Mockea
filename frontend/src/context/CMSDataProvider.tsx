import React, { createContext, useEffect, useState } from 'react'
import { getCMSData } from '../services/cmsApi';

 type Props = {
  children: React.ReactNode
 }

const CMSDataContext = createContext({});

export const CMSDataProvider = ( {children} : Props) => {
  const [CMSData, setCMSData] = useState<Object>({});

  const fetchCMSData = async () => {
    setCMSData( await getCMSData());
  }

  useEffect(() => {
    fetchCMSData();
  }, [])

  return (
    <CMSDataContext.Provider value={{CMSData}}>
      {children}
    </CMSDataContext.Provider>
  )
}
