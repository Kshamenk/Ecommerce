import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Detail from "./components/Detail/Detail";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Users from "./components/Users/Users";
import Products from "./components/Products/Products";
import CommentModal from "./components/CommentModal/CommentModal";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import CommentsForProduct from "./components/CommentsForProduct/CommentsForProducts";
import fondoImagen from "./assets/fondos/fondo2.png";

function App() {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  if (isAuthenticated) {
    if (location.pathname === "/" || location.pathname === "/*") {
      return <Navigate to="/home" />;
    }
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${fondoImagen})` }}>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/form" element={<CreateProduct />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id/comment" element={<CommentModal />} />
        <Route path="/products/:id/comments" element={<CommentsForProduct />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
