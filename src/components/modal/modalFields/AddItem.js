import React from "react";

const AddItem = () => {
    return (
        <section className="ModalFields">
            <label>Name</label><input type="text"></input>
            <label>Description</label><input type="text"></input>
            <label>Location</label><input type="text"></input>
            <label>Category</label><input type="text"></input>
        </section>
    )
}

export default AddItem;