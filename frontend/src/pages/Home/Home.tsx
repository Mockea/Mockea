import { Main } from "../../components/Main"
import { ArticleCarousel } from "./ArticleCarousel"
import { CommunityBanner } from "./CommunityBanner"
import { InspirationBoard } from "./InspirationBoard"
import { PopularCategoriesCarousel } from "./PopularCategoriesCarousel"
import { ServicesCarousel } from "./ServicesCarousel/ServicesCarousel"
import { TrendBoard } from "./TrendBoard"

export const Home = () => {
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
