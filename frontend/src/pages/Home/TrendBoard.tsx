import { useContext } from "react";
import { CMSDataContextType } from "../../types";
import { CMSDataContext } from "../../context/CMSDataProvider";

export const TrendBoard = () => {

  const { CMSData } = useContext(CMSDataContext) as CMSDataContextType;

  // const TrendBoardImagesJSX = CMSData.TrendBoardImages.map(imageUrl => <img src={imageUrl} alt=""> </img>)

  console.log(CMSData);
  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-semibold text-3xl">Goodbye short days. Hello sun rays</h3>
          <p className="text-lg">Get ready to recline, dine and feel the sushine on your face. it's the perfect time to prepare your garden, <br/> patio or balcon for warmer weather.</p>
        </div>
      <button className="rounded-full px-2 py-4 border my-auto">Browse Outdoor</button>
      </div>
      <div className="trend__image-grid">
        {/* {TrendBoardImagesJSX} */}
      </div>
    </section>
  )
}
