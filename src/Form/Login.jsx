import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    password: "",
    userName: "",
    language: "",
  });


  const [validat , setValidate] = useState({
    password:  '',
    userName: ''
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

  const loginHandler = (e) => {
    
    e.preventDefault();
    console.log(
      "Login SuccessFully",
      loginData.userName,
      "   ",
      loginData.password,
      " " + loginData.language
    );
    alert("Hye");
  };


  const validation = (value , type) => {

    // if lenght is less than 10 than 
    if(value.length && value.length<10 && type=== 'password') {
      setValidate({...validat , [type]: 'Password length should be 10'})
    } else  {
      setValidate({...validat , password: ''})
    }
    if( type==='userName') {
      if(value.length>1 && !value?.includes('@witviper.com')) {
        setValidate({...validat , [type]: 'User Name should contain @witviper.com '})
      } else {
        setValidate({...validat , userName: ''})
      }
    }
  
    

  }

  const onChangeHandlerType = (e, type) => {
    setLoginData({ ...loginData, [type]: e.target.value });
    validation(e.target.value, type);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("UserName", e.target.userName.value);
    console.log("Password", e.target.password.value);
  };

  // Uncontrolled
  // Controlled
  return (
    <div className="flex">
         {/*  Controlled Form */}
      <form onSubmit={loginHandler} className= 'flex flex-column form'>
      <input
          placeholder="UserName" 
          className="input-field"
          required
          onChange={(e) => onChangeHandlerType(e, "userName")}
          value={loginData.userName}
        />
    {validat.userName && <span className="error">{validat.userName}</span>}

        <input
          placeholder="Password"
          className="input-field"
          required
          onChange={(e) => onChangeHandlerType(e, "password")}
          value={loginData.password}
        />
       {validat.password && <span className="error">{validat.password}</span>}
        <select onChange={(e)=>onChangeHandlerType(e, 'language')}  className="input-field">
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
        </select>

        <input type="Submit" value={"Login"} className = 'input-field ' disabled= {validat.password || validat.userName}/>

    

      {/* <input placeholder="UserName"  type = 'email'  name = "userName"  onChange={onChangeHandler} value = {loginData.userName}/>
                <input placeholder="Password"   name = "password" required onChange={onChangeHandler} value= {loginData.password}/> */}

                   
      </form>
      {/*  Uncontrolled Form */}

      {/* <form onSubmit={submit}>
        <input name="userName" placeholder="UserName" />
        <input name="password" placeholder="Password" />
        <button type="submit" value={"Login"}>
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default Login;

// what ever we did till now is called controlled form component
// that value of form field will be handle by the react state







// Controlled and Uncontrolled Form  

