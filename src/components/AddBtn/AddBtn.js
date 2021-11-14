import React from "react";
import "./AddBtn.css";

const AddBtn = ({type, func}) => {
    return (
        <div className="addBtn" onClick={func}>Add {type}</div>
    )
}

export default AddBtn;