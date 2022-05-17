function Register() {
    return (
        <div style={{textAlign: "center"}}>


            <h1><u>CREATE NEW ACCOUNT WITH QA CINEMA</u></h1><br/>

            <form action="http://localhost:4005/registerUser" method="post">
                Username:<input name="username" /> <br />
                Password:<input name="password" type="password" /> <br />
                <br/>
                <input type="submit" />
                <br/>
                <br/>
            </form>
            <br/>
            <br/>
            <br/>

        </div>
    );
}

export default Register;
