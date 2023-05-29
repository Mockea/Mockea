import { useContext, useEffect } from "react"
import { Main } from "../../components/Main"
import { ArticleCarousel } from "../../components/Carousels/ArticleCarousel"
import { CommunityBanner } from "../../components/Banners/CommunityBanner"
import { InspirationBoard } from "../../components/Boards/InspirationBoard"
import { PopularCategoriesCarousel } from "../../components/Carousels/PopularCategoriesCarousel"
import { ServicesCarousel } from "../../components/Carousels/ServicesCarousel/ServicesCarousel"
import { TrendBoard } from "../../components/Boards/TrendBoard"
import { CMSDataContext } from "../../context/CMSDataProvider"
import { CMSDataContextType } from "../../types"

const ffUndone = false;

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
      { ffUndone && (
        <>
          <PopularCategoriesCarousel />
          <ArticleCarousel />
          <ServicesCarousel />
          <CommunityBanner />
          <InspirationBoard/>
        </>
      )}
    </Main>
  )
}
