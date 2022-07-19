import React from "react";

const Login =() =>{

    return(
        <div className="Login">
            <div className="container">
                <div className="head">
                    <div className="logo">
                        <p>ip<span>NX</span></p>
                    </div>
                    <h3>Login</h3>
                </div>

                <form>
                    <p>Enter your login details</p>

                    <div>
                        <label> Username</label> <br/>
                        <input type="username" placeholder="example@gmail.com"/> 
                    </div>

                    <div>
                        <label> Password</label> <br/>
                        <input type="username" placeholder="**************"/> 
                    </div>

                    <button>Log in</button>

                    <p>By signing in, you are agreeing to our <span className="red"> Terms and Conditions </span> and <span className="red">Privacy Policy </span></p>
                </form>
            </div>
        </div>


    )
}

export default Login;