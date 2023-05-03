import React from 'react'

function SideBar(props) {
    function handlePokNameSide(e){
       props.handlePokemonMain(e)
       console.log('clicked')
    }
  return (
    <div>
     
    {/* jsx */}
     {props.data.results.map((item)=>{
            return <li key = {item.name} onClick = {handlePokNameSide}> {item.name} </li>
        })}
        <div>
        {props.data.previous !== null ? <button value={props.data.previous} onClick={props.buttonUrlHandler}>Previous</button> : null}
            
            <button value={props.data.next} onClick={props.buttonUrlHandler} >Next</button>
        </div>
    </div>
    
  







 
  )
}

export default SideBar