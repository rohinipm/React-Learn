import Car from "./Car";
import Apple from "./Apple";

function Garage() {
  const brand = "ford";
  //const color = "red";
  return (
    <>
      <h1>who lives in my garage???</h1>
      <Car brand={brand} color={"black"} />
      <Apple />
    </>
  );
}
export default Garage;
