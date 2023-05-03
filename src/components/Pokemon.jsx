import React from 'react'
import CustomFetch from '../customHooks/CustomFetch'
import { useState } from 'react';
import SideBar from './SideBar';
import PokemonCard from './PokemonCard'

function Pokemon() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const fetch = CustomFetch({ url: url });
    const [activePokemon, setActivePokemon] = useState('bulbasaur')

function handlePokemonMain(e){
    setActivePokemon(e.target.innerText);
}
function handleUrl(e){
setUrl(e.target.value)
}
  return (
    <div>
        {!fetch.loading && fetch.data.length !== 0 ? <SideBar data ={fetch.data} handlePokemonMain={handlePokemonMain}  buttonUrlHandler = {handleUrl}/> :null }

<PokemonCard pokemonName = {activePokemon} />
    </div>
  )
}

export default Pokemon