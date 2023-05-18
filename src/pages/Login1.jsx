import { MdClose } from "react-icons/md";
import { useState } from "react";
import "../App.css";
import GoogleImg from "../assets/search.png";
import FacebookLogo from "../assets/fbLogo.png";
import MainImg from "../assets/mainImg.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const Login = ({ show, showReg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    axios
      .post("https://banao-backend1.onrender.com/api/v1/auth/login", {
        email,
        password,
      })
      .then((res) => {
        toast.success("Logged In Successfully");
        const user = JSON.stringify(res.data.user);
        localStorage.setItem("user", user);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <div className="modal-overlay">
      <Toaster />
      <div className="modal d-flex align-items-center">
        <div className="modal-content text-center">
          <div className="modal-body position-relative px-5">
            <div className="col">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="sign-in">Sign In</div>
                <div className="d-none d-md-block">
                  {/*eslint-disable-next-line react/no-unescaped-entities */}
                  Don't have an account?{" "}
                  <span onClick={showReg} className="bot text-primary">
                    Sign Up
                  </span>
                </div>
                <div className="d-md-none d-block">
                  <MdClose onClick={show} />
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="col-12 col-md-6">
                  <div className="">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control col-md-12 py-3"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control col-mid-12 py-3"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          style={{
                            backgroundColor: "#4C6FF5",
                          }}
                          onClick={handleSubmit}
                          className="button-create col-auto col-md-12"
                        >
                          Sign In
                        </button>
                        <div
                          onClick={showReg}
                          className="d-md-none bot cursor-pointer"
                        >
                          or, Sign Up
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="">
                      <div className="col-md-12 d-flex justify-content-center align-items-center rounded  border border-1 border-dark">
                        <img
                          className="google-logo"
                          src={FacebookLogo}
                          alt="Logo"
                        />
                        <p className="mt-3">Sign in wih Facebook</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="">
                      <div className="col-md-12 d-flex justify-content-center align-items-center rounded  border border-1 border-dark">
                        <img
                          className="google-logo"
                          src={GoogleImg}
                          alt="Logo"
                        />
                        <p className="mt-3">Continue with Google</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center col fgt">
                    Forget Password?
                  </div>
                </div>
                <div className="col-6 d-none d-md-flex">
                  <img className="main-img" src={MainImg} alt="Logo" />
                </div>
              </div>
            </div>
            <div className="mdclose position-absoulte d-none d-md-block">
              <MdClose onClick={show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
