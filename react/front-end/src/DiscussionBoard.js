import React, { Component } from 'react';
import axios from "axios"




class DiscussionBoard extends Component {



    constructor() {
        super();
        this.state = {
            records:[]
        };
    }

    getComments() {
        let refPromise = axios.get("http://localhost:4005/getComments");
        refPromise.then((response) => {
            console.log(response.data)
            this.setState({records:response.data})
        });
    }

    render() {
        console.log(this.state.records)
        return (<div>
            <h1>QA CINEMA DISCUSSION BOARD!</h1>
            <button onClick={() => this.getComments()}>REFRESH </button>
            <div>
            <h3>What is your favourite movie?</h3>
            <table>
            {this.state.records.map((data) =>
                        
                        <tr>
                            <td><b> {data.user} </b> </td>
                            <td> {data.likes} </td>
                            <td> {data.dislikes} </td>
                            <td> {data.body} </td>
                        </tr>
                    )
                    }
                    </table>
            </div>
        </div>)

    }
}



export default DiscussionBoard;