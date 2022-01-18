import "./LensList.scss";
import Lens from "../Lens/Lens";

const LensList = (props) => {
  return (
    <>
      <h2 className="heading">All The Lenses In The World...</h2>
      <div className="container">
        {props.lenses &&
          props.lenses.map((lens) => (
            <Lens key={lens.id} lens={lens} />
          ))}
      </div>
    </>
  );
};

export default LensList;
