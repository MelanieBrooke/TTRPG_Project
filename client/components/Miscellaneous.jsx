import React from 'react';

const Miscellaneous = (props) => {
  // do stuff and things here
  if (props.tab === 2) {
    return (<h1>This Spot Reserved for Miscellaneous Page</h1>)
  } else {
    return (<div></div>);
  }
}

export default Miscellaneous;