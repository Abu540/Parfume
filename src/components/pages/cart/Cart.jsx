import "./cart.css";
import cart4 from "../../../assets/cart-4.svg";

const Cart = ({  }) => {
  return (
    <div>
      <div className="container">
        <div className="all">
          <div className="about">
            <h4>PRODUCT</h4>
            <h4>QUANTITY</h4>
            <h4>PRICE</h4>
          </div>
          <div className="about-prod">
            <div className="prod-1">
              <img src={cart4} alt="" />
              <p>Valentino Uomo</p>
            </div>
            <div className="btn-count">
              <button>-</button>
              <h3>1</h3>
              <button>+</button>
            </div>
            <p>5.200 ден. </p>
          </div>
        </div>
        <div className="btns">
          <button>CONTINUE SHOPING</button>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
