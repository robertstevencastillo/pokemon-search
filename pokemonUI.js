class UI {
    constructor() {
        this.output = document.querySelector('.output-container')
    }

    showPokemon(pokemon) {
        console.log(pokemon)
        this.output.innerHTML = `
        <div class="card">
            <img class="card-img-top poke-image" src="https://img.pokemondb.net/artwork/${pokemon.pokemon.name}.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${pokemon.pokemon.name}</h5>
                <p class="card-text">Primary Ability: ${pokemon.pokemon.abilities[0].ability.name} <br><br><span style="text-transform:capitalize;">Description of ${pokemon.pokemon.name}'s Abilities</span>: <br>${pokemon.abilityDesc}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" style="text-transform:capitalize;">Primary Type: ${pokemon.primaryType}</li>
                <li class="list-group-item">Pokemon In Game Image Sprite: <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.id}.png"></li>
              
            </ul>
            <div class="card-body">
                <a href="http://pokemon.wikia.com/wiki/${pokemon.pokemon.name}" class="card-link" target="_blank">View ${pokemon.pokemon.name}'s Bio</a>
                <a href="https://www.pokemon.com/us/pokedex/${pokemon.pokemon.name}" class="card-link" target="_blank">View ${pokemon.pokemon.name}'s Pokedex Entry</a>
            </div>
        </div>`
    }

    showMessage(message, className) {
        this.clearMessage();
        let container = document.querySelector('.container')
        let outputContainer = document.querySelector('.output-container');
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, outputContainer);

        window.setTimeout(() => {
            this.clearMessage();
        }, 5000)

    }

    clearMessage() {
        let currentMessage = document.querySelector('.alert');
        if (currentMessage) {
            currentMessage.remove();
        }
    }

    resetForm() {
        document.querySelector('form').reset();
    }

} //END UI CLASS

//https://img.pokemondb.net/artwork/${pokemon.name}.jpg

/*
  <li class="list-group-item" style="text-transform:capitalize;">Evolves Into: ${pokemon.evolutions.chain.evolves_to[0].species.name} <img src="https://img.pokemondb.net/artwork/${pokemon.evolutions.chain.evolves_to[0].species.name}.jpg"></li> For Some Reason, it doesn't send back the proper evolve form, will figure out another time.
  
  */