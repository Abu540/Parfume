import { Route, Routes } from "react-router-dom";
import Hero from "../components/pages/hero/Hero";
import Products from "../components/pages/products/Products";
import About from "../components/pages/about/About";
import User from "../components/pages/user/User";
import Cart from "../components/pages/cart/Cart";
import Admin from "../components/pages/admin/Admin";
import Header from "../components/layout/header/Header"; // путь поправь под свой проект


const routes = [
  { link: "/", element: <Hero /> },
  { link: "/products", element: <Products /> },
  { link: "/cart", element: <Cart /> },
  { link: "/user", element: <User /> },
  { link: "/register", element: <Admin /> },
  { link: "/details/:id", element: "" },
];
const MainRoutes = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        {routes.map((item, idx) => (
          <Route path={item.link} element={item.element} key={idx} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
