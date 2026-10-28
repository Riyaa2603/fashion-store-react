import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loginStatus") === "true";

  return (
    <CartProvider>
      <div className="app-container">
        <Header title="The Daily Drape" />

        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Public routes: anyone can view */}
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/accessories" element={<Accessories />} />

          {/* Protected routes: ONLY Cart and Profile require login */}
          <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
