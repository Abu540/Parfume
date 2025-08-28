import { Route, Routes } from "react-router-dom";
import Hero from "../components/pages/hero/Hero";
import Products from "../components/pages/products/Products";
import About from "../components/pages/about/About";
import User from "../components/pages/user/User";
import Cart from "../components/pages/cart/Cart";
import Admin from "../components/pages/admin/Admin";

const routes = [
  { link: "/", element: <Hero /> },
  { link: "/products", element: <Products /> },
  { link: "/cart", element: <Cart /> },
  { link: "/user", element: <User /> },
  { link: "/admin", element: <Admin /> },
  { link: "/details/:id", element: "" },
];
const MainRoutes = () => {
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route path={item.link} element={item.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
