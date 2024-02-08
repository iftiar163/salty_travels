import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            {/* Footer Logo */}
            <div className="col-md-3">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704995968/salty_travels/br5kmwwfgoje8bh7cksq.png"
                  alt=""
                />
                <p>Enjoy the touring with Salty</p>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
