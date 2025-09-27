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

  const increaseQnty = (product_id) => {
    setFlipkart((prevState) => {
      return {
        ...prevState,
        wishlist: prevState.wishlist.map((item) => {
          if (item.id === product_id) {
            if (item.quantity < item.stock) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              alert(
                "We are out of Stock for " +
                  `${item.name}`.toUpperCase() +
                  " item"
              );
              return item; // updated item, otherwise map returns undefined
            }
          } else {
            return item;
          }
        }),
      };
    });
  };

  const decreaseQnty = (product_id) => {
    setFlipkart((prevState) => {
      const updatedWishlist = prevState.wishlist.map((item) => {
          if (item.id === product_id) {
            if (item.quantity === 1) {
              return null; // Mark for removal of the particular cart item
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
          return item;
        })
        .filter((item) => item !== null); // Remove marked cart items
      return {
        ...prevState,
        wishlist: updatedWishlist,
      };
    });
  };

  if (flipkart.shoWishlist)
    content = (
      <ShowBag
        wishlist={flipkart.wishlist}
        hideBagItems={hideBagItems}
        removefromCart={removeBagItem}
        increaseQnty={increaseQnty}
        decreaseQnty={decreaseQnty}
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
      <Header wishlist={flipkart.wishlist} showBagItems={showBagItems} />
      {content}
    </>
  );
}
