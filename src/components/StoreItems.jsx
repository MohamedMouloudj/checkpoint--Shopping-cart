/* eslint-disable react/prop-types */
import Item from "./Item";
import Button from "./Button";
export default function StoreItems({ item, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(item);
  };
  return (
    <Item item={item}>
      <div className="store__add-cart">
        <Button onHandler={handleAddToCart}>
          <span>+</span>
        </Button>
      </div>
    </Item>
  );
}
