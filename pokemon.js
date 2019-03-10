let pokemonSearchButton = document.querySelector('.search-pokemon-button')
// let randomPokemonSearchButton = document.querySelector('.random-pokemon-button')

pokemonSearchButton.addEventListener('click', (event) => {
    event.preventDefault();
    const pokemon = new Pokemon;
    let ui = new UI;
    let pokemonEntered = document.getElementById('pokemon-search-box')


    //Once Promise is resolved, the output container's innerHTML will be overwrriten with the Pokemon's Information
    pokemon.getPokemon(pokemonEntered.value)
        .then(pokemon => {
            if (pokemon === '' || pokemon >= 0 || pokemon < 803) {
                ui.resetForm();
                ui.showMessage('Please Enter A Valid Pokemon Name', 'alert alert-danger')
            } else {
                //Play Gif Before Promise is resolved
                document.querySelector('.output-container').innerHTML = `<div><img src="https://imagesmtv-a.akamaihd.net/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/08/tumblr_mmff7iUxxv1qhd8sao1_500-1439237403.gif?quality=.8&height=269&width=500"
                id="goPokemon" width="70%" style="display:block; margin:0 auto; text-align:center;"></div>`

                //The Pokemon Will Appear 1 second after this code is ran, which gives enough time for the gif to display it's entire animation
                window.setTimeout(() => {
                    ui.showPokemon(pokemon);
                    ui.resetForm();
                }, 1000)

            }
        }).catch(pokemon => {
            ui.resetForm();
            ui.showMessage('Search is Invalid or Pokemon Not Found', 'alert alert-danger')
            //Catch is for 404 AJAX Request Errors
        })
}) //END EVENT LISTENER FOR POKEMON SEARCH BUTTON

/*
randomPokemonSearchButton.addEventListener('click', (event) => {
    event.preventDefault();
    let pokemonEnteredRandom = document.getElementById('pokemon-random-search-box')
    const pokemon = new Pokemon;
    let ui = new UI;

    //Play Gif Before Promise is resolved
    document.querySelector('.output-container').innerHTML = `<img src="https://imagesmtv-a.akamaihd.net/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/08/tumblr_mmff7iUxxv1qhd8sao1_500-1439237403.gif?quality=.8&height=269&width=500"
     id="goPokemon" width="100%" style="display:block;">`

    //Once Promise is resolved, the output container's innerHTML will be overwrriten with the Pokemon's Information
    pokemon.getPokemon(pokemonEnteredRandom.value)
        .then(pokemon => {
            if (pokemonEnteredRandom.value < 803 && pokemonEnteredRandom.value >= 0) {
                ui.showPokemon(pokemon)
                ui.resetForm();
            }
        }).catch(pokemon => {
            ui.showMessage('Please Enter A Number Between 0 and 802', 'alert alert-danger')
        })

}) //END EVENT LISTENER FOR RANDOM POKEMON SEARCH BUTTON */