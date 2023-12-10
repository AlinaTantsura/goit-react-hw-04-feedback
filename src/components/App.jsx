import {useState} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section'
import { Notification } from './Notification/Notification';
import { Container } from './Container.styled';


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countFeedback = (e) => {
//       const options = Object.keys(this.state);
//     if (!options.includes(e.target.textContent.toLowerCase())) {
//       return;
//     }
//     else {
//       const option = options.find(option => option === e.target.textContent.toLowerCase())
//       this.setState((prev) => { return { [option]: prev[option] + 1 } });
//     }
//   }
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }
//   countPositiveFeedbackPercentage = () => {
//     let result = 0;
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     if (total > 0) {
//       result = Math.round(this.state.good / total * 100);
//     };
//     return result;
//   }
  
//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//       return (
//         <Container>
//           <Section title="Please leave feedback">
//             <FeedbackOptions options={options} onLeaveFeedback={this.countFeedback}/>
//           </Section>
//           <Section title="Statistics">
//             {total > 0
//               ?(<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage} />)
//               :(<Notification message="There is no feedback" />)}
//           </Section>
//         </Container>
//       )
//   }
  
// };

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
          setGood(good + 1)
          break;
        case 'Neutral':
          setNeutral(neutral + 1)
          break;
        case 'Bad':
          setBad(bad + 1)
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
