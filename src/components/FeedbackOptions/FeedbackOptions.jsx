import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

// import { Notification } from 'components/Notification/Notification';

export const FeedbackOptions = ({ options }, onLeaveFeedback) => {
  const { onHandleGood, onHandleNeutral, onHandleBad } = options;

  // const { key } = onLeaveFeedback;

  // const buttonsId = ['01', '02', '03'];
  // const btnActive = buttonsId[0];

  // 'btn_active';

  return (
    <ul className={css['button-list']}>
      <li>
        <button className={css.btn} type="button" onClick={onHandleGood}>
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

// key = { key };

// {
//   stats.map(stat => (
//     <li key={stat.id} className={css.item}>
//       <span className={css.label}>{stat.label}</span>
//       <span className={css.percentage}>
//         {stat.percentage}
//         {`%`}
//       </span>
//     </li>
//   ));
// }
