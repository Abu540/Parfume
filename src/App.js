import MainRoutes from "./routes/MainRoutes";
import ProductContext from "./context/ProductContext";
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <ProductContext>
      <MainRoutes searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </ProductContext>
  );
};

export default App;
