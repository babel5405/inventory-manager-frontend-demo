import React from "react";
import "./AddBtn.css";

const AddBtn = ({type, func}: {type: string, func: any}) => {
    return (
        <div className="addBtn" onClick={func}>Add {type}</div>
    )
}

export default AddBtn;