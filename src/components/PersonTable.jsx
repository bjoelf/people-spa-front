import React from "react";

const PersonTable = (props) => {
  const rows = props.persons.map((person) => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.phone}</td>
        <td>{person.city}</td>
        <td>{person.language}</td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default PersonTable;
