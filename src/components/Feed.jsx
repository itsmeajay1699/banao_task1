import { GrArticle } from "react-icons/gr";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsShareFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import "../App.css";
const Feed = ({
  show = false,
  avatar,
  name,
  icon,
  subName,
  img,
  title,
  btnText,
  heading1,
  color,
}) => {
  return (
    <div className="col-12 border-none mb-2">
      {img && <img src={img} alt="" />}
      <div className="col-12 mt-2  mx-auto">
        <div className="d-flex align-items-center">
          <GrArticle className="d-inline-block" />
          <div className="d-inline-block ms-2">{title}</div>
        </div>
        <div className="d-flex mt-2">
          <div className="col title">{heading1}</div>
          <div className="col-auto">
            <FiMoreHorizontal />
          </div>
        </div>
        {!show && (
          <div className="bio-text">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to reinvent myself every 5 years.
          </div>
        )}
        {show && (
          <>
            <div className="col d-flex mt-2 align-items-center justify-content-around ">
              <div className="col">
                <AiOutlineCalendar className="d-inline-block me-2" />
                <div className="d-inline-block ms-2">Fri,12 Oct,2018</div>
              </div>
              <div className="col">
                <GiPositionMarker className="d-inline-block me-2" />
                <div className="d-inline-block ms-2">Ahmedabad, India</div>
              </div>
            </div>

            <div className="col mt-3">
              <button
                className=" col-12 border border-dark px-4 py-1 btn-web shadow bg-white rounded-3 
              "
              >
                <span style={{ color: color }} className="">
                  {btnText}
                </span>
              </button>
            </div>
          </>
        )}
        <div className="col mt-2 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col">
              <div className="d-flex gap-2 align-items-center">
                <img src={avatar} alt="Photo 1" className="mr-2 avatar" />
                <div className="col">
                  <span className="font-weight-bold">{name}</span>
                  <span className="d-block d-md-none text-muted">
                    1.4k views
                  </span>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex align-items-center gap-4">
                <div
                  className="d-flex align-items-center 
                 d-none d-md-flex
                "
                >
                  <FaRegEye className="d-inline-block" />
                  <div className="d-inline-block ms-2 ">1.4k views</div>
                </div>
                <div className="col">
                  <BsShareFill className="d-inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
