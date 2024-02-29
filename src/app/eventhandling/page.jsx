'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'> 
        <h1 className='text-center'>EventHandling</h1>
        <hr />
        <button className='btn btn-warning' onClick={()=>{alert('Button was Click')}}>
            Click me</button>

            <input type="color"
            onChange={(e)=>{document.body.style.background=e.target.value;}} />
    </div>
  )
}

export default EventHandling