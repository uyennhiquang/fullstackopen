"use strict";

import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const anecdotesLen = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotesLen).fill(0));

  const assignNewSelected = () => {
    const newSelected = Math.round(Math.random() * (anecdotesLen - 1));

    setSelected(newSelected);
  };

  const addVote = (selected) => () => {
    const copyArr = [...votes];
    copyArr[selected] += 1;
    setVotes(copyArr);
  };

  const mostVoteAnecdote = () => {
    let maxVotes = 0;
    let maxVotesQuote = 0;
    for (let i = 0; i < anecdotesLen; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        maxVotesQuote = i;
      }
    }

    return maxVotesQuote;
  };

  return (
    <>
      <section>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={addVote(selected)}>vote</button>
        <button onClick={assignNewSelected}>next anecdote</button>
      </section>
      <section>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVoteAnecdote()]}</p>
        <p>has {votes[mostVoteAnecdote()]} votes</p>
      </section>
    </>
  );
};

export default App;
