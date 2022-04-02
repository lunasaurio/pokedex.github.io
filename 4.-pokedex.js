const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://c.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            //Imagen
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            
            //NOMBRE DEL POKEMON
            let nombre = data.species.name;
            console.log(nombre);
            agregarNombre(nombre);

            //TIPO DE POKEMON
            let tipo = data.types[0].type.name;
            console.log(tipo);
            agregarTipo(tipo);

            //ESTADISTICA DEL POKEMON
            let estadisticas = data.stats;
            //console.log(estadisticas);
            let estadistica = [];
            for(let i=0; i<estadisticas.length; i++){
                estadistica.push(estadisticas[i].stat.name);
            }
        }
            //console.log(estadistica);
            let estadisticaUnida = estadistica.join();
            //console.log(estadisticaUnida);
            agregarEstadistica(estadisticaUnida);
        
    });
}

function play() {
    var audio = document.getElementById("audio");
    audio.play()
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const agregarNombre = (nombre) => {
    const idNombre = document.getElementById("nombre");
    idNombre.innerHTML = "Nombre: " + nombre;
}

const agregarTipo = (tipo) =>{
    const idTipo = document.getElementById("tipo");
    idTipo.innerHTML = "Tipo: " + tipo;
}

const agregarEstadistica = (estadistica) =>{
    const idEstadistica = document.getElementById("estadistica");
    idEstadistica.innerHTML = "Estadisticas: " + estadistica;
}