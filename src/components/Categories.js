import { useState } from "react";
import { plantList } from "../datas/plantlist";

const Categories = ({ chosenCategory, setChosenCategory }) => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <select
        onChange={(e) => {
          setChosenCategory(e.target.value);
        }}
      >
        <option value=""></option>;
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
