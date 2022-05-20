import React, { Component } from 'react';
import axios from "axios"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { Button, Form } from 'react-bootstrap';




class DiscussionBoard extends Component {



    constructor() {
        super();
        this.state = {
            records: []
        };
    }
    componentDidMount() { //usual equivalent useEffect(getComments, [])
        this.getComments();
    }

    async getComments() {
        let response = await axios.get("http://localhost:4005/getComments");
        console.log(response.data)
        this.setState({ records: response.data })
    }

    render() {
        // console.log(this.state.records)
        return (
            <body style={{ marginTop: '20px', marginLeft: '6%', textAlign: "center" }}>

                <h1>QA CINEMA DISCUSSION BOARD!</h1>

                <div>
                    <br />
                    <h3>1.What is your favourite movie?</h3>

                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                        {this.state.records.map((data) =>
                            (data.post == 1) &&
                            (<tr>
                                <td><b> {data.user} &nbsp; &nbsp;</b> </td>
                                <td> {data.body} &nbsp;</td>
                                <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')} />{data.likes}</a>&nbsp; </td>
                                <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')} />{data.dislikes}</a>&nbsp; </td>

                            </tr>)
                        )
                        }
                    </table>

                    <Form action="http://localhost:4005/processComment/1" method="post" style={{ marginLeft: '20%', marginRight: '20%' }}>
                        <Form.Group className='mb-3'>
                            <Form.Control type="text" name="comment1" />
                        </Form.Group>
                        <Button variant='light' type="submit">Submit</Button>
                    </Form>
                    <br />
                    <h3>2.What was your best cinema experience?</h3>

                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                        {this.state.records.map((data) =>
                            (data.post == 2) &&
                            (<tr>
                                <td><b> {data.user} &nbsp; &nbsp;</b> </td>
                                <td> {data.body} &nbsp;</td>
                                <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')} />{data.likes}</a>&nbsp; </td>
                                <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')} />{data.dislikes}</a> &nbsp;</td>

                            </tr>)
                        )
                        }
                    </table>

                    <Form action="http://localhost:4005/processComment/2" method="post" style={{ marginLeft: '20%', marginRight: '20%' }}>
                        <Form.Group className='mb-3'>
                            <Form.Control type="text" name="comment1" />
                        </Form.Group>
                        <Button variant='light' type="submit">Submit</Button>
                    </Form>
                    <br />
                    <h3>3. Which film are you most looking forward too?</h3>
                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                        {this.state.records.map((data) =>
                            (data.post == 3) &&
                            (<tr>
                                <td><b> {data.user} &nbsp; &nbsp; </b> </td>
                                <td> {data.body} &nbsp; </td>
                                <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')} />{data.likes} </a> &nbsp;</td>
                                <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')} />{data.dislikes}</a> &nbsp;</td>

                            </tr>)
                        )
                        }
                    </table>

                    <Form action="http://localhost:4005/processComment/3" method="post" style={{ marginLeft: '20%', marginRight: '20%' }}>
                        <Form.Group className='mb-3'>
                            <Form.Control type="text" name="comment1" />
                        </Form.Group>
                        <Button variant='light' type="submit">Submit</Button>
                    </Form>
                    <br />
                    <h3>4. MARVEL OR DC??</h3>
                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                        {this.state.records.map((data) =>
                            (data.post == 4) &&
                            (<tr>
                                <td><b> {data.user} &nbsp; &nbsp; </b> </td>
                                <td> {data.body}  &nbsp;</td>
                                <td> <a href={`http://localhost:4005/newLike/${data.likes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-up')} />{data.likes}</a> &nbsp; </td>
                                <td> <a href={`http://localhost:4005/newDislike/${data.dislikes}/${data.id}`}><FontAwesomeIcon icon={solid('thumbs-down')} />{data.dislikes}</a> &nbsp; </td>

                            </tr>)
                        )
                        }
                    </table>

                    <Form action="http://localhost:4005/processComment/4" method="post" style={{ marginLeft: '20%', marginRight: '20%' }}>
                        <Form.Group className='mb-3'>
                            <Form.Control type="text" name="comment1" />
                        </Form.Group>
                        <Button variant='light' type="submit">Submit</Button>
                    </Form>
                </div>
            </body>)

    }
}



export default DiscussionBoard;