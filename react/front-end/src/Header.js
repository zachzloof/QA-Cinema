import Logo from './Logo.png'
import React from 'react';
import { Button, ButtonGroup, Col, Container, Row, Form } from 'react-bootstrap';

function Header() {

    return (
        <header style={{ backgroundColor: "#002730", height: "70px", marginLeft: "6%", marginRight: "auto" }}>
            <Container fluid>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col>
                        <a href="http://localhost:3000/"><img src={Logo} style={{ width: "215px", height: "70px", paddingLeft: "25px" }} /></a>
                    </Col>
                    <Col md={5}>
                        <ButtonGroup>
                            {/* <Button href="http://localhost:3000/">Homepage</Button> &nbsp; &nbsp; */}
                            <Button variant='info' href="http://localhost:3000/booking">Booking</Button> &nbsp; &nbsp;
                            <Button variant='info' href="http://localhost:3000/myTickets">My tickets</Button> &nbsp; &nbsp;
                            <Button variant='info' href="http://localhost:3000/login">Login</Button>&nbsp; &nbsp;
                            <Button variant='info' href="http://localhost:3000/register">Register</Button>
                        </ButtonGroup>
                    </Col>
                    <Col>
                        <Form action='http://localhost:4005/search' method='post'>
                            <Form.Group className='d-flex'>
                                <Form.Control type='text' name='input' placeholder='Search Term' /> &nbsp;
                                <Button variant='light' type='submit'> Search </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    {/* <Col xs={4}>
                        <form action="http://localhost:4005/search" method="post">
                            <input type="text" name="input" placeholder="Search Term" style={{ marginTop: "5px" }} />
                            <Button style={{ float: "right", paddingRight: "0px" }} onClick="submit">SEARCH</Button>
                        </form>
                    </Col> */}
                </Row>
            </Container>
        </header>
    )
}


export default Header;