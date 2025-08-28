import "./admin.css";
import { PiUploadDuotone } from "react-icons/pi";

const admin = (addProduct) => {
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
              onChange={(e) => addProduct(e.target.value)}
                value={value}
              type="text"
            />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div className="admin-add">
            <p>UPLOAD PRODUCT IMAGE:</p>
            <span>
              <PiUploadDuotone />
            </span>
            <button>PREVIEW PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default admin;
