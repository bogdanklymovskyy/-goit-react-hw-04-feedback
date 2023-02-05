import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
