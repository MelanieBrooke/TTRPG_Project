import React from 'react';

const Character = (props) => {
  // do stuff and things here
  if (props.tab === 0) {
    return (<div>
              <br></br>
              <br></br>
              <button onClick={props.toggleCreationPopup}>Character Creation</button>
              <br></br>
              <br></br>
              <h1>Character Page Under Construction</h1>
            </div>)
  } else {
    return (<div></div>);
  }
}

export default Character;