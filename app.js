const url1 = "https://swapi.dev/api/people/"
const url2 = 'https://swapi.dev/api/people/?page=2'

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const personajesJSON = await data.results
    console.log(personajesJSON)
    return personajesJSON
}

const agregarPersonaje = () =>{
    
}

$(document).ready(function () {
    const addCards = async (selector, rowSelector, startIndex, endIndex, url, color) => {
        let index = startIndex; 
        const personajes = await getData(url);  

        $(selector).mouseenter(function () {
            if (index < personajes.length && index < endIndex) {
                const personaje = personajes[index];
                $(rowSelector).append(`
                    <div class="col-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <span class="${color} rounded-circle d-inline-block" style="width: 20px; height: 20px;"></span>
                                <span class="card-text">
                                    ${personaje.name}
                                    <ul> 
                                        <li>Estatura: ${personaje.height}</li>
                                        <li>Peso: ${personaje.mass}</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                `);
                index++;
            }
        });
    };

    addCards('#card1', '#row1', 0, 5, url1, "bg-danger");

    addCards('#card2', '#row2', 5, 10, url1, "bg-success");

    addCards('#card3', '#row3', 0, 5, url2, "bg-info")
});