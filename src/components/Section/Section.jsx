import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

// export class Section extends React.Component {
//   static defaultProps = {
//     title: 'Please leave feedback',
//     initialGood: 0,
//     initialNeutral: 0,
//     initialBad: 0,
//   };
//   static propTypes = {
//     //   ___
//   };
//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutral,
//     bad: this.props.initialBad,
//   };
//   handleGood = event => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//     console.log('Кликнули Good');
//     console.log(this);
//   };

//   handleNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//     console.log('Кликнули Neutral');
//   };

//   handleBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//     console.log('Кликнули Bad');
//   };

//   countTotalFeedback() {
//     return {};
//   }

//   countPositiveFeedbackPercentage() {
//     return {};
//   }

//   render() {
//     const { title } = this.props;
// const options = {
//   onHandleGood: this.handleGood,
// };
// this.handleGood = options.onHandleGood;
// const options = [this.handleGood, this.handleNeutral, this.handleBad];
// this.handleGood = options[0];
// const {(onHandleGood=this.handleGood), onHandleNeutral=this.handleNeutral, onHandleBad=this.onHandleBad} = options
// const { onHandleGood, onHandleNeutral, onHandleBad } = options;
//   onHandleGood, onHandleNeutral, onHandleBad;
// return (
//   <div className={css.section}>
//     <h1 className={css.title}>{title}</h1>

/* <FeedbackOptions
          //   options={(this.handleGood, this.handleNeutral, this.handleBad)}
          options
          onLeaveFeedback
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        /> */

/* <ul className={css['button-list']}>
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

/* <p>Statistics</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage}</li>
        </ul> */

//       </div>
//     );
//   }
// }
