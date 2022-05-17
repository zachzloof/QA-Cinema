function Login() {
    return (
        <div style={{textAlign: "center"}}>

 
        <h1><u>LOGIN PAGE</u></h1>
        <br/>
        <form action="http://localhost:4005/processLogin" method="post">
        Username:<input type="text" name="username"/> <br/>
         Password:<input type="password" name="password"/> <br/>   <br/>            
        <input type="submit"/>
        </form>
        <br/><br/>
        <h4>Dont have an account with us? Register here!</h4>
        <form action="http://localhost:3000/register">
        <button>REGISTER</button>
        </form>
        <br/>
        <br/>
        <br/>
        
        
         
        
        </div>
    );
  }

export default Login;