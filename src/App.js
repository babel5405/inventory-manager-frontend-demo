import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Category from "./components/category/Category.js";
import Location from "./components/location/Location.js";
import Items from "./components/items/Items.js";
import APIClient from './classes/ApiClient'

let client = new APIClient("http://10.10.10.53:8080/graphql");

client.AddCategory("Js Test", "Js Test Desc").then(async res => {
  console.log(await res.json());
});

function App() {
    return (
    <div className="App">
      <header>
        <nav>
          <div className="nav-item">
            <Link to="/">Items</Link>
          </div>
          <div className="nav-item">
            <Link to="/categories">Categories</Link>
          </div>
          <div className="nav-item">
            <Link to="/locations">Locations</Link>
          </div>
        </nav>
      </header>

      <main>
        
        <Routes>
          <Route exact path="/" element={<Items />}></Route>
          <Route path="/locations" element={<Location />}></Route>
          <Route path="/categories" element={<Category />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
