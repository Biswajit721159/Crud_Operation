import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Addstudent from "./component/Addstudent";
import UpdateStudent from "./component/UpdateStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addstudent" element={<Addstudent />}></Route>
            <Route path="/updatestudent/:Roll" element={<UpdateStudent />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
