import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"


// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    function change(event) {
        const {name} = event.target
        name === "inc"?
        setCount(prevCount => prevCount + 1) :
        name === "dec"?
        setCount(prevCount => prevCount - 1) :
        name === "mult"?
        setCount(prevCount => prevCount * 2) :
        name === "halv"?
        setCount(prevCount => Math.round(prevCount / 2)) :
        setCount(prevCount => prevCount)
    }
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
    
    return (
        <div>
            <h1 style={{color:color}}>{count}</h1>
            <button name="inc" onClick={change}>Increment</button>
            <button name="dec" onClick={change}>Decrement</button>
            <button name="mult" onClick={change}>Multiply</button>
            <button name="halv" onClick={change}>Halve</button>
        </div>
    )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default App