import axios from "axios";

const apiAdress = "https://localhost:44386/api/Api/";

export default function getPeople() {
  console.log("api getPeople");
  return fetch(apiAdress).then((data) => data.json());
}

export async function getPeopleById(id) {
  try {
    console.log("api getPeopleById: " + id);
    let response = await fetch(apiAdress + id);
    let json = await response.json();
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}

export async function createPerson(person) {
  try {
    console.log("api createPerson: " + person);
    let response = await axios.post(apiAdress, {
      Name: person.Name,
      Phone: person.Phone,
      City: person.City,
      Country: person.Country,
      Language: person.Language,
    });
    console.log(response);
    let json = await response.data();

    return json;
  } catch (e) {
    console.log("Error", e);
  }
}

export async function deletePerson(id) {
  try {
    console.log("api deletePerson: " + id);
    let response = await axios.delete(apiAdress + id);
    console.log(response);

    return true;
  } catch (e) {
    console.log("Error!", e);
    return false;
  }
}
