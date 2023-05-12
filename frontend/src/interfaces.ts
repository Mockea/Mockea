
export interface IProduct {
  productId: number,
  name: string,
  price: number,
  color: string,
  material: string,
  care: string,
  dimensions: string,
  category: ICategory,
  reviewIds: number[]

}

export interface ICategory {
  categoryId: number,
  name: string,
  productIds: number[]
}

export interface IReview {
  reviewId: number,
  rating: number,
  title: string,
  text: string,
  productId: number
}
