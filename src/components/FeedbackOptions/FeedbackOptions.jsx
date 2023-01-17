import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { onHandleGood, onHandleNeutral, onHandleBad } = options;
  //   const {} = onLeaveFeedback;

  return (
    // if(зібрано хоч одін відгук)
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

FeedbackOptions.propTypes = {
  options: PropTypes.shape(),
};
