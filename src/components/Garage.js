import Car from "./Car";
import Apple from "./Apple";

function Garage() {
  //const brand = "ford";
  //const color = "red";

  const carInfo = { brand: "Ferrai", color: "Red" };
  const appleInfo = { type: "Fuji", color: "Red" };

  return (
    <>
      <h1>who lives in my garage???</h1>
      {/*<Car brand={brand} color={"black"} />*/}
      <Car carInfo={carInfo} />
      <Apple appleInfo={appleInfo} />
    </>
  );
}
export default Garage;
