import { useState } from "react";

function Scooter() {
  const [color, setColor] = useState("Red");
  const [brand, setbrand] = useState("Honda");
  const [model, setmodel] = useState("Activa 6G");
  const [year, setyear] = useState("2020");

  return (
    <>
      <h1>My Scooter</h1>
      <p>Color: {color}</p>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
    </>
  );
}

export default Scooter;
