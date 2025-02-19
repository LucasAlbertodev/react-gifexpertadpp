import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__fadeIn">{category}</h3>
      {loading && <p className="animate__flash">Loading...</p>}
      <div className="card-grid">
        <li>
          {
          images.map(img => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </li>
      </div>
    </>
  );
};
