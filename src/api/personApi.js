import axios from "axios";

const apiAdress = "https://localhost:44386/api/";

export default function getPeople() {
  console.log("api getPeople");
  return fetch(apiAdress + "Api/").then((data) => data.json());
}

export async function getCities() {
  console.log("api getCities");
  return fetch(apiAdress + "Cities/").then((data) => data.json());
}

export async function getCountries() {
  console.log("api getCountries");
  return fetch(apiAdress + "Countries/").then((data) => data.json());
}

export async function getPeopleById(id) {
  try {
    console.log("api getPeopleById: " + id);
    let response = await fetch(apiAdress + "Api/" + id);
    let json = await response.json();
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}


//Properties måste matcha view model, createPerson
export async function createPerson(person) {
  try {
    console.log("api createPerson: " + person.Name, person.CityId, person.Phone);
    let response = await axios.post(apiAdress + "Api/", {
      Name: person.Name,
      Phone: person.Phone,
      CityId: person.CityId, //ändrade från City
      Country: person.Country,
      Language: person.Language,
    });
    console.log("createPerson Respons:", response);
    let json = await response.data;

    return json;
  } catch (e) {
    console.log("Error", e);
  }
}

export async function deletePerson(id) {
  try {
    console.log("api deletePerson: " + id);
    let response = await axios.delete(apiAdress + "Api/" + id);
    console.log(response);

    return true;
  } catch (e) {
    console.log("Error!", e);
    return false;
  }
}
