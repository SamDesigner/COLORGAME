import React from 'react'
import { useState } from 'react'
const App = () => {
  const [color , setColor] = useState("")

  const grabColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='flex flex-col gap-[20px]'>
          <div style={{backgroundColor : color}} className='h-[500px] w-[500px] mx-auto border flex items-center justify-center'>
              {color}
          </div>

          <form className='flex justify-center items-center'>
            <input type='text' className='border w-[300px] mx-auto p-2 border-black' onChange={grabColor} placeholder='Input Color' />
            
          </form>
        </div>
    </div>

  )
}

export default App