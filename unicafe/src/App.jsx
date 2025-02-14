import { useState } from 'react'

const Header = () => {
  
  return (
    <h1>
      give feedback
    </h1>
  )
}

const Button = ({ text, onClick }) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ stats, calculateAverage }) => {
  if ( stats[0] == 0 && stats[1] == 0 && stats[2] == 0){
    return (
      <p>No feedback given</p>
    )
  } else {

  return(
    <>
    
    <h2>
      Statistics
      </h2>
      <table>
      <tbody>
      <Statline text="good" stats={stats[0]}/>
      <Statline text="neutral" stats={stats[1]}  />
      <Statline text="bad" stats={stats[2]} />
      <Statline text="average" stats={calculateAverage('avg')} />
      <Statline text ="positive" stats={calculateAverage('positives')} />
      </tbody>
      </table>
      </>
  )
  }
}

const Statline = ({ text, stats }) => {
  // take in text 
  return (
    <>
   <tr>
    
    <td>
      {text}: 
    </td>
    <td>
       {stats}
    </td>
    </tr> 
    </>
    
   
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = [good, neutral, bad]

  const calculateAverage = (term) => {
    
    let positiveReviews = good
    let negativeReviews = bad * -1 
    let neutralReviews = neutral * 0
    let totalReviews = good + neutral + bad
    let reviewAverage = (positiveReviews + negativeReviews + neutralReviews)  / totalReviews
    let positiveAverage = (good / totalReviews) * 100;
    if (term === 'avg' ){
      // return reviewAverage
      return isNaN(reviewAverage) ? 0 : reviewAverage;
    } else {
      return isNaN(positiveAverage) ? 0 : positiveAverage + '%'
    }
    // return isNaN(reviewAverage) ? 0 : reviewAverage;
    // return reviewAverage
  }

  

  const handleGood = () => {
  console.log('update')
  setGood( good + 1)
}

const handleNeutral = () => {
  setNeutral(neutral + 1)
}

const handleBad = () => {
  setBad(bad +1)
}

  return (
    <>
      <Header />
      <Button text="good" onClick={handleGood} />
      <Button  text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad}/>
      <Statistics stats={stats} calculateAverage={calculateAverage} />

    </>
  )
}

export default App