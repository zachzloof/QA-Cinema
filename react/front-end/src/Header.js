import Logo from './Logo.png'

function Header() {

    return (
        <div style={{ backgroundColor: "#002730", height: "120px"}}>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                        <a href="http://localhost:3000/"><img src={Logo} style={{ width: "150px", height: "150px", objectFit: "cover", objectPosition: "20% 10%" }} /></a>
                    </div>
                    <div class="col-md-6">
                        <h2><u><b>Welcome to QA Cinema</b></u></h2>
                        <h3><b>Entertainment</b> on <i>us</i></h3>
                        <a href="http://localhost:3000/">Homepage</a> &nbsp; &nbsp; <a href="http://localhost:3000/booking">Booking</a> &nbsp; &nbsp; <a href="http://localhost:3000/myTickets">My tickets</a> &nbsp; &nbsp; <a href="http://localhost:3000/login">Login</a>&nbsp; &nbsp; <a href="http://localhost:3000/register">Register</a>
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
        </div>
    )

}


export default Header;