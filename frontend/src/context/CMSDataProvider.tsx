import React, { createContext, useEffect, useState } from 'react'
import { getCMSData } from '../services/cmsApi';
import { CMSDataType } from '../types';

 type Props = {
  children: React.ReactNode
 }

export const CMSDataContext = createContext({});

export const CMSDataProvider = ( {children} : Props) => {
  const [CMSData, setCMSData] = useState<CMSDataType>(Object);

  const fetchCMSData = async () => {
    const CMSData =  await getCMSData();
    setCMSData(CMSData);
  }

  return (
    <CMSDataContext.Provider value={{CMSData, fetchCMSData}}>
      {children}
    </CMSDataContext.Provider>
  )
}
