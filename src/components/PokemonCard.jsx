import React from 'react'
import CustomFetch from '../customHooks/CustomFetch'

function PokemonCard(props) {
    const fetch = CustomFetch({ url: "https://pokeapi.co/api/v2/pokemon", name: props.pokemonName })
    return (
        <div>


{!fetch.loading && fetch.data.length !== 0 ?
                <>
                   <h1>{props.pokemonName.toUpperCase()}</h1>

                    <h2>Stats</h2> 
                    {fetch.data.stats.map((item) => {
                        return <p>{item.stat.name} : {item.base_stat}</p>
                    })}


                        <h2>Abilities</h2>

                        {fetch.data.abilities.map((abilityy) => {
                            return <p>{abilityy.ability.name}</p>
                        })}


                    <img src={fetch.data.sprites.front_shiny} alt="" />


                </> : null
            }
</div>

       
        
    )
}

export default PokemonCard