/* eslint-disable react/prop-types */
import StoreItems from "./StoreItems";
export default function Store({ storeItems, onAddToCart }) {
  return (
    <div className="store">
      <h3>Store</h3>
      <ul className="store__list">
        {/* I copied it to not mutate the original object */}
        {storeItems.map((item) => (
          <StoreItems
            item={{ ...item }}
            key={item.id}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
}
