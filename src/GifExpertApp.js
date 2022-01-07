import React, { useState } from "react";
import PropTypes from 'prop-types';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ title }) => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  return (
    <>
      <h2>{title}</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(categorie => (
            <GifGrid key={categorie} categoria={categorie}/>
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {
    title: PropTypes.string.isRequired
}