import React, { Component } from 'react';
import axios from "axios"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'




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
                            <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')}/>{data.likes}</a> </td>
                            <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')}/>{data.dislikes}</a> </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>

                <form action="http://localhost:4005/processComment/1" method="post">
                    <input type="text" name="comment1"></input>
                    <button></button>
                </form>

                <h3>2.What was your best cinema experience?</h3>
                <table>
                    {this.state.records.map((data) =>
                        (data.post == 2) &&
                        (<tr>
                            <td><b> {data.user} </b> </td>
                            <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')}/>{data.likes}</a> </td>
                            <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')}/>{data.dislikes}</a> </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>

                <form action="http://localhost:4005/processComment/2" method="post">
                    <input type="text" name="comment1"></input>
                    <button></button>
                </form>

                <h3>3. Which film are you most looking forward too?</h3>
                <table>
                    {this.state.records.map((data) =>
                        (data.post == 3) &&
                        (<tr>
                            <td><b> {data.user} </b> </td>
                            <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')}/>{data.likes}</a> </td>
                            <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')}/>{data.dislikes}</a> </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>

                <form action="http://localhost:4005/processComment/3" method="post">
                    <input type="text" name="comment1"></input>
                    <button></button>
                </form>

                <h3>4. MARVEL OR DC??</h3>
                <table>
                    {this.state.records.map((data) =>
                        (data.post == 4) &&
                        (<tr>
                            <td><b> {data.user} </b> </td>
                            <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')}/>{data.likes}</a> </td>
                            <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')}/>{data.dislikes}</a> </td>
                            <td> {data.body} </td>
                        </tr>)
                    )
                    }
                </table>

                <form action="http://localhost:4005/processComment/4" method="post">
                    <input type="text" name="comment1"></input>
                    <button></button>
                </form>
            </div>
        </div>)

    }
}



export default DiscussionBoard;