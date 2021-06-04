import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonTable from "./personTable";
import getPeople, { getPeopleById, createPerson, deletePerson } from "../api/personApi";
import PersonDetails from "./personDetails";
import PersonCreate from "./personCreate";

class App extends Component {
  state = {
    personList: [],
    detailsPerson: null,
    createPerson: false,
  };

  componentDidMount() {
    const _this = this;
    getPeople().then((people) => {
      _this.setState({ personList: people });
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
  showCreatePerson =() =>{
    this.setState({
      createPerson:true,
    });
  };

  closeCreate =() =>{
    this.setState({
      createPerson:false,
    });
  };

  addPerson = async (person) =>{
    const personList = this.state.personList;
    person = await createPerson(person);
    console.log(person);

    if(person !== undefined){
      personList.push(person);
    }

    this.setState({
      personList: personList,
      createPerson: false,
    });
  };

  deletePersonHandler =(id) =>{
    const person = this.findPerson(id);
    if (person != null ){
      if (deletePerson(id)){
        const persons= this.state.personList;
        persons.forEach((element) => {
          if(element.id ===id){
            persons.pop(element);
          }
        });
        this.setState({
          personList: persons,
          detailsPerson: null,
        });
      }
    }
  };

  render() {
    const sideElement =
      this.state.detailsPerson != null ? (
        <PersonDetails
          person={this.state.detailsPerson}
          closeDetails={this.closeDetails}
          deletePerson={this.deletePerson}

        />
      ) : this.state.createPerson ? (
        <PersonCreate
          addPerson={this.addPerson}
          closeCreate={this.closeCreate}
        />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreatePerson} className="btn btn-success">
            Add Person
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
