import { useState } from "react";
import { plantList } from "../datas/plantlist";
import "../styles/ShoppingList.css";
import Categories from "./Categories";
import PlantItem from "./PlantItem";

const ShoppingList = ({ cart, updateCart }) => {
  const [chosenCategory, setChosenCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(plantName, price) {
    const currentPlantAdded = cart.find(
      (plant) => plant.plantName === plantName
    );
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.plantName !== plantName
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { plantName, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { plantName, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        chosenCategory={chosenCategory}
        setChosenCategory={setChosenCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(
          ({ id, cover, plantName, water, light, price, category }) =>
            !chosenCategory || chosenCategory === category ? (
              <div key={id}>
                <PlantItem
                  plantName={plantName}
                  cover={cover}
                  id={id}
                  light={light}
                  water={water}
                />
                <button onClick={() => addToCart(plantName, price)}>
                  Ajouter
                </button>
              </div>
            ) : null
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;
