
export type Product = {
  productId: number,
  name: string,
  price: number,
  color: string,
  material: string,
  care: string,
  dimensions: string,
  category: Category,
  reviewIds: number[]

}

export type Category = {
  categoryId: number,
  name: string,
  productIds: number[]
}

export type Review = {
  reviewId: number,
  rating: number,
  title: string,
  text: string,
  productId: number
}

export type CMSDataContextType = {
  CMSData: CMSDataType
  fetchCMSData: () => void
}

export type CMSDataType = {
  trendBoardImages: string[][],
  infoLinks: string[][]
}

// export type asdCMSDataType = string[][]



// const infoLinks = [
//   ["This is IKEA" , "title"],
//   ["Work at IKEA" , ""],
//   ["IKEA Museum" , ""],
//   ["Life at home" , ""],
//   ["IKEA Foundation" , ""],
//   ["Furnishing tomorrow" , ""],
//   ["Social responsibility" , ""],
//   ["About us" , ""],
//   ["Press room" , ""]
// ]
