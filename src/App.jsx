import { useReducer } from "react";
import { Header } from "./components/header";
import { products } from "./products";
import { ShowProducts } from "./components/ShowProducts";
import { ShowBag } from "./components/showBag";
import { ProductContext } from "./store/productContext";

export function App() {
  const [flipkart, dispatch] = useReducer(reducer, {
    productList: products,
    wishlist: [],
    shoWishlist: false,
  });
  let content;
  console.log("wishlist Array \n", flipkart.wishlist);

  function reducer(state, action) {
    switch (action.type) {
      case "collectItems":
        return {
          ...state,
          wishlist: [...state.wishlist, action.selectedItem],
        };

      case "showBagItems":
        return {
          ...state,
          shoWishlist: true,
        };

      case "hideBagItems":
        return {
          ...state,
          shoWishlist: false,
        };

      case "removeBagItem":
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.product_id
          ),
        };

      case "increaseQnty":
        return {
          ...state,
          wishlist: state.wishlist.map((item) => {
            if (item.id === action.product_id) {
              if (item.quantity < item.stock) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                alert(
                  "We are out of Stock for " +
                    `${item.name}`.toUpperCase() +
                    " item"
                );
                return item;
              }
            } else {
              return item;
            }
          }),
        };

      case "decreaseQnty":
        const updatedWishlist = state.wishlist
          .map((item) => {
            if (item.id === action.product_id) {
              if (item.quantity === 1) {
                return null;
              } else {
                return { ...item, quantity: item.quantity - 1 };
              }
            }
            return item;
          })
          .filter((item) => item !== null);

        return {
          ...state,
          wishlist: updatedWishlist,
        };

      default:
        throw new Error("Unknown action: " + action.type);
    }
  }

  const collectItems = (id) => {
    let selectedItem = flipkart.productList.find(
      (product) => product.id === id
    );
    let alreadyinBag = flipkart.wishlist.find(
      (items) => items.id === selectedItem.id
    );
    if (!alreadyinBag) {
      dispatch({
        type: "collectItems",
        selectedItem,
      });
    }
  };

  const showBagItems = () => {
    dispatch({
      type: "showBagItems",
    });
  };

  const hideBagItems = () => {
    dispatch({
      type: "hideBagItems",
    });
  };

  const removeBagItem = (product_id) => {
    dispatch({
      type: "removeBagItem",
      product_id,
    });
  };

  const increaseQnty = (product_id) => {
    dispatch({
      type: "increaseQnty",
      product_id,
    });
  };

  const decreaseQnty = (product_id) => {
    dispatch({
      type: "decreaseQnty",
      product_id,
    });
  };

  if (flipkart.shoWishlist) content = <ShowBag />;
  else content = <ShowProducts />;

  return (
    <ProductContext
      value={{
        productList: products,
        wishlist: flipkart.wishlist,
        addToCart: collectItems,
        removefromCart: removeBagItem,
        showBagItems: showBagItems,
        hideBagItems: hideBagItems,
        increaseQnty: increaseQnty,
        decreaseQnty: decreaseQnty,
      }}
    >
      <Header></Header>
      {content}
    </ProductContext>
  );
}
