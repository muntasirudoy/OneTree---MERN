import React from "react";
import "./Album.css";

function Album({ id, image }) {
  return (
    <div className="album">
      <img src={image} alt="" />
      <div className="link_btn">
        <button className="view__btn">VIEW ALL</button>
      </div>
    </div>
  );
}

export default Album;
