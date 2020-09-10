import React, { Component } from 'react';
import styles from './AppFeedback.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class AppFeedback extends Component {
  static propTypes = {};
  static defaultProps = {initialValue: 0, step: 1};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue
  }

  handleIncrement = (e) => {
    const setBtn = e.target.dataset.source;
    this.setState ((prevState, props) => {
      return {
        [setBtn]: prevState[setBtn] + props.step,
      }
    })
  } 

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) /  this.countTotalFeedback());
  }


  render() {
    const btnKeys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const {good, neutral, bad} = this.state;
    return (
      <>
        <Section title='Please leave feedback' >
          <FeedbackOptions 
          options={btnKeys} 
          onLeaveFeedback={this.handleIncrement} />
        </Section>
        <Section title='Statistic'>
        {total > 0
        ? <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={positive} />
        : <Notification message='No feedback given' />
        }
        </Section>
      </>
    );
  }
}

export default AppFeedback;