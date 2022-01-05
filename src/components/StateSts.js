import React,{useEffect,useState} from 'react';
import axios from "axios";
import "../styles/StateSts.css";
import CountUp from 'react-countup';

const StateSts = ({state}) => {
    const [deltaConfirm,setDelta] = useState(0);
    const [delta21_14Confirm,setDelta2] = useState(0);
    const [delta7Confirm,setDelta7] = useState(0);
    const [totalConfirm,setTotal] = useState(0);
    const [vaccinated1,setVac1] = useState(0);
    const [vaccinated2,setVac2] = useState(0);

    useEffect(()=>{
      const fetchStateData= async()=>{
        const {data:{[state]:val}} = await axios.get("https://data.covid19india.org/v4/min/data.min.json");
        console.log(val);
        const {delta,delta21_14,delta7,total}=val;
        if(delta.confirmed!== undefined)setDelta(delta.confirmed);
        if(delta21_14.confirmed!== undefined)setDelta2(delta21_14.confirmed);
        if(delta7.confirmed!== undefined)setDelta7(delta7.confirmed);
        if(total.confirmed!== undefined)setTotal(total.confirmed);
        if(total.vaccinated1!== undefined)setVac1(total.vaccinated1);
        if(total.vaccinated2!== undefined)setVac2(total.vaccinated2);
      }
      fetchStateData();
    },[])

    return (
        <div className="status">
            <div className="name">State Abbreviation(Abb.) : <span>{state}</span></div>
            <div className="conf">Confirmed Cases</div>
            <div className="flex">
                <div className="title">Delta</div>
                <div className="title">Delta21_14</div>
                <div className="title">Delta7</div>
                <div className="title">Total</div>
            </div>
            <div className="flex">
            <div className="name1"><CountUp start={0} end={deltaConfirm}  duration={4}/></div>
            <div className="name1"><CountUp start={0} end={delta21_14Confirm}  duration={4}/></div>
            <div className="name1"><CountUp start={0} end={delta7Confirm}  duration={4}/></div>
            <div className="name1"><CountUp start={0} end={totalConfirm}  duration={4}/></div>
            </div>
            <div className="flex">
                <div className="title2">Vaccinated1</div>
                <div className="title2">Vaccinated2</div>
            </div>
            <div className="flex">
            <div className="name2"><CountUp start={0} end={vaccinated1}  duration={6}/></div>
            <div className="name2"><CountUp start={0} end={vaccinated2}  duration={6}/></div>
            </div>
        </div>
    )
}

export default StateSts
