import React, { Component } from 'react';
import axios from 'axios'





class Booking extends Component {



    constructor() {
        super();
        this.state = {
            children: 0,
            student: 0,
            adult: 0
        };
    

    this.handleChangeChildren = this.handleChangeChildren.bind(this);
    this.handleChangeAdult = this.handleChangeAdult.bind(this);
    this.handleChangeStudent = this.handleChangeStudent.bind(this);



    this.saveData = this.saveData.bind(this);
    
    }


    handleChangeChildren(event){
    this.setState({children: event.target.value});
    }
    handleChangeStudent(event){
    this.setState({student: event.target.value});
    }
    handleChangeAdult(event){
    this.setState({adult: event.target.value});
    }


    saveData() {
        axios.post("http://localhost:4005/processBooking", {
        children: this.state.children,
        student: this.state.student,
        adult:this.state.adult
        })
        .then((response) => {
        console.log(response);
        });
        }

    render() {
        return (<div>
            <form onSubmit={this.saveData}>
            <input type="number" value={this.state.children} onChange={this.handleChangeChildren} placeholder="CHILDREN: £13.55"></input>
                 <input type="number" value={this.state.student} onChange={this.handleChangeStudent} placeholder="STUDENT: £15.50" ></input>
                 <input type="number" value={this.state.adult} onChange={this.handleChangeAdult} placeholder="ADULT: 17.99"></input>
                <input type="submit" value="Submit" />
            </form>
        </div>)

    }
}



export default Booking;

// function Booking() {
{/* <button onClick={() => this.getData()}>DATA </button>
            <form onSubmit={this.saveDate}>
                Name:<input type="text" value={this.state.name} onChange={this.handleChangeName} /> <br />
                Marks:<input type="number" value={this.state.marks} onChange={this.handleChangeMarks} /> <br />
                Course:<input type="text" value={this.state.course} onChange={this.handleChangeCourse} /> <br />
                <input type="submit" value="Submit" />
            </form> */}
//     return(
        
//             <div>
//                 <form>
//                 <h1>
//                     Please insert your tickets
//                 </h1>
//                 
//                 <button onClick={this.HandleBooking}></button>
//                 </form>
            
//             </div>
//     )
    
// }

// export default Booking;