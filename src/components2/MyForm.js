import { useState } from "react";

function MyForm() {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [email, setEmail] = useState("");
  // console.log("current state", name);

  const [inputs, setInputs] = useState({
    phone: "+91",
    email: "@gmail.com",
    about: "Enter something",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Current state", inputs);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((previousState) => {
      return { ...previousState, [name]: value };
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Your Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label>
        Enter Your Age:
        <input type="text" name="age" onChange={handleChange} />
      </label>
      <br />
      <label>
        Enter Your Email:
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
      </label>
      <br />
      <label>
        Enter Your Phone:
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
        />
      </label>
      <br />
      <label>
        Enter Your country:
        <select name="country" onChange={handleChange} value={inputs.country}>
          <option>select</option>
          <option>Australia</option>
          <option>India</option>
          <option>United Status</option>
        </select>
      </label>
      <br />
      <label>
        Enter about yourself:
        <textarea
          name="about"
          value={inputs.about}
          onChange={handleChange}
        ></textarea>
      </label>
      <input type="submit" value="Submit From" />
    </form>
  );
}

export default MyForm;
