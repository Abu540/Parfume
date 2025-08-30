import "./hero.css";
import parf1 from "../../../assets/parf-1.svg";
import parf2 from "../../../assets/parf-2.svg";
import parf3 from "../../../assets/parf-3.svg";
import parf4 from "../../../assets/parf-4.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1>——————————————— NEW IN ENSCENT ———————————————</h1>
      </div>
      <div className="parfs">
        <div className="hero-cont">
          <img src={parf1} />
          <h3>Paco Rabanne Phantom</h3>
        </div>
        <div className="hero-cont">
          <img src={parf2} />
          <h3>Tom Ford Black Orchid</h3>
        </div>
        <div className="hero-cont">
          <img src={parf3} />
          <h3></h3>
        </div>
        <div className="hero-cont">
          <img src={parf4} />
          <h3>Paco Rabanne Phantom</h3>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-cont1">
              <h4>OFFERS AND TRENDS</h4>
              <h2>Newsletter Application</h2>
              <p>
                Enter your email address and let us notify you about news and
                discounts...
              </p>
              <div className="cotn-inp">
                <input type="text" />
                <button>SIGN UP</button>
              </div>
            </div>
            <div className="footer-cont2">
              <h4>STAY UP TO DATE</h4>
              <h2>Follow Us</h2>
              <p>
                Become part of our friends on social networks and find out first
                about the discounts and novelties that we announce...
              </p>
              <div className="cotn-mass">
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
