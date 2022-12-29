import React from "react";
import "./WePlant.css";
import Album from "../Album/Album";

function WePlant() {
  return (
    <div className="home">
      <div className="submenu">
        <a href="#">Home</a>
        <span className="link__divider"> / </span>
        <a href="#">WHERE WE PLANT</a>
      </div>
      <div className="heading">
        <h1>WHERE WE PLANT</h1>
      </div>
      <div className="content">
        <p>
          One Tree Planted is a non-profit environmental charity on a{" "}
          <strong>mission of global reforestation.</strong> We plant trees in
          North America, Latin America, Africa, Asia, Europe and the Pacific.
        </p>
        <p>
          Select one of our regions to{" "}
          <strong>learn more about our tree planting projects</strong> and help
          to support reforestation.
        </p>
      </div>
      <div className="Album__row">
        <Album
          id="1"
          image="https://cdn.shopify.com/s/files/1/0326/7189/products/PlantingRegionImages_Appalachia_1200x.jpg?v=1605737614"
        />
        <Album
          id="2"
          image="https://cdn.shopify.com/s/files/1/0326/7189/products/Brazil-tree-planting_1200x.jpg?v=1605820348"
        />
        <Album
          id="3"
          image="https://cdn.shopify.com/s/files/1/0326/7189/products/cote-divoire_1200x.jpg?v=1637014858"
        />
      </div>
      <div className="Album__row">
        <Album
          id="4"
          image="https://cdn.shopify.com/s/files/1/0326/7189/products/PlantingRegionImages_Indonesia_1200x.jpg?v=1605738221"
        />
        <Album
          id="4"
          image="https://cdn.shopify.com/s/files/1/0326/7189/products/portugal_1200x.jpg?v=1643407753"
        />
        <Album
          id="4"
          image="https://cdn.shopify.com/s/files/1/0326/7189/products/biodiversity_1200x.jpg?v=1643301638"
        />
      </div>
    </div>
  );
}

export default WePlant;
