import React,{useState,useEffect} from 'react';
import axios from "axios";
import "../styles/District.css";
import Container from '@material-ui/core/Container';
import { motion } from 'framer-motion';
import bck from "../images/bckgrnd.png";
import OneDistrictData from './OneDistrictData';

const DistrictsData = ({state}) => {
    
    const [districts,setDis] = useState({});

    useEffect(()=>{
        const fetchStateData= async()=>{
          const {data:{[state]:val}} = await axios.get("https://data.covid19india.org/v4/min/data.min.json");
          console.log(val);
          setDis(val.districts);
         
        }
        fetchStateData();
      },[])

    return (
        <>
         <Container maxWidth="lg">
        <div className="header">
            <div className="headerTxt"><span>State </span>: {state}</div>
        </div>
        <div className="subHeader">
            <div className="subHead">All Districts Information</div>
        </div>
        <div className="diss">
        {
        Object.keys(districts).map((d,key)=>{
          return(
           <div key={key}>{d} 
             <OneDistrictData state={state} district={d}/>
           </div>
          );
        })
        }
        </div>
        </Container>
        </>
    )
}

export default DistrictsData
