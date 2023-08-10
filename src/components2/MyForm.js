import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  console.log("current state", name);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Current state", name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Your Name:{" "}
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <input type="submit" value="Submit From" />;
    </form>
  );
}

export default MyForm;
