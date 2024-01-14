import "./App.css";
import NavBar from "./NavBar";
import CheckInBooks from "./checkInBooks";
import Home from "./Home";
import Books from "./Books.js";
import { Routes, Route } from "react-router-dom";
import CheckOutBooks from "./checkoutBooks";
function App() {
  return (
    <div className="App">
      <h1 className="title">Capstone Library</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/books" Component={Books} />
        <Route exact path="/checkin" Component={CheckInBooks} />
        <Route exact path="/checkout" Component={CheckOutBooks} />
      </Routes>
    </div>
  );
}

export default App;
