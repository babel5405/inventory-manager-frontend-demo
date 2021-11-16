import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Category from "./components/category/Category";
import Location from "./components/location/Location";
import Items from "./components/items/Items";

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
          <Route path="/" element={<Items />}></Route>
          <Route path="/locations" element={<Location />}></Route>
          <Route path="/categories" element={<Category />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
