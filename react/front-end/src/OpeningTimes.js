

function OpeningTimes(){



    return(
        <div style={{textAlign: "center"}}>
            <h1>What times are we open?</h1>
            <h1>Check the table below!</h1>
            <table style={{border: "3px solid rgb(0, 0, 0)", marginLeft: "auto", marginRight: "auto"}}>
                <tr>
                    <td><b><u>DAY</u></b></td>
                    <td><b><u>OPENING TIME</u></b></td>
                    <td><b><u>SET CLOSING BREAKS</u></b></td>
                    <td><b><u>CLOSING TIME</u></b></td>
                </tr>
                <tr>
                    <td><b>Monday</b></td>
                    <td><b><u>16:00</u></b></td>
                    <td><b><u>18:30-19:30</u></b></td>
                    <td><b><u>00:00</u></b></td>
                </tr>
                <tr>
                    <td><b>Tuesday</b></td>
                    <td><b><u>16:00</u></b></td>
                    <td><b><u>18:30-19:30</u></b></td>
                    <td><b><u>00:00</u></b></td>
                </tr>
                <tr>
                    <td><b>Wednesday</b></td>
                    <td><b><u>16:00</u></b></td>
                    <td><b><u>18:30-19:30</u></b></td>
                    <td><b><u>00:00</u></b></td>
                </tr>
                <tr>
                    <td><b>Thursday</b></td>
                    <td><b><u>16:00</u></b></td>
                    <td><b><u>18:30-19:30</u></b></td>
                    <td><b><u>00:30</u></b></td>
                </tr>
                <tr>
                    <td><b>Friday</b></td>
                    <td><b><u>15:00</u></b></td>
                    <td><b><u>17:30-18:15, 21:00-22:00</u></b></td>
                    <td><b><u>3:30</u></b></td>
                </tr>
                <tr>
                    <td><b>Saturday</b></td>
                    <td><b><u>12:00</u></b></td>
                    <td><b><u>16:00-17:00, 20:00-21:00</u></b></td>
                    <td><b><u>2:00</u></b></td>
                </tr>
                <tr>
                    <td><b>Sunday</b></td>
                    <td><b><u>12:00</u></b></td>
                    <td><b><u>18:00-19:00</u></b></td>
                    <td><b><u>00:00</u></b></td>
                </tr>
            </table>
        </div>
    )
}

export default OpeningTimes;