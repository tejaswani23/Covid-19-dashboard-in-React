import React,{useEffect,useState} from 'react';
import axios from "axios";
import "../styles/District.css";
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import bck from "../images/bckgrnd.png";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const District = ({state,district}) => {
    
    const [total,setTotal] = useState({});

    useEffect(()=>{
       const fetchData = async()=>{
              const {data:{[state]:val}} = await axios.get("https://data.covid19india.org/v4/min/data.min.json");
              const {[district]:g}=val.districts;
              console.log(g);
              setTotal(g.total);
       }

       if(state && district){ fetchData();}
    },[])

    return  (
        <>
         <Container maxWidth="lg">
        <div className="header">
            <div className="headerTxt"><span>State </span>: {state}</div>
        </div>
        <div className="subHeader">
            <div className="subHead">District : {district}</div>
        </div>
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
        <div className="Info">
            <div className="a1">
                <div className="val">Confirmed :</div>
                <div className="val1"><CountUp start={0} end={total.confirmed}  duration={4}/></div>
            </div>
            <div className="a2">
                <div className="val">Deceased :</div>
                <div className="val2"><CountUp start={0} end={total.deceased}  duration={4}/></div>
            </div>
            <div className="a3">
                <div className="val">Tested :</div>
                <div className="val2"><CountUp start={0} end={total.tested}  duration={4}/></div>
            </div>
            <div className="a4">
                <div className="val">Vaccinated1 :</div>
                <div className="val3"><CountUp start={0} end={total.vaccinated1}  duration={4}/></div>
            </div>
            <div className="a4">
                <div className="val">Vaccinated2 :</div>
                <div className="val3"><CountUp start={0} end={total.vaccinated2}  duration={4}/></div>
            </div>
        </div>
        </Container>
        </>
    ) 
}

export default District
