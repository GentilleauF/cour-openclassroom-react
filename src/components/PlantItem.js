import '../styles/PlantItem.css'
import CareScale from './CareScale';


const PlantItem = ({plantName, cover, id, light, water}) => {
  return (
    <div >
      <li key={id} className="lmj-plant-item">
        <img className='lmj-plant-item-cover' src={cover}alt= {plantName}/>
       <h3>{plantName}</h3>
       <CareScale scaleValue={light} careType={'light'} />
       <CareScale scaleValue={water} careType={'water'} />

        
      </li>
    </div>
  );
};

export default PlantItem;
