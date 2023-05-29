
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


export interface ICart {
  cartId: number,
  productsId: number[]
}

export interface IUser {
  userId: number,
  username: string,
  email: string,
  address: IAddress
}

export interface IAddress {
  addressId: number,
  streetName: string,
  streetNo: number,
  postalCode: number,
  city: string,
  country: string
}
