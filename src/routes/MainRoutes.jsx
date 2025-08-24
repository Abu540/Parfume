import React from "react";
import { Route, Routes } from "react-router-dom";

const routes = [
  { link: "/", element: "" },
  { link: "/products", element: "" },
  { link: "/cart", element: "" },
  { link: "/admin", element: "" },
  { link: "/register", element: "" },
  { link: "/details/:id", element: "" },
];
const MainRoutes = () => {
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route path={item.link} element={item.element}  key={idx}/>
      ))}
    </Routes>
  );
};

export default MainRoutes;
