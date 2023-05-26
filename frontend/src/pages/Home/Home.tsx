import { useContext, useEffect } from "react"
import { Main } from "../../components/Main"
import { ArticleCarousel } from "./ArticleCarousel"
import { CommunityBanner } from "./CommunityBanner"
import { InspirationBoard } from "./InspirationBoard"
import { PopularCategoriesCarousel } from "./PopularCategoriesCarousel"
import { ServicesCarousel } from "./ServicesCarousel/ServicesCarousel"
import { TrendBoard } from "./TrendBoard"
import { CMSDataContext } from "../../context/CMSDataProvider"
import { CMSDataContextType } from "../../types"
import { getCMSData } from "../../services/cmsApi"

export const Home = () => {
  const {fetchCMSData } = useContext(CMSDataContext) as CMSDataContextType;

  const getData = async () => {
    await fetchCMSData();
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Main>
      <TrendBoard />
      <PopularCategoriesCarousel />
      <ArticleCarousel />
      <ServicesCarousel />
      <CommunityBanner />
      <InspirationBoard/>
    </Main>
  )
}
