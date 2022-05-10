import React, { Component } from 'react';
import axios from "axios"




class DiscussionBoard extends Component {



    constructor() {
        super();
        this.state = {
            records: []
        };
    }
    componentDidMount(){ //usual equivalent useEffect(getComments, [])
        this.getComments();
    }

    async getComments() {
        let response = await axios.get("http://localhost:4005/getComments");
        console.log(response.data)
        this.setState({ records: response.data })
    }

    render() {
        console.log(this.state.records)
        return (<div>
            <h1>QA CINEMA DISCUSSION BOARD!</h1>
            <div>
                <h3>1.What is your favourite movie?</h3>
                <table>
                    {this.state.records.map((data) =>
                        (data.post == 1) &&
                        (<tr>
                            <td><b> {data.user} </b> </td>
                            <td> {data.likes} </td>
                            <td> {data.dislikes} </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>

                <h3>2.What was your best cinema experience?</h3>
                <table>
                    {this.state.records.map((data) =>
                        (data.post == 2) &&
                        (<tr>
                            <td><b> {data.user} </b> </td>
                            <td> {data.likes} </td>
                            <td> {data.dislikes} </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>

                <h3>3. Which film are you most looking forward too?</h3>
                <table>
                    {this.state.records.map((data) =>
                        (data.post == 3) &&
                        (<tr>
                            <td><b> {data.user} </b> </td>
                            <td> {data.likes} </td>
                            <td> {data.dislikes} </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>

                <h3>4. MARVEL OR DC??</h3>
                <table>
                    {this.state.records.map((data) =>
                        (data.post == 4) &&
                        (<tr>
                            <td><b> {data.user} </b> </td>
                            <td> {data.likes} </td>
                            <td> {data.dislikes} </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>
            </div>
        </div>)

    }
}



export default DiscussionBoard;