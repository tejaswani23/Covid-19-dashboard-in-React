import React,{useState} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import District from "./components/District";

function App() {
  const [state,setState] = useState("");
  const [district,setDistrict] = useState("");
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home st={state} district={district} setState={setState} setDistrict={setDistrict}/>}/>
        <Route path="/district" element={<District state={state} district={district}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
