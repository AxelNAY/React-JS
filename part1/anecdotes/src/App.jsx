import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const UpdatePoints = () => {
    const copy = { ...points }
    copy[selected] = (copy[selected] || 0) + 1
    setPoints(copy)
  }

  const MostVote = Object.keys(points).reduce((highest, key) => {
    return points[key] > (points[highest] || 0) ? key : highest;
  }, selected);

  return (
    <div>
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <button onClick={() => UpdatePoints()}>
        vote
      </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * (7 - 0)))}>
        next anecdotes
      </button>
      <h1>Anecdote with the most votes</h1>
      {points[MostVote] > 0 ? (
        <p>{anecdotes[MostVote]}<br />has {points[MostVote]} votes</p>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  )
}

export default App