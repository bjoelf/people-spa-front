import axios from "axios";

const apiAdress = "https://localhost:44386/api/";

export default function getPeople() {
  console.log("api getPeople");
  return fetch(apiAdress + "Api/").then((data) => data.json());
}