/* eslint-disable react/prop-types */
export default function Item({ item, children }) {
  return (
    <li className="item">
      <img src={item.image_url} alt={item.name} />
      <h5>{item.name} </h5>
      <p>{item.price * item.quantity} DZD</p>
      {children}
    </li>
  );
}
