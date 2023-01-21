import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options }, onLeaveFeedback) => {
  const { onHandleGood, onHandleNeutral, onHandleBad } = options;

  return (
    <ul className={css['button-list']}>
      <li>
        <button className={css.button} type="button" onClick={onHandleGood}>
          Good
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={onHandleNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={onHandleBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape(),
};
