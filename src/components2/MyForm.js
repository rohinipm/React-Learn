import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  // console.log("current state", name);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Current state", name, age, email);
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
      <br />
      <label>
        Enter Your Age:{" "}
        <input
          type="text"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Enter Your Email:{" "}
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <br />
      <input type="submit" value="Submit From" />;
    </form>
  );
}

export default MyForm;
