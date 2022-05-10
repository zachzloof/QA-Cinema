function Register() {
    return (
        <div>


            <h1><u>CREATE NEW ACCOUNT WITH QA CINEMA</u></h1>

            <form action="http://localhost:4005/registerUser" method="post">
                Username:<input name="username" /> <br />
                Passwordd:<input name="password" type="password" /> <br />

                <input type="submit" />
            </form>

        </div>
    );
}

export default Register;
