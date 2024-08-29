import React from 'react'

const Day2 = () => {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
    </div>
  )
}

export default Day2