import { useState } from "react";
function FavoriteColor() {
  //let color = "Blue";
  const [color, setColor] = useState("Blue");
  return (
    <>
      <h1>My Favorite color is {color}</h1>;
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Change Color
      </button>
      ;
    </>
  );
}

export default FavoriteColor;
