import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true); //2.An indicator to check if what the user entered is valid or not

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      //4.to reset the colour style back to normal if something is entered in the i/p box
      setIsValid(true); //4.
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      //1.trim removes excess white space,If length=0,wkt i/p box is empty

      setIsValid(false); //2.If we make it into this If block means its invalid and therefore we set it to false

      return; //1.If we return here the line 2 lines below will not get exec. bcz func exec. stops when u return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        {" "}
        {/*Setting the css class dynamically by adding the invalid class*/}
        <label>Course Goal</label>{" "}
        {/* 3.the inline style prop wants an object as a value, So if the i/p is !isValid => if its invalid, we set it to red else black  */}
        <input
          // style={{
          //   borderColor: !isValid ? "red" : "#ccc", // {/* 3.borderColor named according to js not css */}
          //   background: !isValid ? "salmon" : "transparent", // {/* 3.inLine styles have the highest priority */}
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
        <br />
        <Button
          // style={{ backgroundColor: !isValid ? "salmon" : "#ccc" }}
          type="submit"
        >
          Add Goal
        </Button>
      </div>
    </form>
  );
};

export default CourseInput;
