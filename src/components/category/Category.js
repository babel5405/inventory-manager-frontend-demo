import "./Category.css";
import AddBtn from "../AddBtn/AddBtn.js";
import React, { useState } from 'react';
import Modal from "../modal/Modal.js";
import AddLocCat from "../modal/modalFields/AddLocCat";
import CategoriesList from "./categoriesList/CategoriesList";

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