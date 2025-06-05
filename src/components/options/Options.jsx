import { useState } from 'react';


function Options({ updateFeedback }) {


  return (
    <div className="optionSection">

    <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button >Reset</button>
   
    </div>
  );
}

export default Options;
