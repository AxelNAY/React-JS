import { useState } from 'react'
import StatisticLine from './components/StatisticLine'

const Statistics = (props) => {
  if ((props.good === 0) && (props.neutral === 0) && (props.good === 0)) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value ={props.good} />
            <StatisticLine text="neutral" value ={props.neutral} />
            <StatisticLine text="bad" value ={props.bad} />
            <StatisticLine text="all" value ={props.good + props.neutral + props.bad} />
            <StatisticLine text="average" value ={((1 / props.good) + (1 / props.neutral) + (1 / props.bad)) / 3} />
            <StatisticLine text="positive" value ={(props.good * 100) / (props.good + props.neutral + props.bad)} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App