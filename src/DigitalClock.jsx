import React from 'react'
import { useState ,useEffect} from 'react'
export const DigitalClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function formatTime(){
let hours= time.getHours()
let minutes= time.getMinutes()
let seconds= time.getSeconds()
const meridium= hours >= 12 ? 'PM' : 'AM'
hours = hours % 12 || 12

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${meridium}`
  }
  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>

        </div>
        
        
        </div>
  )
}
