import React from 'react';
import creationpopup from '../cssFiles/creationpopup.modules.css';

const Creation = (props) => {
  // do stuff and things here
  if (props.creationPopup) {
    return (<div>
              <div class={creationpopup.bg}>
                <div class={creationpopup.content_box}>
                  <span class={creationpopup.close} onClick={props.toggleCreationPopup}>&times;</span>
                  <br></br>
                  <h1>This is where the character creation magic will happen</h1>
                  <br></br>
                  <form>
                    <label for="race">Choose a Race:</label>
                    <select name="race" id="race">
                      <option value="" selected disabled hidden>Choose race</option>
                      <optgroup label="Human">
                        <option value="hardy">Hardy and Strong Human</option>
                        <option value="small">Small and Slender Human</option>
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
                    <br></br>
                    <input type="submit" value="Submit"></input>
                  </form>
                </div>
              </div>
            </div>)
  } else {
    return (<div></div>);
  }
}

export default Creation;