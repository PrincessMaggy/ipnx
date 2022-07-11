import React from "react";

const RequestForm = () =>{
    return(
        <div className="requestForm">
            <div className="formHead">
                <p>Basic Information</p>
                <p>Document Upload</p>
            </div>
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

                    <div className="build">
                        <label>Buiding Type</label><br/>
                        <select>
                            <option>    </option>
                            <option>Lagos</option>
                        </select>
                    </div>

                    <button className="continue">Continue</button>
                
            </div> 

            {/* <div className="docUpload">
                <div>
                    <label>Passport Upload</label>
                    <input type="file" />
                 </div>

                 <div>
                    <label>Preferred Personal Identification Document</label> <br/>
                    <select>
                        <option>    </option>
                        <option> NIMC</option>
                        <option> Voters Card</option>
                    </select>
                 </div>

                 <div>
                    <label>Utility Bill</label>
                    <p>Drop your files here or <a href="">click here</a> to upload</p>
                    <p>Format (jpg, png, xls, pdf, csv, ppt). Maximum of 5MB</p>
                 </div>

                 <div>
                    <button> Back</button>

                    <button>Submit</button>
                 </div>


            </div> */}
        </div>
    )
}

export default RequestForm;