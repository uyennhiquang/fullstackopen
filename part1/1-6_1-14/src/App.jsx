'use strict'

import { useState } from "react";

const Button = (props) => {
  return(<button onClick={props.handleClick}>{props.text}</button>)
}

const Display = (props) => {
  return (
    <div>
      {props.title} {props.value}
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodFeedback = () => {
    const newFeedback = good + 1
    setGood(newFeedback)
  }

  const addNeutralFeedback = () => {
    const newFeedback = neutral + 1
    setNeutral(newFeedback)
  }

  const addBadFeedback = () => {
    const newFeedback = bad + 1
    setBad(newFeedback)
  }

  return (
    <>
      <section>
        <h1>Give feedback</h1>
        <Button text="good" handleClick={addGoodFeedback} />
        <Button text="neutral" handleClick={addNeutralFeedback} />
        <Button text="bad" handleClick={addBadFeedback} />
      </section>

      <section>
        <h1>statistics</h1>
        <Display title="good" value={good} />
        <Display title="neutral" value={neutral} />
        <Display title="bad" value={bad} />
      </section>
    </>
  );
};

export default App;
