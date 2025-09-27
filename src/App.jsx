import { useState } from "react";
import { Header } from "./components/header";
import { products } from "./products";
import { ShowProducts } from "./components/ShowProducts";
import { ShowBag } from "./components/showBag";

export function App() {
  const [flipkart, setFlipkart] = useState({
    productList: products,
    wishlist: [],
    shoWishlist: false,
  });
  let content;
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

  const showBagItems = () => {
    setFlipkart((prevState) => {
      return {
        ...prevState,
        shoWishlist: true,
      };
    });
  };

  const hideBagItems = () => {
    setFlipkart((prevState) => {
      return {
        ...prevState,
        shoWishlist: false,
      };
    });
  };

  const removeBagItem = (product_id) => {
    setFlipkart((prevState) => {
      return {
        ...prevState,
        wishlist: prevState.wishlist.filter((item) => item.id != product_id),
      };
    });
  };

  if (flipkart.shoWishlist)
    content = (
      <ShowBag
        wishlist={flipkart.wishlist}
        hideBagItems={hideBagItems}
        removefromCart={removeBagItem}
      />
    );
  else
    content = (
      <ShowProducts
        productList={flipkart.productList}
        addToCart={collectItems}
      />
    );

  return (
    <>
      <Header wishlist={flipkart.wishlist} showBagItems={showBagItems}/>
      {content}
    </>
  );
}
