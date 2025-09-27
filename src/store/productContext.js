import { createContext } from "react";

export const ProductContext = createContext({
  productList: [],
  wishlist: [],
  addToCart: ()=> {},
  removefromCart: ()=> {},
  showBagItems: ()=> {},
  hideBagItems: ()=> {},
  increaseQnty: ()=> {},
  decreaseQnty: ()=> {}
});
