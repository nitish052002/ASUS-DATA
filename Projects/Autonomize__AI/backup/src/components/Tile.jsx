import "./tile.css";
export default function Tile({ label, bio, logo }) {
  return (
    <div className="tile">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <div className="repo_title">
          <span>{label}</span>
          <i className="bx bxs-badge-check check"></i>
        </div>
        <div className="desc">{!bio ? "Bio unavaliable " : String(bio).slice(0,100)}</div>
      </div>
    </div>
  );
}
