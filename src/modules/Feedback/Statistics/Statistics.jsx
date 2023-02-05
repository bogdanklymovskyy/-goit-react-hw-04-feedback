import PropTypes from 'prop-types';
import styles from '../Feedback.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.statisitcsVote}>Good: {good}</p>
      <p className={styles.statisitcsVote}>Neutral: {neutral}</p>
      <p className={styles.statisitcsVote}>Bad: {bad}</p>
      <p className={styles.statisitcsVote}>Total: {total}</p>
      <p className={styles.statisitcsVote}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
