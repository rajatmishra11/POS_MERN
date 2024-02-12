import {} from "antd";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/itemPage.js";
import CartPage from "./pages/CartPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

