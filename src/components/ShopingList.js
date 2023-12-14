import { plantList } from "../datas/plantlist";
import '../styles/ShoppingList.css'

const ShoppingList = () => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <select>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
          <li key={plant.id} className='lmj-plant-item'>
            {plant.name}
            {plant.isBestSale && <span>🔥</span>}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
