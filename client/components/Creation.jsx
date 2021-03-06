import React from 'react';
import creationpopup from '../cssFiles/creationpopup.modules.css';
import Race from './Race.jsx';

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
                  <form onSubmit={props.handleSubmit}>
                  <label for="race">Choose a Race:</label>
                  <Race
                  handleChange={props.handleChange}
                  race={props.creation.race}
                   />
                  <br></br>
                  <input type="submit" value="Save Character" onSubmit={props.handleSubmit}></input>
                </form>
                </div>
              </div>
            </div>)
  } else {
    return (<div></div>);
  }
}

export default Creation;