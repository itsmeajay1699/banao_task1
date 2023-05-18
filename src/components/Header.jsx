import LogoImg from "../assets/whole.png";
import { FaSearch } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import avatar1 from "../assets/avatar1.png";
import "../App.css";
const Header = ({ show, user, setUser }) => {
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
      }}
      className="container-fluid"
    >
      <header className="py-2">
        <div
          className="row
        align-items-center
        "
        >
          <div className="col-auto">
            <div className="logo d-flex flex-column ">
              <img className="img-fluid" src={LogoImg} alt="Logo" />
              <span className=" d-block d-md-none name">{user?.firstName}</span>
            </div>
          </div>
          <div
            className="col
            text-center
            
          "
          >
            <div className=" d-none  d-md-flex justify-content-center  ">
              <div
                className="
              d-flex w-50
                 input-container
              "
              >
                <FaSearch className="search-icon" />
                <input
                  style={{
                    backgroundColor: "#F2F2F2",
                  }}
                  type="text"
                  className="w-100 px-3 py-2 border-0"
                  placeholder="Search for your favorite groups in ATG"
                />
              </div>
            </div>
          </div>
          {!user ? (
            <div
              className="col-5 col-md-2 d-flex
            justify-content-center
            align-items-center 
          "
            >
              <div className="mt-2">
                <h6 className="d-flex flex-column align-items-end">
                  Create account.{" "}
                  <span onClick={show} className="free-text">
                    It's free <BsChevronDown className="dropdown-icon" />
                  </span>{" "}
                </h6>
              </div>
            </div>
          ) : (
            <div
              className="col-auto d-flex
            justify-content-center
            align-items-center 
          "
            >
              <div className="col d-flex align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <img
                    src={avatar1}
                    alt="Profile"
                    className="rec-img me-3 md-me-0 me-md-0"
                  />
                  <span className="d-none d-md-block name">
                    {user?.firstName}
                  </span>
                </div>
                <button onClick={logout} className="border border-none">
                  <span className="btn px-2 btn-secondary">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
