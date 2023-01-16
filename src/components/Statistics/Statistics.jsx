import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, key }) => {
  return (
    <ul className={css.statistics}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      {/* <li>Total: {countTotalFeedback}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage}</li> */}
    </ul>
  );
};
// export const Statistics = ({ title, stats }) => {};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  // stats: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     percentage: PropTypes.number.isRequired,
  //   })
  // ),
};

// ________________
/* <h1 className={css.title}>Please leave feedback</h1>
        <ul className={css['button-list']}>
          <li>
            <button type="button" onClick={this.handleGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleBad}>
              Bad
            </button>
          </li>
        </ul> */
// ________________
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
// handleGood = event => {
//   this.setState(prevState => {
//     return {
//       good: prevState.good + 1,
//     };
//   });
//   console.log('Кликнули Good');
//   console.log(this);
// };

// handleNeutral = () => {
//   this.setState(prevState => {
//     return {
//       neutral: prevState.neutral + 1,
//     };
//   });
//   console.log('Кликнули Neutral');
// };

// handleBad = () => {
//   this.setState(prevState => {
//     return {
//       bad: prevState.bad + 1,
//     };
//   });
//   console.log('Кликнули Bad');
// };
// _____допоміжні методи на обчислювальних даних____
// countTotalFeedback() {
//   return {};
// }

// countPositiveFeedbackPercentage() {
//   return {};
// }
// _____поставити елементи як рендер за умовою______
