const nation = {
    name: "Korea",
    population: 5140,
    capital: "Seoul",
    language: "Korean"
}

const nations = [{
    name: "Korea",
    population: 5140,
    capital: "Seoul",
    language: "Korean"

},
{ 
    name: "Portugal",
    population: 1033,
    capital: "Paris",
    language: "French"
},
{
    name: "Uruguay",
    population: 342,
    capital: "Montevideo",
    language: "English"
},
{
    name: "Ghana",
    population: 3283,
    capital: "Accra",
    language: "English"
}
]

const Info = () => {
    return (
        <div className="info-page page">
            <h2>Info</h2>
            <p>{nation.name}, {nation.population}, {nation.capital}, {nation.language}</p>
            {nations.map(n => ( //<-- 여기 소괄호
                <p>{n.name}, {n.population}, {n.capital}, {n.language}</p>

            ))}
        </div>
    );
}
export default Info;