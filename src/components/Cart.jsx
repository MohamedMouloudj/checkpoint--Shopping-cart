/* eslint-disable react/prop-types */
import CartItems from "./CartItems";
export default function Cart({
  cartItems,
  onRemoveFromCart,
  totalItems,
  onCalculateTotal,
  totalPrice,
  onCalculateTotalPrice,
}) {
  return (
    <div className="cart">
      <h3> &lt; Continue shopping </h3>
      <div className="cart__preview">
        <h5>Shopping cart</h5>
        {cartItems.length !== 0 && (
          <div className="cart__total">
            <p>
              You have <span>{totalItems} </span>item in your cart
            </p>
            <p>
              Total price: <span>{totalPrice} DZD</span>
            </p>
          </div>
        )}
      </div>
      <ul className="cart__list">
        {cartItems.length === 0 ? (
          <p>No items in the cart :/</p>
        ) : (
          cartItems.map((item) => (
            <CartItems
              item={item}
              key={item.id}
              onRemoveFromCart={onRemoveFromCart}
              onCalculateTotal={onCalculateTotal}
              onCalculateTotalPrice={onCalculateTotalPrice}
            />
          ))
        )}
      </ul>
    </div>
  );
}
