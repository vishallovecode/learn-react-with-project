import useFetch from "./useFetch";

const CustomHooks = () => {
    const [userInfo , fetchData] =  useFetch('https://dummyjson.com/auth/login');
    console.log('userInfo' , userInfo) 
    return  (
        <div> <button onClick={fetchData}>fetch</button> </div>
    )
}

export default CustomHooks;