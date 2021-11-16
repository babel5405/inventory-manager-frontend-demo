
import "./ItemsList.css"
import { FaTrashAlt } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import APIClient from "../../../classes/ApiClient";
const api = new APIClient("http://10.10.10.53:8080/graphql"); // Need to look up how to best store this so I don't have multiple instantiations.

const ItemsList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.GetAllItems().then(async res => {
            let body = await res.json();
            setItems(body.data.GetAllItems);
        }).catch(e => {
            console.log(e); // Should do something better with this.
        });
    }, []);

    return (
        <div className="itemsList">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Controls</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // locationId and categoryId really should be location and category names, will have to re-build that section of the API to support it.
                        items.map((items : {id: number, name: string, description: string, locationId: string, categoryId: string}) => (
                            <tr key={items.id}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.description}</td>
                                <td>{items.locationId}</td>
                                <td>{items.categoryId}</td>
                                <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

function removeItem() {
    alert("Not Implemented");
}

export default ItemsList