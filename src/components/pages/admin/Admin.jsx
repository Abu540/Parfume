import "./admin.css";
import { PiUploadDuotone } from "react-icons/pi";
import { useState } from "react";
import { useProducts } from "../../../context/ProductContext";

const Admin = () => {
  const { addProduct } = useProducts();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  // ДЛЯ АВТОРИЗАЦИИ
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerClick = async () => {
    let obj = {
      title: title,
      price: price,
      info: info,
      brand: brand,
      image: image,
    };
    await addProduct(obj);
    setTitle("");
    setPrice("");
    setInfo("");
    setBrand("");
    setImage("");
  };
  // Модальное окно для авторизации
  const handleLogin = () => {
    const fullEmail = email.includes("@") ? email : `${email}@gmail.com`;

    if (fullEmail === "Abu@gmail.com" && password === "2005") {
      setIsAuth(true);
    } else {
      alert("Неверная почта или пароль!");
    }
  };

  // Авторизация
  if (!isAuth) {
    return (
      <div className="login-page">
        <h2>Авторизация</h2>
        <input
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Войти</button>
      </div>
    );
  }

  return (
    <div>
      <div className="admin">
        <div className="line"></div>
        <h1>PRODUCT INFORMATION</h1>
        <div className="admin-cont">
          <div className="text">
            <p>PRODUCT NAME:</p>
            <p>PRODTUCT PRICE:</p>
            <p>PRODUCT DESCRIPTION:</p>
            <p>PRODUCT BRAND:</p>
            <p>NO.OF BATCHES AVAILABLE:</p>
          </div>
          <div className="inp">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Name...."
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="Price..."
            />
            <input
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              type="text"
              placeholder="Info..."
            />
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              type="text"
              placeholder="Brand..."
            />
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Image..."
            />
          </div>
          <div className="admin-add">
            <p>UPLOAD PRODUCT IMAGE:</p>
            <span>
              <PiUploadDuotone />
            </span>
            <button onClick={handlerClick}>PREVIEW PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
