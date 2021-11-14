import React from "react";
import "./Modal.css";

const Category = (props) => {
    return (
        <section className="ModalShadow">
            <div className="Modal">
                <div className="ModalTitle">
                    <h2>{props.title}</h2>
                </div>
                <div className="ModalText">
                    <p>{props.text}</p>
                </div>
                {props.children}
                <button onClick={props.dismiss}>{props.btnText}</button>
            </div>
        </section>
    )
}

export default Category;