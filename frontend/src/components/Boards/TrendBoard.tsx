import { useContext, useEffect } from "react";
import { CMSDataContextType } from "../../types";
import { CMSDataContext } from "../../context/CMSDataProvider";
import { Loader } from "../Loader";



const trendBoardImages = [
  ["https://www.ikea.com/ext/ingkadam/m/42a9ba82e612d85a/original/PH173386-crop001.jpg?f=xl", ""],
  ["https://www.ikea.com/ext/ingkadam/m/6bfe121c0e7bb92c/original/PH191268.jpg?f=xs", ""],
  ["https://www.ikea.com/ext/ingkadam/m/6e8da01f11867411/original/PH184065-crop001.jpg?f=xs", ""],
  ["https://www.ikea.com/ext/ingkadam/m/b58263b9b2a903/original/PH190435.jpg?f=xs", ""],
  ["https://www.ikea.com/ext/ingkadam/m/66046cc968449809/original/PH189415-crop001.jpg?f=xs", ""]
]

export const TrendBoard = () => {

  // Once clicked does not appear anymore

  // const { CMSData } = useContext(CMSDataContext) as CMSDataContextType;

  // useEffect(() => {
  //   console.log(CMSData.trendBoardImages);
  // }, [CMSData])
  // if (CMSData.trendBoardImages == null) {
  //   return (
  //     <Loader />
  //   )
  // }

  const trendBoardImagesJSX = trendBoardImages.map((imageUrl, index) => <img key={imageUrl[0]} src={imageUrl[0]} className={`grid-area-${index + 1} h-full object-cover`} alt=""/>);

  return (
    <section className="">
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="text-bold text-2xl"><strong>Goodbye short days. Hello sun rays</strong></h3>
          <p className="text-sm py-3">Get ready to recline, dine and feel the sushine on your face. it's the perfect time to prepare your garden, patio or balcon for warmer <br/> weather.</p>
        </div>
      <button className="rounded-full px-4 py-2 border my-auto hover:border-black">Browse Outdoor</button>
      </div>
      <div className="trend__image-grid h-screen grid gap-6">
        {/* {CMSData.trendBoardImages.map((imageUrl, index) => <img key={imageUrl[0]} src={imageUrl[0]} className={`grid-area-${index + 1} h-full object-cover`} alt=""/>) } */}
        {trendBoardImagesJSX}
      </div>
    </section>
  )
}
