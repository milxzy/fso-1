import { useState } from 'react'

const Button = ({ onClick, text }) => {
  
  return (
    <>
    
    <button onClick={onClick}>{text}</button>
    </>
  
  )
}

const VoteStats = ({ numberOfVotes, selected }) => {
  const voteTotal = numberOfVotes[selected] || 0;
  return (
    <p>has {  voteTotal  } votes</p>
  )
}

const MostVotes = ({ votes, mostVotes, anecdotes }) => {


  return (
    <>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotes]}
      {votes[mostVotes]}

    </>
  )
}

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
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 })
  const [mostVotes, setMostVotes] = useState(0)

  const findMostVotes = () => {
    let highestAnecdote = 0;
    let highestVotes = 0
    // go to votes [0]
    // loop through object 
    // if current num > than prev num, set highest votes to that num
   const votesArray = (Object.entries(votes))
    for (let i = 0 ; i < votesArray.length -1; i++) {
      let vote = votesArray[i]
      // set highestValue to votesArray[i]
      //if vote[1] > highestVotes, set highest anecdote to vote[0]
      if( vote[1] > highestVotes){
        highestAnecdote = vote[0]
      }
    }
    setMostVotes(highestAnecdote)
  }

  


const handleClick = (opp) => {
  if (opp === 'randomNumber') {
     setSelected(Math.floor(Math.random() * 8))
       
  } else if( opp === 'vote') { 
    const copy = { ...votes }
    copy[selected] += 1;
    setVotes(copy)
    

  }
  findMostVotes()
}




  return (
    <div>
      {anecdotes[selected]}
      <Button onClick={() => handleClick('randomNumber')}  text={'next anecdote'} />
      <Button onClick={() => handleClick('vote')} text="vote" /> 
      <VoteStats numberOfVotes={votes} selected={selected}/>
      <MostVotes votes={votes} mostVotes={mostVotes} anecdotes={anecdotes} />
      
    </div>
  )
}

export default App