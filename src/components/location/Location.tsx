import "./Location.css";
import AddBtn from "../AddBtn/AddBtn";
import React, { useEffect, useState } from 'react';
import Modal from "../modal/Modal";
import AddLocCat from "../modal/modalFields/AddLocCat";
import LocationsList from "./locationsList/LocationsList";
import APIClient from "../../classes/ApiClient";
const api = new APIClient("http://10.10.10.53:8080/graphql"); // Need to look up how to best store this so I don't have multiple instantiations.

const Location = () => {

    const [showModal, setShowModal] = useState(false);

    const [locations, setLocations] = useState({});

    useEffect(() => {
        api.GetAllLocations().then(async res => {
            setLocations(await res.json())
        }).catch(e => {
            console.log(e); // Should do something better with this.
        });
    });

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