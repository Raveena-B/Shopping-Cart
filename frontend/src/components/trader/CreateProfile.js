import React, { useState } from "react";
import axios from "axios";

const CreateProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const profileHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/customer", {
        name,
        age,
        gender,
      });
      alert("Successfully added the profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <br />
      <br />
      <div>
        <form onSubmit={profileHandler}>
          <h1>Create Your Profile Here .. </h1>
          <center>
            <label>Enter your name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />
            <label>Enter your Age: </label>
            <input
              type="text"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <br />
            <br />
            <label>Enter your gender: </label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              style={{ background: "#96BBF3  " }}
            />
          </center>
        </form>
      </div>
    </center>
  );
};

export default CreateProfile;
