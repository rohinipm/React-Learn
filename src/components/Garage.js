import Car from "./Car";
import Apple from "./Apple";
import Gun from "./Gun";

function Garage() {
  //const brand = "ford";
  //const color = "red";

  const isDoorOpened = false;
  const carInfo = { brand: "Ferrai", color: "Red" };
  //const carInfo = {};

  const appleInfo = { type: "Fuji", color: "Red" };
  const showCarInfo =
    carInfo.brand !== undefined && carInfo.color !== undefined;
  const carList = [
    { brand: "BMW", color: "Blue" },
    { brand: "Aadi", color: "Black" },
    { brand: "Tesla", color: "white" },
    { brand: "RR", color: "Orange" },
  ];

  const numberList = [1, 2, 2, 3, 4];

  return (
    <>
      <h1>who lives in my garage???</h1>
      {/*<Car brand={brand} color={"black"} />*/}

      {showCarInfo && <Car carInfo={carInfo} />}

      <Apple appleInfo={appleInfo} />

      <Gun />
      {isDoorOpened ? (
        <h2>Garage door is opened</h2>
      ) : (
        <h2>Garage door is closed</h2>
      )}

      <ul>
        {carList.map((carInfo) => (
          <li key={carInfo.brand}>
            <Car carInfo={carInfo} />
          </li>
        ))}
      </ul>
      <ul>
        {numberList.map((e, index) => (
          <p key={index}>{e}</p>
        ))}
      </ul>
    </>
  );
}
export default Garage;
