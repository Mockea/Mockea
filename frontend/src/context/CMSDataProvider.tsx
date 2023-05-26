import React, { createContext, useEffect, useState } from 'react'
import { getCMSData } from '../services/cmsApi';
import { CMSDataType } from '../types';

 type Props = {
  children: React.ReactNode
 }

export const CMSDataContext = createContext({});

export const CMSDataProvider = ( {children} : Props) => {
  const [CMSData, setCMSData] = useState<CMSDataType>({});

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
