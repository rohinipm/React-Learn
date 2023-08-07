import Car from "./Car";
import Apple from "./Apple";

function Garage() {
  //const brand = "ford";
  //const color = "red";

  const carInfo = { brand: "Ferrai", color: "Red" };
  return (
    <>
      <h1>who lives in my garage???</h1>
      {/*<Car brand={brand} color={"black"} />*/}
      <Car carInfo={carInfo} />
      <Apple />
    </>
  );
}
export default Garage;
