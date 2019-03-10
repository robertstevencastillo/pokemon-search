class Pokemon {

    async getPokemon(pokemonName) {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const pokemonData = await pokemonResponse.json();

        let abilityName = pokemonData.abilities[0].ability.name
        const abilityResponse = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
        const abilityData = await abilityResponse.json();

        let pokemonID = pokemonData.id
        const evolutionResponse = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonID}`);
        const evolutionData = await evolutionResponse.json();
        console.log(evolutionData);

        return {
            pokemon: pokemonData,
            evolutions: evolutionData,
            abilityDesc: abilityData.effect_entries[0].effect,
            primaryAbility: pokemonData.abilities[0].ability.name,
            primaryType: pokemonData.types[0].type.name,
        }
    }
}

/*GetPokemon Prototype is returning a few things
1) It's returning the response data object from the pokemon which contains additional objects and properties about the pokemon's height, weight etc.
2) It's returning specifically, the description of the pokemon's abilities, if I just returned abilityData, it would return data similar to pokemonData, but instead return objects and properties concerining the pokemon's abilities
3) The rest of these properties are just properties from the pokemonData object
*/