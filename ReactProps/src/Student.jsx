import React from "react";
import PropTypes from "prop-types";

function Student(props) {
    console.log(props);
    return(
        <div className="student">
            <p>Name: {props.name || "Guest"}</p>
            <p>Age: {props.age || 0}</p>
            <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};


export default Student;