import { CartItem } from "./cart-itemDetail";
import { useContext } from "react";
import { ProductContext } from "../store/productContext";

export function ShowBag() {
  const { wishlist, hideBagItems } = useContext(ProductContext);
  if (wishlist.length === 0) {
    return (
      <>
        <div className="flex justify-center" style={{ width: "700px" }}>
          <button className="myBtn" onClick={hideBagItems}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9312/9312240.png"
              alt=""
              className="h-12"
            />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div
            id="sc-active-cart"
            data-csa-c-painter="shoppingcart"
            data-csa-c-type="widget"
            data-name="Active Cart"
            class="a-cardui sc-card-style sc-list sc-java-remote-feature celwidget sc-grid-view sc-grid-full-width sc-card-spacing-top-none"
            data-a-card-type="basic"
            data-csa-c-id="lsc3k9-730sw6-dq568c-nimwai"
            data-cel-widget="sc-active-cart"
            style={{ width: "700px" }}
          >
            <div class="a-cardui-body a-scroller-none">
              <a name="sc-anchor-active-cart" aria-hidden="true"></a>

              <div id="sc-empty-cart" class="a-row a-spacing-top-extra-large">
                <div class="a-column a-span4">
                  <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" />
                </div>

                <div class="a-column a-span8 a-span-last">
                  <h3 class="a-size-large a-spacing-top-base sc-your-amazon-cart-is-empty">
                    Your Flipkart cart Bag is empty
                  </h3>

                  <div class="a-section a-spacing-none sc-shop-todays-deals-link">
                    <a
                      class="a-link-normal"
                      href="/gp/goldbox/ref=cart_empty_deals"
                    >
                      Shop today's deals
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mx-auto" style={{ width: "570px" }}>
      <div className="flex items-center">
        <div className="">
          <button className="myBtn" onClick={hideBagItems}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9312/9312240.png"
              alt=""
              className="h-12"
            />
          </button>
        </div>
        <div className="mx-auto">
          <h3>your Bag have {wishlist.length} item</h3>
        </div>
      </div>

      {wishlist.map((product) => {
        return <CartItem {...product}></CartItem>;
      })}
    </div>
  );
}
