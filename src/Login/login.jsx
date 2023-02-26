import React, { useState } from "react";

const Login  =()=> {

    const [message , setMessage] = useState('This is the login page')
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}

export default Login ;