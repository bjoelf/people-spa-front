
export default function getPeople() {
    return fetch('https://localhost:44386/api/Api')
        .then(data => data.json());
}
