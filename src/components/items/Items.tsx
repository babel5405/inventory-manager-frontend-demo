import "./Items.css";
import AddBtn from "../AddBtn/AddBtn";
import Modal from "../modal/Modal";
import AddItem from "../modal/modalFields/AddItem";
import React, { useState } from 'react';
import ItemsList from "./itemsList/ItemsList"
import APIClient from "../../classes/ApiClient";
const api = new APIClient("http://10.10.10.53:8080/graphql"); // Need to look up how to best store this so I don't have multiple instantiations.

const Items = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <section className="itemsWrapper">
            {showModal ? <Modal title="Add Item" text="Add an item with the fields below."
            btnText="Add" dismiss={setShowModal.bind(this, false)}><AddItem /></Modal> : null}
            <AddBtn type="item" func={setShowModal.bind(this, true)}></AddBtn>
            <ItemsList />
            
        </section>
    )
}

export default Items;