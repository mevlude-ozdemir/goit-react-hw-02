// import "./App.css";
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

  // 

  return(
    <>
      <div><Description /></div>
      <div><Options updateFeedback={updateFeedback} /></div>
      <div><Feedback good={values.good} neutral={values.neutral} bad={values.bad} /></div>
    </>
  );
}

export default App;
