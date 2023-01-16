import React from 'react';
// import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { onHandleGood, onHandleNeutral, onHandleBad } = options;
  //   const {} = onLeaveFeedback;

  return (
    <ul className={css['button-list']}>
      <li>
        <button type="button" onClick={onHandleGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onHandleNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onHandleBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

// export default FeedbackOptions;

FeedbackOptions.propTypes = {
  //   options: PropTypes.arrayOf(PropTypes.shape),
  // title: PropTypes.string,
  // stats: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     percentage: PropTypes.number.isRequired,
  //   })
  // ),
};
