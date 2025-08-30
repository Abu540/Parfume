import "./products.css";
import { AiFillCaretRight } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
import Slider from "@mui/material/Slider";
import { useProducts } from "../../../context/ProductContext";
import { useEffect, useState } from "react";

const Products = () => {
  const {
    readProduct,
    data: productData,
    deleteProduct,
    updateProduct,
  } = useProducts();

  //Поиск
  const [searchQuery, setSearchQuery] = useState("");
  //
  const [tempRange, setTempRange] = useState([0, 25000]); // временное
  const [priceRange, setPriceRange] = useState([0, 25000]); // применённое
  // Состояния для Редактирования
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    price: "",
    brand: "",
    info: "",
    image: "",
  });

  useEffect(() => {
    readProduct();
  }, []);
  //
  const Products = ({ searchQuery }) => {
    const { data: productData } = useProducts();
    const [priceRange, setPriceRange] = useState([0, 25000]);

    const filteredProducts = productData.data?.filter(
      (item) =>
        item.price >= priceRange[0] &&
        item.price <= priceRange[1] &&
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  // фильтрация по диапазону
  const filteredProducts = productData.data?.filter(
    (item) =>
      item.price >= priceRange[0] &&
      item.price <= priceRange[1] &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  // Редактирования
  const handleEditClick = (item) => {
    setEditingProduct(item._id);
    setEditForm({
      title: item.title,
      price: item.price,
      brand: item.brand,
      info: item.info,
      image: item.image,
    });
  };
  // Отправка изменений
  const handleUpdate = async () => {
    await updateProduct(editingProduct, editForm);
    setEditingProduct(null);
    readProduct();
  };

  return (
    <div>
      <div className="products">
        <div className="list-name">
          <h3>CATEGORY</h3>
          <p>
            <AiFillCaretRight /> MALE PERFUMES
          </p>
          <p>
            <AiFillCaretRight /> FEMALE PERFUMES
          </p>
          <p>
            <AiFillCaretRight /> UNISEX
          </p>

          <h3>PRICE</h3>
          <Slider
            value={tempRange}
            onChange={(e, newValue) => setTempRange(newValue)}
            min={0}
            max={25000}
            step={100}
            sx={{
              color: "white",
              height: 6,
              "& .MuiSlider-thumb": {
                width: 10,
                height: 24,
                borderRadius: 1,
                backgroundColor: "#e0e0e0",
              },
            }}
          />
          <div className="fill">
            <p>
              Selected: {tempRange[0]} - {tempRange[1]}
            </p>
            <button onClick={() => setPriceRange(tempRange)}>Filter</button>
          </div>

          <h3>BRAND</h3>
          <p>
            <AiFillCaretRight /> DIOR
          </p>
          <p>
            <AiFillCaretRight /> VERSACE
          </p>
          <p>
            <AiFillCaretRight /> PRADA
          </p>
          <p>
            <AiFillCaretRight /> TOM FORD
          </p>

          <h3>TYPE</h3>
          <p>
            <AiFillCaretRight /> ELIXIR
          </p>
          <p>
            <AiFillCaretRight /> COLOGNE
          </p>
          <p>
            <AiFillCaretRight /> PERFUME
          </p>
          <p>
            <AiFillCaretRight /> EAU DE TOILETTE
          </p>
        </div>

        <div className="produscts-img">
          {filteredProducts?.map((item) => (
            <div className="cart-prod" key={item._id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.brand}</h4>
              <p>{item.title}</p>
              <h4>{item.price}$</h4>
              <p>{item.info}</p>
              <div className="btns">
                <button>ADD TO BASKET</button>
                <span onClick={() => deleteProduct(item._id)}>
                  <MdDeleteSweep />
                </span>
                <span onClick={() => handleEditClick(item)}>
                  <LiaEdit />
                </span>
              </div>
            </div>
          ))}
        </div>
        {editingProduct && (
          <div className="edit-form">
            <h3>Edit Product</h3>
            <input
              type="text"
              value={editForm.title}
              onChange={(e) =>
                setEditForm({ ...editForm, title: e.target.value })
              }
              placeholder="Title"
            />
            <input
              type="number"
              value={editForm.price}
              onChange={(e) =>
                setEditForm({ ...editForm, price: e.target.value })
              }
              placeholder="Price"
            />
            <input
              type="text"
              value={editForm.brand}
              onChange={(e) =>
                setEditForm({ ...editForm, brand: e.target.value })
              }
              placeholder="Brand"
            />
            <input
              type="text"
              value={editForm.info}
              onChange={(e) =>
                setEditForm({ ...editForm, info: e.target.value })
              }
              placeholder="Info"
            />
            <input
              type="text"
              value={editForm.image}
              onChange={(e) =>
                setEditForm({ ...editForm, image: e.target.value })
              }
              placeholder="Image URL"
            />
            <div className="edit-btns">
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditingProduct(null)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
