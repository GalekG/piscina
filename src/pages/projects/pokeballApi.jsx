import { useEffect, useState } from "react";
import pokeball from '../../assets/pokeball.png';
import openPokeball from '../../assets/openPokeball.png';

const PokeballApi = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokes, setPokes] = useState([]);
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemones(data.results);
      });
  }, []);

  function listarPokes() {
    if(!pokes.length){
      for (let i = 0; i < pokemones.length; i++) {
        setPokes((pokes) => [pokes, <small key={i}>{pokemones[i].name}</small>]);
      }
    }else{
      setPokes([]);
    }
  }

  return (
      <header className="App-header-pokeapi">
        <input className="btnClass" id="imgBase" type='image' onClick={listarPokes} src={pokeball} onMouseOver={()=>{
          document.getElementById('imgBase').src = openPokeball;
        }} onMouseLeave={()=>{
          document.getElementById('imgBase').src = pokeball;
        }} alt='Pokeball Button'></input>
        {pokes}
      </header>
  );
}

export default PokeballApi;