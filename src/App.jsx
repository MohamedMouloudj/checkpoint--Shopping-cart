import { useState } from "react";
import Cart from "./components/Cart";
import Store from "./components/Store";

const storeItems = [
  {
    name: "Candia Milk 1L",
    price: 120,
    quantity: 1,
    id: crypto.randomUUID(),
    image_url: "https://superetti.dz/wp-content/uploads/2021/05/555.jpg",
  },
  {
    name: "Bimo cookies 200g",
    price: 100,
    quantity: 1,
    id: crypto.randomUUID(),
    image_url: "https://superetti.dz/wp-content/uploads/2020/08/3092.jpg",
  },
  {
    name: "Sim Couscous mid 1kg",
    price: 130,
    quantity: 1,
    id: crypto.randomUUID(),
    image_url:
      "https://superetti.dz/wp-content/uploads/2021/04/Couscous-Taami-Moyen-1Kg-Sim.jpg",
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleAddToCart = (item) => {
    if (!cartItems.find((i) => i.id === item.id)) {
      setCartItems((prev) => [...prev, item]);
      setTotalItems((prev) => prev + 1);
      setTotalPrice((prev) => prev + item.price);
    }
  };
  const handleDeleteFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleDeleteFromCart}
        totalItems={totalItems}
        onCalculateTotal={setTotalItems}
        totalPrice={totalPrice}
        onCalculateTotalPrice={setTotalPrice}
      />
      <Store storeItems={storeItems} onAddToCart={handleAddToCart} />
    </div>
  );
}
