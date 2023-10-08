import { useState } from 'react'

const Display = (props) => {
  return (<div>{props.title} {props.value}</div>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display title="good" value={good}/>
      <Display title="neutral" value={neutral}/>
      <Display title="bad" value={bad}/>
    </div>
  )
}

export default App