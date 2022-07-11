import React from "react";

import Nav2 from "../components/Nav2";
import RequestForm from "../components/RequestForm";

const Register = () =>{

    return(
        <div className="Register">
            
            <Nav2/>
            <h1>Request Form</h1>
            <p> Please supply correct information in the fields below</p>
            <RequestForm/>
        </div>
    )
}

export default Register;