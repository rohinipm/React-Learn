import { useState } from "react";

function Scooter() {
  //   const [color, setColor] = useState("Red");
  //   const [brand, setbrand] = useState("Honda");
  //   const [model, setmodel] = useState("Activa 6G");
  //   const [year, setyear] = useState("2020");

  const [scooter, setScooter] = useState({
    color: "Red",
    brand: "Honda",
    model: "Activa 6G",
    year: "2020",
  });

  return (
    <>
      <h1>My Scooter</h1>
      <p>Color: {scooter.color}</p>
      <p>Brand: {scooter.brand}</p>
      <p>Model: {scooter.model}</p>
      <p>Year: {scooter.year}</p>
    </>
  );
}

export default Scooter;
