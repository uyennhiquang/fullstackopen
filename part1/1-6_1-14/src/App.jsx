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

  /* Interestingly enough, when incremented directly, the updated good variable seems to be printed correctly outside of the "if" statement, meaning when the if statement is done running, the state variables are updated. */
  // console.log("Updated good (incrementing directly)", good)
  // setTotal(total + 1);
  // console.log("Updated total", total)
  
  // On first increment, this will yield 0/0. This is because the setting function uses the 2 state variables that were directly incremented inside, so at the time they wouldn't have been updated yet. If we want to update any variables that rely on our 3 main state variables, it seems that we can *technically* do it outside of the if statement, in theory. In practice, it seems that placing the updating function in the main function seems to cause the function to render "infinitely".
  // In general, calling the state-updating function directly from the main component seems to cause problems (e.g updating infinitely). 
  // setPositiveRatio(1)
  
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
