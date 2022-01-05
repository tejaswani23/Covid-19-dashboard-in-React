import React,{useState,useEffect} from 'react';
import "../styles/Home.css";
import Container from '@material-ui/core/Container';
import headImg from "../images/header.png";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "../styles/StateAbb.css";
import StateAbb from './StateAbb';
import StateSts from './StateSts';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
    width:"200px",
    background:"transparent"
  }
  }));

  

const Home = ({st,district,setState,setDistrict}) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [state,setStates] = useState({});
    const [bool1,setBool]= useState(false);
    const [bool2,setBool2]= useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
   
    useEffect(()=>{
       const fetchStates= async()=>{
        const states= await axios.get("https://data.covid19india.org/v4/min/data.min.json");
        setStates(states.data);
       };

       fetchStates();
    },[])

    return (
        <Container maxWidth="lg">
        <div className="header">
            <div className="headerTxt">C</div>
            <motion.img className="headerImg" src={headImg} animate={{ rotate: 360 }} transition={{loop:Infinity, duration: 6 }}alt=""/>
            <div className="headerTxt">VID-19</div>
        </div>
        <div className="subHeader">
            <div className="subHead">Indian States DashBoard</div>
        </div>
        <div className="form ">
           <div className="field"><input placeholder="Enter your State Abb." type="text"  onChange={(e)=>{setBool(true);setState(e.target.value)}}/></div>
           <div className="field"><input placeholder="Enter your District" type="text"  onChange={(e)=>{setBool2(true);setDistrict(e.target.value)}}/></div>
           <div className="field"><NavLink to="/district"> <Button state={st} district={district} bool1={bool1} bool2={bool2}/></NavLink></div>
        </div>
        <div className="flex1">
        <div className="abbr">
        <div className="Switch"><FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show State/UT Abb."
        /></div>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <StateAbb/>
          </Paper>
        </Slide>
        </div>
        <div className="second">
        <div className="buttons flex">
            <div> <button>View State Info</button></div>
            <div> <button>View All Districts Info</button></div>
        </div>
        <div className="states">
        {
        Object.keys(state).map((d,key)=>{
          return(
           <div key={key}>{d} 
             <StateSts state={d}/>
           </div>
          );
        })
        }
        </div>
        </div>
        </div>
        </Container>
    )
}

export default Home;
