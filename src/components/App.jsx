import { useState} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section'
import { Notification } from './Notification/Notification';
import { Container } from './Container.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['Good', 'Neutral', 'Bad'];
  // let total = 0;
  let total = good + neutral + bad;
  let result = 0;

  if (total > 0) {
      result = Math.round(good / total * 100);
  };

  const countFeedback = (e) => {
      const option = e.target.textContent;
      switch (option) {
        case 'Good':
          // setGood(good + 1)
          setGood((prev)=> prev + 1)
          break;
        case 'Neutral':
          // setNeutral(neutral + 1)
          setNeutral((prev)=> prev + 1)
          break;
        case 'Bad':
          setBad((prev)=> prev + 1)
          break;
        default:
          break;
    }
  }
  

  return (
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={countFeedback}/>
          </Section>
          <Section title="Statistics">
            {total > 0
              ?(<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={result} />)
              :(<Notification message="There is no feedback" />)}
          </Section>
        </Container>
      )
};
