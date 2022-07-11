import React from "react";

const RequestForm = () =>{
    return(
        <div className="requestForm">
            <div className="basicInfo">
                <div className="cont">
                    <div>
                        <label>First Name</label> <br/>
                        <input type="text" /> 
                    </div>
                    
                    <div>
                        <label>Last Name</label>  <br/>
                        <input type="text" />
                    </div>
                </div>

                <div className="cont">
                    <div>
                        <label>Gender</label> <br/>
                        <input type="" /> 
                    </div>
                    
                    <div>
                        <label>Date of Birth</label> <br/>
                        <input type="date" placeholder ="Select Date"/>
                    </div>
                </div>

                <div className="cont">
                    <div>
                        <label>Occupation</label><br/>
                        <input type="text" />
                    </div>
                    
                    <div>
                        <label>Email Address</label> <br/>
                        <input type="email" />
                    </div>
                </div>

                <div className="cont">
                    <div>
                        <label>Phone Number</label><br/>
                        <input type="tel" />
                    </div>

                    <div>
                        <label>Alternate Phone Number</label> <br/>
                        <input type="tel" />
                    </div>
                </div>

                <p>ADDRESS</p>

                <div className="cont">
                   <div> 
                        <label>State</label><br/>
                        <select>
                            <option>    </option>
                            <option>Lagos</option>
                        </select>
                    </div>

                    <div>
                        <label>LGA</label> <br/>
                        <select>
                            <option>    </option>
                            <option>Lagos</option>
                        </select> 
                    </div>

                    <div>
                        <label>Area</label><br/>
                        <select>
                            <option>    </option>
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="docUpload">

            </div>
        </div>
    )
}

export default RequestForm;