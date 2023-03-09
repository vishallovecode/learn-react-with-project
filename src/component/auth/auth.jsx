
const Auth =(Component)=> {
        if(localStorage.getItem('auth')) {
            return Component;
        } else {
            return null;
        }
}
export default Auth;


// check the autorization and render it else redirect to the loginm [age]
