/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";
import Button from "./Button";
export default function CartItems({
  item,
  onRemoveFromCart,
  onCalculateTotal,
  onCalculateTotalPrice,
}) {
  const [quantity, setQuantity] = useState(item.quantity);
  const handleIncrement = () => {
    setQuantity((q) => q + 1);
    onCalculateTotal((prev) => prev + 1);
    onCalculateTotalPrice((prev) => prev + item.price);
  };
  const handleDecrement = () => {
    setQuantity((q) => (q === 1 ? q : q - 1));
    onCalculateTotal((prev) => (quantity === 1 ? prev : prev - 1));
    onCalculateTotalPrice((prev) =>
      quantity === 1 ? prev : prev - item.price
    );
  };
  item.quantity = quantity;
  const handleDelete = () => {
    onRemoveFromCart(item.id);
    onCalculateTotal((prev) => prev - quantity);
    onCalculateTotalPrice((prev) => prev - item.price * quantity);
  };
  return (
    <Item item={item}>
      <div className="item-options">
        <div className="item--quantity">
          <span>{quantity}</span>
          <span>
            <Button onHandler={handleIncrement}>+</Button>
            <Button onHandler={handleDecrement}>-</Button>
          </span>
        </div>
        <Button onHandler={handleDelete}>
          <img
            src="/icons/Trash_Can.svg"
            alt="delete"
            className="item--delete"
          />{" "}
        </Button>
      </div>
    </Item>
  );
}
