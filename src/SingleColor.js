import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)

  const bgc = rgb.join(',')
  const copiedHex = () => {
    setAlert(true)
    navigator.clipboard.writeText('#' + hexColor)
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout()
    }
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={copiedHex}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
