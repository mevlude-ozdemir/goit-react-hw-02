


function Options({ updateFeedback, resetFeedback, hasFeedback }) {


  return (
    <div className="options">

    <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {hasFeedback && (
        <button onClick={resetFeedback}>Reset</button>
      )}
   
    </div>
  );
}

export default Options;
