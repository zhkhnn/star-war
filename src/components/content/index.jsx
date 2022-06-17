import {useState} from 'react';
import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { Items } from "../items";

import { ItemLists } from "../item-list";
export const Content = ({mode}) =>{
  const [selector, setSelector] = useState("Characters");
  const handleSelectorChange = (event) =>{
    setSelector(event.target.value)
  }
  
    return <>
    <div className={`content-layout ${mode}`}>
        <select value={selector} onChange={handleSelectorChange} placeholder="Choose your path" className="select-item">
          <option>Characters</option>
          <option>Planets</option>
          <option>Starships</option>
        </select>
{selector==="Characters" && swCharacters.map((character)=>(

<ItemLists item={character} type="chars" key={character.name} mode={mode}>
  <Items>gender: {character.gender}</Items>
  <Items>birthday: {character.birth_year}</Items>
</ItemLists>

        ))}
{selector==="Planets" && swPlanets.map((planet)=>(

<ItemLists item={planet} type="planets" key={planet.name} mode={mode}>
  <Items>Rotation Period: {planet.rotation_period}</Items>
  <Items>Orbital Period: {planet.orbital_period}</Items>
</ItemLists>
))}
 {selector==="Starships" && swStarships.map((starship)=>(

<ItemLists item={starship} type="starships" key={starship.name} mode={mode}>
  <Items>Model: {starship.model}</Items>
  <Items>Crew: {starship.crew}</Items>
</ItemLists>
))}

      </div>
    </>
}