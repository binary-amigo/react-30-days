import React, { useState } from 'react'

const Day5 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <input type='checkbox' onClick={() => {setShow(prev => !prev)}}/>
        {show && <h1>Hello</h1>}
    </div>
  )
}

export default Day5