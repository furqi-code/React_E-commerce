import { useState } from "react";
import { Header } from "./components/header";
import { products } from "./products";
import { ShowProducts } from "./components/ShowProducts";

export function App() {
  const [flipkart, setFlipkart] = useState({
    productList: products,
    wishlist: [],
    shoWishlist: false,
  });

  console.log("wishlist Array \n", flipkart.wishlist);

  const collectItems = (id) => {
    let selectedItem = flipkart.productList.find(
      (product) => product.id === id
    );
    let alreadyinBag = flipkart.wishlist.find(
      (items) => items.id === selectedItem.id
    );
    if (!alreadyinBag) {
      setFlipkart((prevState) => {
        return {
          ...prevState,
          wishlist: [...prevState.wishlist, selectedItem],
        };
      });
    }
  };


  return (
    <>
      <Header wishlist={flipkart.wishlist} />
      <ShowProducts productList={flipkart.productList} addToCart={collectItems}></ShowProducts>
    </>
  );
}
