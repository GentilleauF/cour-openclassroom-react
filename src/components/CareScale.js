import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

const CareScale = ({ scaleValue, careType }) => {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? (<img src={Sun} alt="" />) : (<img src={Water} alt="" />);


  function handleClick () {
    if (scaleValue === 1) {
        alert(`Cette plante requiert peu ${careType==='light'?"de lumiére ":"d'eau"}`);
    } else if (scaleValue ===2) {
        alert(`Cette plante requiert moyennement ${careType==='light'?"de lumiére ":"d'eau"}`);
    } else {
        alert (`cette plante requiert beaucoup ${careType==='light'?"de lumiére ":"d'eau"} `)
    }
  }

  return (
    <div onClick={handleClick}>
      {range.map((elem) =>
        scaleValue >= elem ? (
          <span key={elem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
