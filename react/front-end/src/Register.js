import { Button, Form } from 'react-bootstrap'

function Register() {
    return (
        <body style={{ marginTop: '20px', marginLeft: '6%', textAlign: "center" }}>
            <h1> REGISTER NOW AT QA CINEMA FOR REWARDS </h1>
            <br />
            <Form style={{ width: '60%', marginLeft: '20%', textAlign: "center" }} action='http://localhost:4005/registerUser' method='post'>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                    <Form.Text className="text-muted">
                        Please create a unique username.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        Please create a password.
                    </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
        </body>





        // <div style={{textAlign: "center"}}>


        //     <h1><u>CREATE NEW ACCOUNT WITH QA CINEMA</u></h1><br/>

        //     <form action="http://localhost:4005/registerUser" method="post">
        //         Username:<input name="username" /> <br />
        //         Password:<input name="password" type="password" /> <br />
        //         <br/>
        //         <input type="submit" />
        //         <br/>
        //         <br/>
        //     </form>
        //     <br/>
        //     <br/>
        //     <br/>

        // </div>
    );
}

export default Register;
