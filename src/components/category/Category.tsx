import "./Category.css";
import AddBtn from "../AddBtn/AddBtn";
import React, { useState } from 'react';
import Modal from "../modal/Modal";
import AddLocCat from "../modal/modalFields/AddLocCat";
import CategoriesList from "./categoriesList/CategoriesList";
import APIClient from "../../classes/ApiClient";
const api = new APIClient("http://10.10.10.53:8080/graphql"); // Need to look up how to best store this so I don't have multiple instantiations.

const Category = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <section className="categoryWrapper">
            {showModal ? <Modal title="Add Category" text="Add a category with the fields below."
            btnText="Add" dismiss={setShowModal.bind(this, false)}><AddLocCat /></Modal> : null}
            <AddBtn type="category" func={setShowModal.bind(this, true)}></AddBtn>
            <CategoriesList />
        </section>
    )
}

export default Category;