import "./products.css";
import { AiFillCaretRight } from "react-icons/ai";
import Slider from "@mui/material/Slider";
import cart1 from "../../../assets/cart-1.svg";
import cart2 from "../../../assets/cart-2.svg";
import cart3 from "../../../assets/cart-3.svg";
import cart4 from "../../../assets/cart-4.svg";
const Products = () => {
  return (
    <div>
      <div className="products">
        <div className="list-name">
          <h3>CATEGORY</h3>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            MALE PERFUMES
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            FEMALE PERFUMES
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            UNISEX
          </p>
          <h3>PRICE</h3>
          <Slider
            defaultValue={50}
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
            <p>Price:0-25.000</p>
            <span> Filter</span>
          </div>
          <h3>BRAND</h3>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            DIOR
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            VERSACE
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            PRADA
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            TOM FORD
          </p>
          <h3>TYPE</h3>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            ELIXIR
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            COLOGNE
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            PERFUME
          </p>
          <p>
            <span>
              <AiFillCaretRight />
            </span>
            EAU DE TOILETTE
          </p>
        </div>
        <div className="produscts-img">
          <div className="cart-prod">
            <img src={cart1} alt="" />
            <p>Dolce & Gabanna King Eau de parfum</p>
            <h4>3.400 ден.</h4>
            <button>ADD TO BASKET</button>
          </div>
          <div className="cart-prod">
            <img src={cart2} alt="" />
            <p>YSL Y Le Parfum</p>
            <h4>5.600 ден.</h4>
            <button>ADD TO BASKET</button>
          </div>
          <div className="cart-prod">
            <img src={cart3} alt="" />
            <p>Versace Eros Flame</p>
            <h4>6.000 ден.</h4>
            <button>ADD TO BASKET</button>
          </div>
          <div className="cart-prod">
            <img src={cart4} alt="" />
            <p>Valentino Uomo</p>
            <h4>5.200 ден.</h4>
            <button>ADD TO BASKET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
