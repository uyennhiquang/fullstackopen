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

  // These 3 functions update state
  // const addGoodFeedback = () => {
  // const newFeedback = good + 1;
  // setGood(newFeedback);
  //
  // const newTotal = newFeedback + neutral + bad;
  // setTotal(newTotal);
  // };

  // const addNeutralFeedback = () => {
  // const newFeedback = neutral + 1;
  // setNeutral(newFeedback);
  //
  // const newTotal = good + newFeedback + bad;
  // setTotal(newTotal);
  // };

  // const addBadFeedback = () => {
  //   const newFeedback = bad + 1;
  //   setBad(newFeedback);

  //   const newTotal = good + neutral + newFeedback;
  //   setTotal(newTotal);
  // };

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
    const newTotal = newGood + newNeutral + newBad;
    setTotal(newTotal);

    console.log("total after", newTotal);
  };

  // Calculate average

  return (
    <>
      <section>
        <h1>Give feedback</h1>
        {/* <Button text="good" handleClick={addGoodFeedback} /> */}
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
      </section>
    </>
  );
};

export default App;
