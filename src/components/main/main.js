import React from 'react'
import './main.css'
import { useState, useEffect } from 'react'
function Main() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [stareActive, setStareActive] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date()
      setHour(date.getHours())
      setMinute(date.getMinutes())
      setSecond(date.getSeconds())


    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className='no'>
      <div className='main'>
          <div className='time'> 
            <h1>Hour</h1>
            <h1>Minute</h1>
            <h1>Second</h1>
          </div>
        <div className='container'>
          <div>{hour}</div>
          <div>:</div>
          <div>{minute}</div>
          <div>:</div>
          <div>{second}</div>
        </div>
        <button className='turn' onClick={()=>{
          let main = document.querySelector('.main')
          if (main.style.transform == 'rotate(90deg)') {
            main.style.transform = 'rotate(360deg)'
          } else {
            main.style.transform = 'rotate(90deg)'
          }
          main.style.width = '100%'
          main.style.height = '100vh'
          main.style.position = 'absolute'
          let turn = document.querySelector('.turn')
          turn.style.transform = 'translateX(50%)'
          
        }}>Turn</button>
      </div>

    </div>
  )
}

export default Main