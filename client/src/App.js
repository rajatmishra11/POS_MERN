import {} from "antd";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/itemPage.js";
import CartPage from "./pages/CartPage.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <protectedRoute>
              <Homepage />
            </protectedRoute>
          }
        />
        <Route
          path="/items"
          element={
            <protectedRoute>
              <ItemPage />
            </protectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <protectedRoute>
              <CartPage />
            </protectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export function protectedRoute({children}){

    if(localStorage.getItem('auth'))
    {
      return children
    }
    else{
      return <Navigate to='/login' />
    }

}