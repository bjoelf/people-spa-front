import React, { Component } from "react";

class PersonCreate extends Component {
  createPerson = (event) => {
    event.preventDefault();

    const person = {
      Name: event.target["name"].value,
      Phone: event.target["phone"].value,
      CityId: Number(event.target["city"].value),
    };
    console.log("personCreate: ", person.Name, person.CityId, person.Phone);
    this.props.addPerson(person);
  };

  render() {
    //lägg list city och country grejerna här....

    const optionsCity = this.props.cityArray.map((cityItem) => {
      return (
        <option key={cityItem.id} value={cityItem.id}>
          {cityItem.cityName}
        </option>
      );
    });

    const optionsCountry = this.props.countryArray.map((countryItem) => {
      return (
        <option key={countryItem.id} value={countryItem.id}>
          {countryItem.countryName}
        </option>
      );
    });

    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Person</h3>
        </div>

        <form onSubmit={this.createPerson}>
          <div className="row mb-2">
            <label htmlFor="name" className="col-2 mt-2">
              Name:
            </label>
            <input
              id="name"
              type="text"
              required
              minLength="2"
              className="form-contorl col-18"
              placeholder="Enter Name"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="country" className="col-2 mt-2">
              Country:
            </label>
            <select id="country" required>
              {optionsCountry}
            </select>
          </div>

          <div className="row mb-2">
            <label htmlFor="city" className="col-2 mt-2">
              City:
            </label>
            <select id="city" required>
              {optionsCity}
            </select>
          </div>

          <div className="row mb-2">
            <label htmlFor="phone" className="col-2 mt-2">
              Phone:
            </label>
            <input
              id="phone"
              type="text"
              required
              minLength="2"
              className="form-contorl col-18"
              placeholder="Enter Phone"
            />
          </div>

          <div className="row d-flex justify-content-center">
            <input
              typer="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" className="btn btn-success" value="Create" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
export default PersonCreate;
