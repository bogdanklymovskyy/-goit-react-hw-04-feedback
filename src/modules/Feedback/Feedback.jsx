import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from '../../utils/components/Notification/Notification';

const Feedback = () => {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = rating;
  const total = good + neutral + bad;

  const onLeaveFeedback = name => {
    setRating(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countPositiveFeedbackPercentage = name => {
    if (!total) {
      return 0;
    }
    return Math.round((rating[name] / total) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(rating)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage('good')}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Feedback;
