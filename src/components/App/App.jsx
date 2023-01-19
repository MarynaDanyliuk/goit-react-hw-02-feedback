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
    return good + neutral + bad;
    // return total;
  };

  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    return ((good / (good + neutral + bad)) * 100 || 0).toFixed();
    // return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: `column`,
          marginLeft: 40,
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
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
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state,
              this.countTotalFeedback
            )}
          />
        </Section>
      </div>
    );
  }
}
