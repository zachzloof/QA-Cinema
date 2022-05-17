import Logo from './Logo.png'
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Header() {

    return (
        <header style={{ backgroundColor: "#002730", height: "125px", marginLeft: "8%", marginRight: "auto" }}>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                        <a href="http://localhost:3000/"><img src={Logo} style={{ width: "150px", height: "150px", objectFit: "cover", objectPosition: "20% 10%" }} /></a>
                    </div>
                    <div class="col-md-8">
                        <h2><u><b>Welcome to QA Cinema</b></u></h2>
                        <h4><b>Entertainment</b> on <i>us</i></h4>
                        <Button href="http://localhost:3000/">Homepage</Button> &nbsp; &nbsp; <Button href="http://localhost:3000/booking">Booking</Button> &nbsp; &nbsp; <Button href="http://localhost:3000/myTickets">My tickets</Button> &nbsp; &nbsp; <Button href="http://localhost:3000/login">Login</Button>&nbsp; &nbsp; <Button href="http://localhost:3000/register">Register</Button>
                    </div>

                    <div class="col-md-2"  style={{paddingRight: "0px"}}>
                        
                        <form action="http://localhost:4005/search" method="post">
                            <input type="text" name="input" placeholder="Search Term" style={{marginTop: "70px"}}/>
                            <button style={{
                                float: "right",
                                paddingRight: "0px"
                        }} onClick="submit">SEARCH</button>
                        </form>
                    </div>
                    {/* <div
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-end"
                        }}
                    >
                        <div class="col-md-2">
                            <a href="http://localhost:3000/"><img src={Logo} style={{ width: "150px", height: "150px" }} /></a>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </header>
    )

}


export default Header;