'use client';
import Navbar from '@/navbar';
import React, { useEffect } from 'react'

const Template = ({children}) => {
useEffect(() => {
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}, []);


  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Template