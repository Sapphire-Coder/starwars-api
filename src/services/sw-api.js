export default function getAllStarships () {
    return (
        fetch('https://swapi.dev/api/starships/')
            .then(res => res.json())
    )
}