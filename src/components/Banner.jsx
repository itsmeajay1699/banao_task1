import DBannerImg from "../assets/DBanner.png";
import MBannerImg from "../assets/MBanner.png";
import ABack from "../assets/ABack.svg";
import "../App.css";
const Banner = () => {
  return (
    <div className="col-12 position-relative">
      <div className="min-w-100 row">
        <div className="col-12 d-none d-md-block">
          <img src={DBannerImg} alt="Banner" className="img-fluid" />
        </div>
        <div className="col-12 d-block d-md-none">
          <img src={MBannerImg} alt="Banner" className="img-fluid" />
        </div>
      </div>
      <div
        className="position-absolute second-col
      "
      >
        <div className="row">
          <div className="col-12">
            <h4
              className="
            text-white text-uppercase"
            >
              Computer Engineering
              <br />
              <span className="sub-title">
                142,765 Computer Engineers follow this
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid position-absolute top-0 mt-3 d-md-none d-block ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <img src={ABack} alt="SVG Image" />
          </div>
          <button
            className="
                join-btn
                text-uppercase
                fw-bold
                rounded-pill
                px-4
                py-2
                "
          >
            Join Group
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
