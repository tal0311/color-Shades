import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [shades, setShades] = useState('')
  const [list, setList] = useState(new Values('#3e5d7b').all())

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(+shades)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn'>Submit</button>
        </form>
        <h3 style={{ marginLeft: '2rem' }}>
          Choose number of shades (between 1 and 100):
        </h3>

        <input
          type='range'
          min='1'
          max='100'
          value={shades}
          onChange={(e) => setShades(e.target.value)}
        ></input>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...color}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
