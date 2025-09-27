import { useState } from "react";
import { Header } from "./components/header";
import { products } from "./products";

export function App() {
  const [flipkart, setFlipkart] = useState({
    productList: products,
    wishlist: [],
    shoWishlist: false,
  });

  console.log("wishlist Array \n", flipkart.wishlist);

  return (
    <>
      <Header wishlist={flipkart.wishlist} />
    </>
  );
}
