import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);      //An indicator to check if what the user entered id valid or not

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {   //to reset the colour style back to normal if something is entered in the i/p box
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {//trim removes excess white space,If lenngth=0,wkt i/p is empty

      setIsValid(false);     //If we make it into this If block means its invalid and therefore we set it to false

      return; // If we return here the line 2 lines below will not get exec. bcz func exec. stops when u return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">              
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>  {/* the inline style prop wants an object as a value, So if the i/p is !isValid=> its invalid we set it to red else black  */}
        <input                          
          style={{
            borderColor: !isValid ? "red" : "#ccc",                 // {/* borderColor named according to js not css */} 
            background: !isValid ? "salmon" : "transparent",        // {/* inLine styles have the highest priority */}
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
