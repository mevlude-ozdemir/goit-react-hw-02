import "./App.css";
import { useState } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

    const updateFeedback = (feedbackType) => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

    const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  const hasFeedback = values.good + values.neutral + values.bad > 0;

  // 

  return(
    <div className="app">
      <div className="description-box"><Description /></div>
      <div className="options-box"><Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} hasFeedback={hasFeedback} /></div>
      <div className="feedback-box"><Feedback good={values.good} neutral={values.neutral} bad={values.bad} /></div>
    </div>
  );
}

export default App;
