import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  static propTypes = {
    //   ___
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleGood = event => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    console.log('Кликнули Good');
    // console.log(this);
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

  countTotalFeedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    const positivePercentage = (good / (good + neutral + bad)) * 100 || 0;
    return positivePercentage;
  }

  // countTotalFeedback = () => {
  //   // return {
  //   //   // total: this.initialTotal,
  //   //   // total: this.state.good + this.state.neutral + this.state.bad,
  //   // };
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return {
  //     positivePercentage:
  //       (this.state.good /
  //         (this.state.good + this.state.neutral + this.state.bad)) *
  //         100 || 0,
  //   };
  // };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback" children>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>

        <Section title="Statistics">
          <FeedbackOptions
            options={{
              onHandleGood: this.handleGood,
              onHandleNeutral: this.handleNeutral,
              onHandleBad: this.handleBad,
            }}
            onLeaveFeedback={''}
          />
        </Section>
      </div>
    );
  }
}
