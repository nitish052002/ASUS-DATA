import React from "react";
import "./tile.css";

interface TileProps {
  label: string;
  bio?: string;
  logo: string;
}

const Tile: React.FC<TileProps> = ({ label, bio, logo }) => {
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
        <div className="desc">{!bio ? "Bio unavailable" : bio.slice(0, 100)}</div>
      </div>
    </div>
  );
};

export default Tile;
