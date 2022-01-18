import "./Lens.scss";
import { useState } from "react";

const Lens = (props) => {
  const { make, focalLength, fStop, image, id, price } = props.lens;

    const [lens, setLens] = useState({
      make: "",
      focalLength: "",
      fStop: "",
      image: "",
      id: "",
    });

    const deleteLens = (e) => {
      e.preventDefault();
      fetch("http://localhost:8080/lens", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lens),
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
      e.target.reset();
    };

  return (
    <div className="lens">
      <button>{deleteLens}</button>
      <h3>{make}</h3>
      <p>Focal Length: {focalLength}mm</p>
      <p>Aperture: f/{fStop}</p>
      <p>Price: £{price}</p>
      <img src={image} alt="lens"/>
      <p>Lens number: {id}</p>
    </div>
  );
};

export default Lens;
