"use strict";

import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

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

  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveRatio, setPositiveRatio] = useState(0)

  const addFeedback = (feedback) => () => {
    let newGood = good;
    let newNeutral = neutral;
    let newBad = bad;

    if (feedback == "good") {

      newGood += 1
      setGood(newGood);
    } else if (feedback == "neutral") {
      
      newNeutral += 1
      setNeutral(newNeutral);
    } else if (feedback == "bad") {

      newBad += 1
      setBad(newBad);
    }
    
    // Calculate total
    const newTotal = newGood + newNeutral + newBad;
    setTotal(newTotal);

    // Calculate average (good: 1, neutral: 0, bad: -1)
    const newAverage = ((newGood * 1) + (newNeutral * 0) + (newBad * -1)) / newTotal
    setAverage(newAverage)

    // Calculate positive
    const newPositiveRatio = (newGood / newTotal) * 100
    setPositiveRatio(newPositiveRatio)
  };

  return (
    <>
      <section>
        <h1>Give feedback</h1>
        <Button text="good" handleClick={addFeedback("good")} />

        <Button text="neutral" handleClick={addFeedback("neutral")} />
        <Button text="bad" handleClick={addFeedback("bad")} />
      </section>

      <section>
        <h1>statistics</h1>
        <Display title="good" value={good} />
        <Display title="neutral" value={neutral} />
        <Display title="bad" value={bad} />
        <Display title="total" value={total} />
        <Display title="average" value={average} />
        <Display title="positive" value={positiveRatio + "%"}/> {/* Is this a good idea...? */}
      </section>
    </>
  );
};

export default App;
