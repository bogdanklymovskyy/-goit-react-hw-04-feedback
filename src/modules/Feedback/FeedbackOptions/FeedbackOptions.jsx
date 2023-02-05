import PropTypes from 'prop-types';
import Button from 'utils/components/Button/Button';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return options.map(name => (
    <Button key={name} onClick={() => onLeaveFeedback(name)} type="button">
      {name}
    </Button>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
