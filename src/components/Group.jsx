import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// eslint-disable-next-line react/prop-types
const Group = ({ name, avatar, text, color, bgcolor }) => {
  return (
    <div className="col mb-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="col">
          <div className="d-flex gap-2 align-items-center">
            <img src={avatar} alt="Profile" className="rec-img" />
            <span>{name}</span>
          </div>
        </div>
        <div className="col-auto">
          <button
            style={{
              backgroundColor: bgcolor ? bgcolor : "#fff",
              color: color ? color : "#000",
            }}
            className="btn btn-secondary rounded-pill px-3 py-1"
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Group;
