import Notification from "../notification/Notification";

function Feedback({ good, neutral, bad }) {
  const totalFeedback = good + neutral + bad;

  if (totalFeedback === 0) {
    return <Notification message="No feedback yet." />;
  }

  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div className="feedback">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>
        <strong>Total: {totalFeedback}</strong>
      </p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
