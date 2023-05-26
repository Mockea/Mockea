
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
}

export type CMSDataType = {
  TrendBoardImages: string[]
}