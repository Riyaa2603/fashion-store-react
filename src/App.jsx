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

  // Hide nav bar and footer on login page or when user is not logged in
  const showNav = isLoggedIn && location.pathname !== "/login";

  return (
    <CartProvider>
      <div className="app-container">
        {showNav && <Header title="The Daily Drape" />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/men" element={isLoggedIn ? <Men /> : <Navigate to="/login" />} />
          <Route path="/women" element={isLoggedIn ? <Women /> : <Navigate to="/login" />} />
          <Route path="/kids" element={isLoggedIn ? <Kids /> : <Navigate to="/login" />} />
          <Route path="/accessories" element={isLoggedIn ? <Accessories /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>

        {showNav && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
