import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonTable from "./personTable";
import getPeople, {
  getPeopleById,
  createPerson,
  deletePerson,
  getCities,
  getCountries,
} from "../api/personApi";
import PersonDetails from "./personDetails";
import PersonCreate from "./personCreate";

class App extends Component {
  state = {
    personList: [],
    detailsPerson: null,
    createPerson: false,
    cityList: [],
    countryList: [],
  };

  //som en constructor, on startup
  componentDidMount() {
    const _this = this;
    getPeople().then((people) => {
      _this.setState({ personList: people });
    });

    getCities().then((cities) => {
      _this.setState({ cityList: cities });
    });

    getCountries().then((countries) => {
      _this.setState({ countryList: countries });
    });
  }

  //------------- Find Person partial show and close
  findPerson = async (id) => {
    return await getPeopleById(id);
  };

  showPerson = async (id) => {
    const person = await this.findPerson(id);
    console.log("showPerson: ", person);
    if (person != null) {
      this.setState({
        detailsPerson: person,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsPerson: null,
    });
  };

  //------------- Create Person partial show and close
  showCreatePerson = () => {
    this.setState({
      createPerson: true,
    });
  };

  closeCreate = () => {
    this.setState({
      createPerson: false,
    });
  };

  addPerson = async (person) => {
    const personList = this.state.personList;
    console.log(
      "addPerson before api call: " + person.Name,
      person.CityId,
      person.Phone
    );
    person = await createPerson(person);

    if (person !== undefined) {
      console.log("After backend:" + person.name, person.cityId, person.phone);
      personList.push(person);
    }

    this.setState({
      personList: personList,
      createPerson: false,
    });
  };

  deletePersonHandler = (id) => {
    const person = this.findPerson(id);
    if (person != null) {
      if (deletePerson(id)) {
        const persons = this.state.personList;

        let personIndex = -1;
        for (let i = 0; i < persons.length; i++) {
          if (persons[i].id === id) {
            personIndex = i;
          }
        }

        if (personIndex > -1) {
          persons.splice(personIndex, 1);
          this.setState({
            personList: persons,
            detailsPerson: null,
          });
        }
      }
    }
  };

  sortPersonTable = () => {
    const sortList = this.state.personList;
    sortList.sort((a, b) => (a.name > b.name ? 1 : -1));

    this.setState({
      personList: sortList,
    });
  };
  
  render() {
    const sideElement =
      this.state.detailsPerson != null ? (
        <PersonDetails
          person={this.state.detailsPerson}
          closeDetails={this.closeDetails}
          removePerson={this.deletePersonHandler}
        />
      ) : this.state.createPerson ? (
        <PersonCreate
          addPerson={this.addPerson}
          closeCreate={this.closeCreate}
          cityArray={this.state.cityList}
          countryArray={this.state.countryList}
        />
      ) : (
        <div margin className="col-md-6">
          <button onClick={this.showCreatePerson} className="btn btn-success">
            Add Person
          </button>

          <button onClick={this.sortPersonTable} className="btn btn-secondary">
            Sortera på namn
          </button>
        </div>
      );

    return (
      <React.Fragment>
        <Header />

        <div className="container stay-clear">
          <h3>People SPA :D</h3>
          <hr />
          <div className="row">
            <PersonTable
              persons={this.state.personList}
              showPerson={this.showPerson}
            />
            {sideElement}
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
