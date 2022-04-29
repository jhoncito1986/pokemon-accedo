const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000'
const wrapper = document.getElementById("list")
const title = document.getElementById("title")

window.onload = function(){
    fetch(url)
    .then(response => response.json())
    .then(json =>{
        title.innerText = `${json.count} Pokemones`;
        wrapper.innerText = '';
        console.log(json);
        json.results.forEach((pokemon, index) => {
            wrapper.innerHTML += `
            <div class="card radius-10 bg-white box-shadow m-10">
                <img id='img${index}' class="img-card" src="http://via.placeholder.com/300x200" alt="#Imagen de ${pokemon.name}">
                <div class="py-20 px-15">
                    <h2 class='text-center capitalize'>${pokemon.name}</h2>
                    <a href='/detalle.html?id=${index+1}' class="btn btn-primary">Detalles</a>
                </div>
            </div>
            `;
            loadImage(pokemon.url, index)
            
        });

        
    })
}

function loadImage(urlImg, index){
    fetch(urlImg)
    .then(response => response.json())
    .then(_json => {
        document.getElementById(`img${index}`).src = _json.sprites.back_default
    })
}