import { useState } from "react";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export function CartItem({ ...product }) {
  let bill = product.MRP - (product.discount / 100) * product.MRP;
  console.log(`Stock of ${product.name}: `, product.stock);
  // console.log(`Quantity of ${product.name}: `, quantity);
  return (
    <div className="flex justify-between gap-14 py-8">
      <div style={{ backgroundColor: "silver", border: "2px solid black" }}>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <p className="text-lg">{product.description}</p>

        <Stack className="mt-1">
          <Rating
            name="half-rating-read"
            defaultValue={(Math.random() * 5).toFixed(1)}
            precision={0.5}
            readOnly
            // size="small"
          />
        </Stack>
        <p className="mt-1">
          Name: <span className="ms-1">{product.name}</span>
        </p>
        <s className="mt-1">MRP: ${product.MRP.toFixed(3)}</s>
        <p className="mt-1">
          Discount:
          <span className="text-red-400 text-lg ms-2">
            -{product.discount}%
          </span>
        </p>
        <div className="flex justify-between items center">
          <p>
            Bill:
            <span className="text-green-400 text-xl ms-2">
              ${bill.toFixed(3)}
            </span>
          </p>
          <button className="myBtn">
            <img
              src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-silver-trash-bin-clipart-png-image_5947991.jpg"
              alt="Trash"
              className="h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
