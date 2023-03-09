import { useContext, useState } from "react";
import  {StoreContext}  from '../context/store'

const Login = () => {
  const [loginData, setLoginData] = useState({
    password: "",
    userName: "",
    language: "",
  });

  const {actions} = useContext(StoreContext)
    const LoginHandler = ()=>{
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username:  loginData.userName ,  // 'kminchelle',
          password:  loginData.password // '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then((data)=>{
        console.log(data , 'logindata')
        localStorage.setItem('auth' , data.token) 
        actions.generalActions.updateUserInfo(data);
      });
    }

  const [validat , setValidate] = useState({
    password:  '',
    userName: '',
    language: ''
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




  const validation = (value , type) => {

    // if lenght is less than 10 than 
    // if(value.length && value.length<10 && type=== 'password') {
    //   setValidate({...validat , [type]: 'Password length should be 10'})
    // } else  {
    //   setValidate({...validat , password: ''})
    // }
    // if( type==='userName') {
    //   if(value.length>1 && !value?.includes('@witviper.com')) {
    //     setValidate({...validat , [type]: 'User Name should contain @witviper.com '})
    //   } else {
    //     setValidate({...validat , [type]: ''})
    //   }
    // }

    if(type==='language') {
      if(value!=='Hindi') {
        setValidate({...validat , [type]: 'For region primary language should be Hindi'})
      } else {
        setValidate({...validat , [type]: ''})
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
     
     
      <input
          placeholder="UserName" 
          className="input-field"
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

        <button onClick={LoginHandler}> Login</button>
        
       {/* {validat.password && <span className="error">{validat.password}</span>}
        <select onChange={(e)=>onChangeHandlerType(e, 'language')}  className="input-field" placeholder="select the language" value= {loginData.language}>
        <option>Select Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
        </select>
 {    validat.language &&  <span className="error">{validat.language}</span>}

        <input type="Submit" value={"Login"} className = 'input-field ' disabled= {(validat.password || validat.userName || validat.language)|| (!loginData.userName ||  !loginData.password || !loginData.language)}/>

     */}

      {/* <input placeholder="UserName"  type = 'email'  name = "userName"  onChange={onChangeHandler} value = {loginData.userName}/>
                <input placeholder="Password"   name = "password" required onChange={onChangeHandler} value= {loginData.password}/> */}

                   

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

