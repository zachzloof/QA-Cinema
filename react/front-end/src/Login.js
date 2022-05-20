import { Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <body style={{ marginTop: '20px', marginLeft: '6%', textAlign: "center" }}>
      <h1> LOGIN </h1>
      <br />
      <Form style={{ width: '60%', marginLeft: '20%', textAlign: "center" }} action='http://localhost:4005/processLogin' method='post'>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control name= "username" type="text" placeholder="Enter Username" />
          <Form.Text className="text-muted">
            This is the Username you used to register with QA Cinema.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>

        <br /><br /><br />

        <Form.Group className='mb-3'>
          <Form.Label> Don't have an account with us? Register Now!</Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit" href='http://localhost:3000/register'>
          Take Me There
        </Button>
      </Form>
    </body>
  );
}

export default Login;