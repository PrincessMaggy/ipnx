import React from "react";
import man from '../images/man.jpg';
import headphone from '../images/headphone.png';
import speed from '../images/speed.png';
import at from '../images/at.png';
import pay from '../images/pay.png';


const Main1 = () =>{
    
    return(
        <div className="Main1">
           <div className="section1">
             <div className="one">
                <p>Your business deserves the <br/>best connectivity</p>
            </div>
            <div className="two">
                <img src={man} alt="man" />
            </div>
        </div>

        <div className="section2">
            <h2>How can we help you today?</h2>
            <div className="four">
                <div>
                    <img src={headphone} alt="headphone"/>
                    <h4>24/7 Customer Support</h4>
                    <p> Find the answers you're looking for online or <br/> call on <b>+234-01-628 1111</b></p>
                </div>

                <div>
                    <img src={speed} alt="speed"/>
                    <h4>Speed Test</h4>
                    <p>Test your internet speed...</p>
                </div>

                <div>
                    <img className="pay" src={pay} alt="pay"/>
                    <h4>Payment Channels</h4>
                    <p>Pay online orby cash or POS via our Retail <br/> Outlets...</p>
                </div>

                <div>
                    <img src={at} alt="at"/>
                    <h4>Contact Us</h4>
                    <p>Complete our contact form and we'll be in <br/> touchwith you ASAP!</p>
                </div>
           </div>
        </div>

        <div className="section3">
            <h2> Our IShop Locations</h2>
            <div></div>
        </div>

    </div>
    )
}

export default Main1;