import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

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

  active = () => {
    this.setState(prevState => {
      return { good: prevState.good > 0 };
    });
    // if (this.setState(prevState => {
    // return { neutral: !prevState.neutral };
    // }))
    //   if (this.setState(prevState => {
    // return { bad: !prevState.bad };
    //   }))
    //     else return
  };

  handleGood = event => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    console.log('Кликнули Good');
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

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: `column`,
          marginLeft: 40,
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              onHandleGood: this.handleGood,
              onHandleNeutral: this.handleNeutral,
              onHandleBad: this.handleBad,
            }}
            onLeaveFeedback={{
              key: this.active,
            }}
          />
        </Section>

        <Section title="Statistics">
          <Notification message="There is no feedback"></Notification>
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
      </div>
    );
  }
}
