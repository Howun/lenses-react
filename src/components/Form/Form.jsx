import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [lens, setLens] = useState({
    make: "",
    focalLength: "",
    fStop: "",
    image: "",
    id: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/lens", {
      method: "POST",
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
    <div className="log-form">
      <h2>Add A New Lens</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Make"
          onInput={(e) => setLens({ ...lens, make: e.target.value })}
        />
        <input
          type="text"
          placeholder="Focal length"
          onInput={(e) => setLens({ ...lens, focalLength: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apeture"
          onInput={(e) => setLens({ ...lens, fStop: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          onInput={(e) => setLens({ ...lens, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image"
          onInput={(e) => setLens({ ...lens, image: e.target.value })}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
