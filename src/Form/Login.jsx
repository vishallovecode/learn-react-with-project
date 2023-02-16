import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    password: "",
    userName: "",
  });

  // const  [password , setPassword] = useState('');
  // const  [user_name , setUserName] = useState('');

  //     const userNameHandler = (e) => {
  //         setUserName(e.target.value)
  // setLoginData({...loginData, 'userName': e.target.value})
  //     }

  //     const passwordHandler = (e)=>  {
  //         setPassword(e.target.value)
  //     }

  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginHandler = (data) => {
    console.log("hey", data);
    console.log( "Login SuccessFully", loginData.userName,  "   ", loginData.password );
    alert("Hye");
  };

  const onChangeHandlerType = (e, type) => {
    setLoginData({ ...loginData, [type]: e.target.value });
  };

  // Uncontrolled
  // Controlled
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input
          placeholder="UserName"
          required
          onChange={(e) => onChangeHandlerType(e, "userName")}
          value={loginData.userName}
        />
        <input
          placeholder="Password"
          required
          onChange={(e) => onChangeHandlerType(e, "password")}
          value={loginData.password}
        />
        <select>
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
        </select>

        {/* <input placeholder="UserName"  type = 'email'  name = "userName"  onChange={onChangeHandler} value = {loginData.userName}/>
                <input placeholder="Password"   name = "password" required onChange={onChangeHandler} value= {loginData.password}/> */}
        <button type="submit" value={"Login"}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

// if we want to give key as dynamic key in object put the variable inside the []

let type = "";

const data = {
  [key]: "LPU",
};
