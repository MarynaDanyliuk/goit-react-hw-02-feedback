import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = event => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    console.log('Кликнули Good');
    console.log(this);
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    console.log('Кликнули Neutral');
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    console.log('Кликнули Bad');
  };

  render() {
    return (
      <section className={css.statistics}>
        <h1 className={css.title}>Please leave feedback</h1>
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
        </ul>
        <p>Statistics</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </section>
    );
  }
}

// export const Statistics = ({ title, stats }) => {};

Statistics.propTypes = {
  title: PropTypes.string,
  // stats: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     percentage: PropTypes.number.isRequired,
  //   })
  // ),
};
