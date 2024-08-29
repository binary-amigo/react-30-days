import React, { useState } from 'react'

const Day3 = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState();

    
  return (
    <div>
        <form >
            <label for='name'>Name: </label>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <label for='age'>Age: </label>
            <input name='age' value={age} onChange={(e) => setAge(e.target.value)}/>
        </form>
        <div>
            {name}
            <br/>   
            {age}
        </div>
    </div>
  )
}

export default Day3