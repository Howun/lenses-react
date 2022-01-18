import { useState, useEffect } from "react";
import "./Dashboard.scss";
import LensList from "../../components/LensList/LensList";
import Form from "../../components/Form/Form";
import Home from "../../components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const [lenses, setLenses] = useState([]);

  const getLenses = () => {
    fetch("http://localhost:8080/lenses")
      .then((res) => res.json())
      .then((json) => setLenses(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLenses();
  }, [lenses]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenses" element={<LensList lenses={lenses} />} />
        <Route path="/new-lens" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
