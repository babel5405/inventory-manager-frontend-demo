
import "./ItemsList.css"
import { FaTrashAlt } from 'react-icons/fa';
const ItemsList = () => {


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
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td>Lorem Ipsum</td>
                        <td>Ipsum Lorem</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td>Lorem Ipsum</td>
                        <td>Ipsum Lorem</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} title="Delete"/></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td>Lorem Ipsum</td>
                        <td>Ipsum Lorem</td>
                        <td><FaTrashAlt className="control" onClick={removeItem} /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lorem</td>
                        <td>Lorem Ipsum Dolor</td>
                        <td>Lorem Ipsum</td>
                        <td>Ipsum Lorem</td>
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

export default ItemsList