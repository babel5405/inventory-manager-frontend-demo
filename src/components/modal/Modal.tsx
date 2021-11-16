import React from "react";
import "./Modal.css";
import APIClient from "../../classes/ApiClient";
const api = new APIClient("http://10.10.10.53:8080/graphql"); // Need to look up how to best store this so I don't have multiple instantiations.


const Category = (props : any) => {
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