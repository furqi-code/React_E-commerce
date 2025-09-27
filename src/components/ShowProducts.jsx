import { Card } from "./productCard";

export function ShowProducts({addToCart, productList}) {
  return (
    <div className="flex justify-center align-center">
      <div class="grid grid-cols-4 gap-4">
        {productList.map((products) => (
          <div className="p-4">
            <Card {...products} addToCart={addToCart}/>
          </div>
        ))}
      </div>
    </div>
  );
}
