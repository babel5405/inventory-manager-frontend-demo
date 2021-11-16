import "./Items.css";
import AddBtn from "../AddBtn/AddBtn";
import Modal from "../modal/Modal";
import AddItem from "../modal/modalFields/AddItem";
import React, { useState } from 'react';
import ItemsList from "./itemsList/ItemsList"

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