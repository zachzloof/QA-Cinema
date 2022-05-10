function Login() {
    return (
        <div>

 
        <h1><u>LOGIN PAGE</u></h1>
        
        <form action="http://localhost:4005/processLogin" method="post">
        Username:<input type="text" name="username"/> <br/>
        Password:<input type="password" name="password"/> <br/>               
        <input type="submit"/>
        </form>

        <h4>Dont have an account with us? Register here!</h4>
        <form action="http://localhost:3000/register">
        <button>REGISTER</button>
        </form>
        
         
        
        </div>
    );
  }

export default Login;