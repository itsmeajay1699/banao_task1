import Banner from "../components/Banner";
import Header from "../components/Header";
import "../App.css";
import { NavLink } from "react-router-dom";
import DropdownButton from "../components/Dropdown";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";
import Feed from "../components/Feed";
import Post1 from "../assets/post1.png";
import Post2 from "../assets/post2.png";
import Post3 from "../assets/post3.png";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import { SlPencil } from "react-icons/sl";
import { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import Group from "../components/Group";
import { recGroup } from "../utils/contant";
import Login from "./Login1";
import Register from "./Register1";

function Home() {
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [select, setSelect] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const showRegisterModal = () => {
    setShowLogin(false);
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    setUser(user);
  }, []);
  const showLoginModal = () => {
    setShowLogin(true);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container-fluid">
      <Header user={user} show={toggleModal} setUser={setUser} />
      <Banner />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-9 mx-auto">
            <div className="d-flex justify-content-between">
              <div className="d-flex  gap-4 mt-4 d-block d-md-none justify-content-between w-100">
                <h5>Posts(368)</h5>
                <DropdownButton />
              </div>
              <div className="d-flex gap-4 mt-4 d-none d-md-flex">
                <NavLink
                  style={{
                    borderBottom: select == 1 && "2px solid #000000",
                  }}
                  onClick={() => setSelect(1)}
                  className="link"
                  to="/"
                >
                  All Posts(32)
                </NavLink>
                <NavLink
                  style={{
                    borderBottom: select == 2 && "2px solid #000000",
                  }}
                  onClick={() => setSelect(2)}
                  className="link"
                  to="/"
                >
                  Article
                </NavLink>
                <NavLink
                  style={{
                    borderBottom: select == 3 && "2px solid #000000",
                  }}
                  onClick={() => setSelect(3)}
                  className="link"
                  to="/"
                >
                  Event
                </NavLink>
                <NavLink
                  style={{
                    borderBottom: select == 4 && "2px solid #000000",
                  }}
                  onClick={() => setSelect(4)}
                  className="link"
                  to="/"
                >
                  Education
                </NavLink>
                <NavLink
                  style={{
                    borderBottom: select == 5 && "2px solid #000000",
                  }}
                  onClick={() => setSelect(5)}
                  className="link"
                  to="/"
                >
                  Job
                </NavLink>
              </div>
              <div className="d-flex gap-4 mt-4 d-none d-md-flex">
                <DropdownButton text="Write a Post" />
                <div
                  className="d-flex gap-2 align-items-center btn btn-primary
                 "
                >
                  <AiOutlineUsergroupAdd className="mt-2" />
                  <div style={{}} className="">
                    Join Group
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom pb-3 border-dark"></div>
            <div
              className="mt-2 d-flex flex-column flex-md-row
            "
            >
              <div className="right-container col-12 col-md-8 col-lg-9">
                <div className="col-md-10">
                  <Feed
                    title="Article"
                    img={Post1}
                    name="Sarthak Kamra"
                    avatar={avatar}
                    heading1="What if famous brands had regular fonts? Meet RegulaBrands!"
                  />
                  <Feed
                    title="Education"
                    img={Post2}
                    name="Sarah West"
                    avatar={avatar2}
                    heading1="Tax Benefits for Investment under National Pension Scheme launched by Government"
                  />
                  <Feed
                    show="true"
                    title="Meetup"
                    img={Post3}
                    name="Ronal Jones"
                    avatar={avatar3}
                    btnText="Visit Website"
                    heading1="Finance & Investment Elite Social Mixer @Lujiazui"
                    color="#E56135"
                  />
                  <Feed
                    title="Job"
                    show="true"
                    avatar={avatar4}
                    name="Joseph Gray"
                    btnText="Apply on Timesjobs"
                    heading1="Software Developer"
                    color="#02B875"
                  />
                </div>
              </div>
              <div className="left-container col-12 col-md-5 col-lg-3 pb-4 d-none d-md-block ">
                {!user ? (
                  <div className="col d-flex justify-content-between ">
                    <div className="d-flex align-items-center ">
                      <ImLocation2 className="d-inline-block" />
                      <div>Nodia,India</div>
                    </div>
                    <HiPencilAlt className="d-inline-block" />
                  </div>
                ) : (
                  <div className="col">
                    <div className="d-flex align-items-center">
                      <div className="col-auto">
                        <CiLocationArrow1 className="d-inline-block" />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control border border-none"
                          placeholder="Enter location"
                        />
                      </div>
                      <div className="col-auto">
                        <IoCloseSharp className="d-inline-block" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="col border border-dark mt-2"></div>
                <div className="d-flex mt-4">
                  <div className="col d-flex">
                    <BiErrorCircle className="d-inline-block col-auto " />
                    <div className="col font-weight-bold font-size-14">
                      Your location will help us serve better and extend a
                      personalised experience.
                    </div>
                  </div>
                </div>
                {user && (
                  <>
                    <div className="col mt-5 d-flex align-items-center">
                      <AiOutlineLike className="d-inline-block col-auto" />
                      <div className="col text-uppercase font-weight-bold font-size-14">
                        Recommended Groups
                      </div>
                    </div>
                    <div className="col mt-3">
                      {recGroup.map((item) => (
                        <Group
                          key={item.id}
                          avatar={item.avatar}
                          name={item.name}
                          text={item.text}
                          color={item.color}
                          bgcolor={item.bgcolor}
                        />
                      ))}
                    </div>
                    <div className="col text-end text-primary mt-5">
                      See More...
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col position-fixed bottom-0 end-0 mb-5 me-5 d-block d-md-none">
        <SlPencil
          style={{
            backgroundColor: "#F06594",
          }}
          className="d-inline-block pencil-btn"
        />
      </div>
      {showModal ? (
        showLogin ? (
          <Login
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            show={toggleModal}
            showReg={showRegisterModal}
            handleShowPassword={handleShowPassword}
          />
        ) : (
          <Register
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
            setShowPassword={setShowPassword}
            show={toggleModal}
            showLg={showLoginModal}
          />
        )
      ) : null}
    </div>
  );
}

export default Home;
