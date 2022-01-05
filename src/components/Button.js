import React from 'react';
import Button from '@material-ui/core/Button';
import "../styles/Home.css";
import { NavLink } from 'react-router-dom';

const Button1= ({state,district,bool1,bool2}) => {
    return (state && district && bool1 && bool2) ? 
    (
        <div>
          <NavLink to="/district"> <Button variant="contained" color="primary" style={{margin:"25px"}}>View </Button> </NavLink>
        </div>
    ) : (
        <div>
           <NavLink to="/"> <Button variant="contained" color="primary" style={{margin:"25px"}}>View </Button> </NavLink>
        </div>
    )
}

export default Button1;
