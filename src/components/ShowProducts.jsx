import { Card } from "./productCard";
import { useContext } from "react";
import {ProductContext} from "../store/productContext"

export function ShowProducts() {
  const { productList } = useContext(ProductContext);
  return (
    <div className="flex justify-center align-center">
      <div class="grid grid-cols-4 gap-4">
        {productList.map((products) => (
          <div className="p-4">
            <Card {...products}/>
          </div>
        ))}
      </div>
    </div>
  );
}
