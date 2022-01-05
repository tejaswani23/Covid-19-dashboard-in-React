import React,{useState} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import District from "./components/District";
import States from "./components/State";
import AllDistricts from "./components/AllDistricts";
import StateData from "./components/StateData";
import DistrictsData from "./components/DistrictsData";

function App() {
  const [state,setState] = useState("");
  const [district,setDistrict] = useState("");
 

  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home st={state} district={district} setState={setState} setDistrict={setDistrict}/>}/>
        <Route path="/district" element={<District state={state} district={district}/>}/>
        <Route path="/state" element={<States setState={setState}/>}/>
        <Route path="/statedata" element={<StateData state={state}/>} />
        <Route path="/statedistrictsdata" element={<DistrictsData state={state}/>} />
        <Route path="/alldistricts" element={<AllDistricts setState={setState}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
