import React, { useState, useEffect } from 'react';
import axios from 'axios'

function MyTickets() {

    let [responseData, setResponseData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4005/getTickets`)
            .then((response) => {
                console.log(response.data);
                setResponseData(response.data);
                console.log(response)


            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div style={{ marginLeft: "8%", marginRight: "auto", textAlign: "center" }}>
            <h1>Hello User</h1>
            <h2>Here you will find your tickets and incomplete orders</h2>
            <h5>COMPLETED ORDERS</h5>
            <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                <tr>
                    <td><u><b>ID</b></u></td>
                    <td><u><b>user</b></u></td>
                    <td><u><b>price</b></u> &nbsp; </td>
                    <td><u><b>child tickets</b></u> &nbsp; </td>
                    <td><u><b>student tickets</b></u> &nbsp; </td>
                    <td><u><b>adult tickets</b></u> &nbsp; </td>
                    <td><u><b>screen</b></u> &nbsp; </td>
                    <td><u><b>date</b></u> &nbsp; </td>
                    <td><u><b>movie</b></u> &nbsp; </td>
                    <td><u><b>time</b></u> &nbsp; </td>
                </tr>
                {responseData.map((data) =>
                    (data.status === "COMPLETED") &&
                    (<tr>
                        <td><b> {data.id} &nbsp; &nbsp;</b> </td>
                        <td> {data.user} &nbsp;</td>
                        <td> {data.cost} &nbsp; </td>
                        <td> {data.children} &nbsp; </td>
                        <td> {data.students} &nbsp; </td>
                        <td> {data.adults} &nbsp; </td>
                        <td> {data.screen} &nbsp; </td>
                        <td> {data.date} &nbsp; </td>
                        <td> {data.movie} &nbsp; </td>
                        <td> {data.time} &nbsp; </td>

                    </tr>)
                )
                }
            </table>

            <h5>INCOMPLETE ORDERS</h5>
            <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                <tr>
                    <td><u><b>ID</b></u></td>
                    <td><u><b>user</b></u></td>
                    <td><u><b>price</b></u> &nbsp; </td>
                    <td><u><b>child tickets</b></u> &nbsp; </td>
                    <td><u><b>student tickets</b></u> &nbsp; </td>
                    <td><u><b>adult tickets</b></u> &nbsp; </td>
                    <td><u><b>screen</b></u> &nbsp; </td>
                    <td><u><b>date</b></u> &nbsp; </td>
                    <td><u><b>movie</b></u> &nbsp; </td>
                    <td><u><b>time</b></u> &nbsp; </td>
                    <td><u><b>order status</b></u></td>
                </tr>
                {responseData.map((data) =>
                    (data.status !== "COMPLETED") &&
                    (<tr>
                        <td><b> {data.id} &nbsp; &nbsp;</b> </td>
                        <td> {data.user} &nbsp;</td>
                        <td> {data.cost} &nbsp; </td>
                        <td> {data.children} &nbsp; </td>
                        <td> {data.students} &nbsp; </td>
                        <td> {data.adults} &nbsp; </td>
                        <td> {data.screen} &nbsp; </td>
                        <td> {data.date} &nbsp; </td>
                        <td> {data.movie} &nbsp; </td>
                        <td> {data.time} &nbsp; </td>
                        <td> {data.status} &nbsp; </td>

                    </tr>)
                )
                }
            </table>


        </div>
    )
}


export default MyTickets;