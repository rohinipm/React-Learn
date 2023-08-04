import Car from "./Car";
import Apple from "./Apple";

function Garage() {
  const brand = "ford";
  return (
    <>
      <h1>who lives in my garage???</h1>
      <Car brand={brand} />
      <Apple />
    </>
  );
}
export default Garage;
