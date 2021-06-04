import React, {Component} from "react";

class PersonCreate extends Component {
    createPerson =(event) => {
        event.preventDefault();

        const person = {
            Name: event.target["name"].value,
            Phone: Number(event.target["phone"].value),
        };
        this.props.addPerson(person);
    };

    render(){
        return(
            <div className="col-md-6">
                <div className="row">
                    <h3 className="col-12">Add Person</h3>
                </div>

                <form onSubmit={this.createPerson}>
                    <div className ="row mb-2">
                        <label htmlFor="Name" className="col-2 mt-2"> Name:</label>
                        <input 
                        id="name"
                        type="text"
                        required
                        minLength="2"
                        className ="form-contorl col-18"
                        placeholder="Enter Name" />
                    </div>
                    <div className ="row mb-2">
                        <label htmlFor="Name" className="col-2 mt-2"> City:</label>
                        <input 
                        id="city"
                        type="text"
                        required
                        minLength="2"
                        className ="form-contorl col-18"
                        placeholder="Enter City" />
                    </div>
                    <div className ="row mb-2">
                        <label htmlFor="Name" className="col-2 mt-2"> Phone:</label>
                        <input 
                        id="phone"
                        type="number"
                        required
                        minLength="2"
                        className ="form-contorl col-18"
                        placeholder="Enter Phone" />
                    </div>

                    <div className="row d-flex justify-content-center">
                        <input 
                        typer="reset"
                        className="mr-2 btn btn-warning"
                        value="Reset"
                        />
                        <input type="submit" className="btn btn-success" value="Create"/>
                    </div>
                </form>
                <div className="d-flex justify-content-end">
                    <button
                    className="btn btn-secondary"
                    onClick={this.props.closeCreate}>
                        Close
                    </button>
                </div>
            </div>
        );
    }

}
export default PersonCreate;