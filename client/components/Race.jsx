import React from 'react';

const Race = (props) => {
  return (
    // <form>
      // <label for="race">Choose a Race:</label>
      <select value={props.race} name="race" id="race" onChange={props.handleChange}>
        <option value="" selected disabled hidden>select one</option>
        <optgroup label="Human">
          <option value="hardy">Hardy, Strong Human</option>
          <option value="small">Small, Slender Human</option>
          <option value="middle">Average Human</option>
        </optgroup>
        <optgroup label="Elf">
          <option value="winged">Winged Elf</option>
          <option value="red">Red Elf</option>
          <option value="mystic">Mystic Elf</option>
        </optgroup>
        <optgroup label="Elemental">
          <option value="fire">Fire Elemental</option>
          <option value="ice">Ice Elemental</option>
          <option value="earth">Earth Elemental</option>
          <option value="storm">Storm Elemental</option>
        </optgroup>
        <optgroup label="Undead">
          <option value="vampire">Vampire</option>
          <option value="ghoul">Ghoul</option>
          <option value="skeleton">Skeleton</option>
        </optgroup>
        <optgroup label="Felinus">
          <option value="tiger">Tiger-Folk</option>
          <option value="lion">Lion-Folk</option>
          <option value="panther">Panther-Folk</option>
        </optgroup>
        <optgroup label="Canus">
          <option value="fox">Fox-Folk</option>
          <option value="dog">Dog-Folk</option>
          <option value="wolf">Wolf-Folk</option>
        </optgroup>
        <optgroup label="Reptus">
          <option value="salamander">Salamander-Folk</option>
          <option value="snake">Snake-Folk</option>
          <option value="dragon">Dragon-Folk</option>
        </optgroup>
        <optgroup label="Rodentus">
          <option value="rat">Rat-Folk</option>
          <option value="mouse">Mouse-Folk</option>
          <option value="ferret">Ferret-Folk</option>
        </optgroup>
        <optgroup label="Goblin">
          <option value="tinker">Tinker Goblin</option>
          <option value="underground">Underground Goblin</option>
          <option value="wood">Wood Goblin</option>
        </optgroup>
        <optgroup label="Woodfolk">
          <option value="spriggan">Spriggan</option>
          <option value="sprite">Sprite</option>
        </optgroup>
      </select>

  )
}

export default Race;