import {Link} from 'react-router-dom'

function Login() {
    return (
        <div>

 
        <h1><u>LOGIN PAGE</u></h1>
        
        <form action="http://localhost:4005/processLogin" method="post">
        Username:<input type="text" name="username"/> <br/>
        Password:<input type="password" name="password"/> <br/>               
        <input type="submit"/>
        </form>
         
        
         
        
        </div>
    );
  }

export default Login;