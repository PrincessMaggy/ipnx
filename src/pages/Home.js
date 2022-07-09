import React from "react";
import Navbar from "../components/Navbar";
import Main1 from "../components/Main1";
import Map  from '../components/Map';

const Home =()=>{

    return(
        <div className="Home">
            <Navbar/>
            <Main1/>
            <Map/>
        </div>
    )
}

export default Home;