
import "./LocationsList.css"
import { FaTrashAlt } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import APIClient from "../../../classes/ApiClient";
const api = new APIClient("http://10.10.10.53:8080/graphql"); // Need to look up how to best store this so I don't have multiple instantiations.


const LocationsList = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        api.GetAllLocations().then(async res => {
            let body = await res.json();
            setLocations(body.data.GetAllLocations);
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
                        <th>Controls</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        locations.map((location : {id: number, name: string, description: string}) => (
                            <tr key={location.id}>
                                <td>{location.id}</td>
                                <td>{location.name}</td>
                                <td>{location.description}</td>
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

export default LocationsList