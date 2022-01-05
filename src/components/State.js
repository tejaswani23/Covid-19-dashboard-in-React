import React,{useState} from 'react';
import {motion} from "framer-motion";
import bck from "../images/bckgrnd.png";
import Container from '@material-ui/core/Container';
// import StateData from './StateData';
import "../styles/District.css";
import { NavLink } from 'react-router-dom';


const State = ({setState}) => {
    const [bool,setBool] = useState(false);

    const Button1= () => {
        return (bool) ? 
        (
            <div >
              <NavLink to="/statedata"> <button variant="contained" color="primary" style={{margin:"25px"}}>View </button> </NavLink>
            </div>
        ) : (
            <div>
               <NavLink to="/"> <button variant="contained" color="primary" style={{margin:"25px"}}>View </button> </NavLink>
            </div>
        )
    }
    return (
        <>
         <Container maxWidth="lg">
         <div className="flex2">
        <div className="bg">
            <motion.img src={bck} initial={{scale:0.5}} animate={{scale:1,transition:{yoyo:Infinity,duration:3}}}  alt=""/>
        </div>
        <div className="bg1">
            <motion.img src={bck} initial={{scale:0.5}} animate={{scale:1,transition:{yoyo:Infinity,duration:3,delay:2.5}}}  alt=""/>
        </div>
        </div>
        <div className="co">
            STAY SAFE FROM COVID-19 Virus
        </div>
        <div className="head">
            <div>Enter the State/UT Abb.</div>
            <div><input type="text" onChange={(e)=>{setState(e.target.value);setBool(true)}}/></div>
            <div><Button1/></div>
        </div>
        </Container>
        </>
    )
}

export default State
