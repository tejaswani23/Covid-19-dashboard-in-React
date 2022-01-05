import React,{useEffect,useState} from 'react';
import axios from "axios";
import { Container } from '@material-ui/core';
import CountUp from 'react-countup';
import "../styles/StateSts.css";

const OneDistrictData = ({state,district}) => {
    const [total,setTotal] = useState({});

    useEffect(()=>{

        const fetchData = async()=>{
               const {data:{[state]:val}} = await axios.get("https://data.covid19india.org/v4/min/data.min.json");
               const {[district]:g}=val.districts;
               console.log(g);
               if(g.total!== undefined)setTotal(g.total);
        }
 
         fetchData();
     },[])

    return (
        <>
          <Container maxWidth="lg">
          <div className="Info1">
           <div className="a7">
                <div className="val">District : {district}</div>
            </div>
            <div className="a5">
                <div className="val">Confirmed :</div>
                <div className="val1"><CountUp start={0} end={total.confirmed}  duration={4}/></div>
            </div>
            <div className="a6">
                <div className="val">Deceased :</div>
                <div className="val2"><CountUp start={0} end={total.deceased}  duration={4}/></div>
            </div>
            <div className="a7">
                <div className="val">Tested :</div>
                <div className="val2"><CountUp start={0} end={total.tested}  duration={4}/></div>
            </div>
            <div className="a8">
                <div className="val">Vaccinated1 :</div>
                <div className="val3"><CountUp start={0} end={total.vaccinated1}  duration={4}/></div>
            </div>
            <div className="a8">
                <div className="val">Vaccinated2 :</div>
                <div className="val3"><CountUp start={0} end={total.vaccinated2}  duration={4}/></div>
            </div>
        </div>
          </Container>
        </>
    )
}

export default OneDistrictData
