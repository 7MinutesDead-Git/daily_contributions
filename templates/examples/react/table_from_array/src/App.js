import logo from './logo.svg'
import './App.css'
import { useState } from "react"


export default function App() {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const goodText = "Good"
    const badText = "Bad"
    const neutralText = "Neutral"
    const averageText = "Average"
    const positiveText = "Positive"
    const increment = 1

    const statisticsData = {
        [goodText]: good,
        [badText]: bad,
        [neutralText]: neutral,
        [averageText]: average,
        [positiveText]: positive
    }

    function adjustFeedback(e) {
        if (e.target.innerText === goodText) {
            setGood(good + increment)
        }
        if (e.target.innerText === badText) {
            setBad(bad + increment)
        }
        if (e.target.innerText === neutralText) {
            setNeutral(neutral + increment)
        }
        calculateAverage()
        calculatePositive()
    }

    function calculateAverage() {
        const averageCalc = Math.round((good + bad + neutral) / 3)
        setAverage(averageCalc)
    }

    function calculatePositive() {
        const positiveCalc = Math.round(good / (good + bad + neutral) * 100)
        setPositive(positiveCalc)
    }


    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>give feedback</h1>
            <div className="feedback-btns">
                <Button onClick={adjustFeedback} feedbackType={goodText}/>
                <Button onClick={adjustFeedback} feedbackType={neutralText}/>
                <Button onClick={adjustFeedback} feedbackType={badText}/>
            </div>
            <h2>statistics</h2>
            <Statistics stats={statisticsData}/>
        </>
    )
}


const Button = (props) => <button onClick={props.onClick}>{props.feedbackType}</button>


const Stat = (props) => {
    return (
        <tr>
            <td>{props.feedbackType}</td>
            <td>{props.feedbackCount}</td>
        </tr>
    )
}


const Statistics = ({stats}) => {
    const statsArray = []
    let key = 0

    for (const statType in stats) {
        const stat = stats[statType]
        if (stat !== 0 && !Number.isNaN(stat)) {
            statsArray.push(<Stat feedbackType={statType} feedbackCount={stat} key={key}/>)
            key++
        }
    }
    return (
        <table className="statistics">
            {statsArray}
        </table>
    )
}


// -----------------------------------------------------------------------------
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}