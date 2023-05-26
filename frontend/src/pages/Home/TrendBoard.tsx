import { useContext, useEffect } from "react";
import { CMSDataContextType, CMSDataType } from "../../types";
import { CMSDataContext } from "../../context/CMSDataProvider";
import { Loader } from "../../components/Loader";


export const TrendBoard = () => {

  const { CMSData } = useContext(CMSDataContext) as CMSDataContextType;

  useEffect(() => {
    console.log(CMSData.trendBoardImages);
  }, [CMSData])
  // const trendBoardImagesJSX =
  if (CMSData.trendBoardImages == null) {
    return (
      <Loader />
    )
  }
  return (
    <section className="">
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="text-semibold text-2xl">Goodbye short days. Hello sun rays</h3>
          <p className="text-sm">Get ready to recline, dine and feel the sushine on your face. it's the perfect time to prepare your garden, <br/> patio or balcon for warmer weather.</p>
        </div>
      <button className="rounded-full px-4 py-2 border my-auto hover:border-black">Browse Outdoor</button>
      </div>
      <div className="trend__image-grid h-screen">
        {CMSData.trendBoardImages.map((imageUrl, index) => <img src={imageUrl[0]} className={`grid-area-${index + 1} h-full object-cover`} alt=""/>) }
      </div>
    </section>
  )
}
