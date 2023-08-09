import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  console.log("current state", name);
  return (
    <form>
      <label>
        Enter Your Name:{" "}
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
    </form>
  );
}

export default MyForm;
