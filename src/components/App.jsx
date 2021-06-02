import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonTable from "./PersonTable";

//import CarDetails from "./CarDetails";
//import CarCreate from "./CarCreate";

import getPeople from "../api/personApi";


class App extends Component {
  state = {
    personList: [],
  };

  componentDidMount() {
    const _this = this;
    getPeople().then((people) => {
      _this.setState({ personList: people });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="container stay-clear">
          <h3>People SPA :D</h3>
          <hr />
          <div className="row">
            <PersonTable persons={this.state.personList} showPerson={this.showPerson} />
           
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
