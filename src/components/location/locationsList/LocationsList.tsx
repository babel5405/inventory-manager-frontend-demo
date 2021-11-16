
import "./LocationsList.css"
import { FaTrashAlt } from 'react-icons/fa';
const LocationsList = () => {


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
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function removeItem() {
    alert("Not Implemented");
}

export default LocationsList