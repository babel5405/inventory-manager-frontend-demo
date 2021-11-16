import "./Location.css";
import AddBtn from "../AddBtn/AddBtn";
import React, { useState } from 'react';
import Modal from "../modal/Modal";
import AddLocCat from "../modal/modalFields/AddLocCat";
import LocationsList from "./locationsList/LocationsList";

const Location = () => {

    const [showModal, setShowModal] = useState(false);
    
    return (
        <section className="locationWrapper">
            {showModal ? <Modal title="Add Location" text="Add a location with the fields below."
            btnText="Add" dismiss={setShowModal.bind(this, false)}><AddLocCat /></Modal> : null}
            <AddBtn type="location" func={setShowModal.bind(this, true)}></AddBtn>
            <LocationsList />
        </section>
    )
}

export default Location;