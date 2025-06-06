import "./App.css";
import { useState, useEffect } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";

const LOCAL_STORAGE_KEY = "feedbackData";


function App() {

  const [values, setValues] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : { good: 0, neutral: 0, bad: 0 };
  });

   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
  }, [values]);

    const updateFeedback = (feedbackType) => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
  const resetValues = { good: 0, neutral: 0, bad: 0 };
  setValues(resetValues);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resetValues));
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
