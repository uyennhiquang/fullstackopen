'use strict'

import { useState } from "react";

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

  return (
    <>
      <section>
        <h1>Give feedback</h1>
        {/* <Button title="good" handleClick={addGoodFeedback} /> */}
        <button onClick={addGoodFeedback}>good</button>
        <button>neutral</button>
        <button>bad</button>
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
