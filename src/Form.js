import React from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/chart"); // Navigate to the Chart.js component
  };
  return (
    <>
      <div id="form-div">
        <form id="form-container" onSubmit={handleFormSubmit}>
          <label for="time">Time</label>
          <input id="time" type="time" />
          <br></br>
          <label for="date">Date</label>
          <input id="date" type="date" />
          <br></br>
          <label for="name">Employee Name</label>
          <input id="name" type="text" />
          <br></br>
          <label for="energyMode">Energy Mode</label>
          <select id="energyMode" name="mode">
            <option value="saving-on">Energy Saving Mode ON</option>
            <option value="saving-off">Energy Saving Mode OFF</option>
          </select>
          <br></br>
          <button id="submit">See Chart</button>
        </form>
      </div>
    </>
  );
};

export default Form;
