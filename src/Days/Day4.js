import React from 'react'

const Day4 = () => {
    const list = [
        'Apple','Banana','Kiwi','Plum'
    ]
  return (
    <ul>
        {list.map((item, index) => {
           return <li key={index} >{item}</li>
        })}
    </ul>
  )
}

export default Day4