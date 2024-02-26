import React from 'react'

const Home = () => {
  const siteTitle='My Website Name';
  const num1=10;
  const num2=20;
  const mystyles={
    textAlign:'center',
  }
  const addNums=(a,b)=>{
    return a+b;
  }
  return (
    <div>
      <h1 className='my-btn' style={mystyles}> {siteTitle}</h1>
     
      <h4>{num1*num2}</h4>
      <p>{addNums(56,29)}</p>

      <h1 style={{color:'red',fontSize:'2rem'}}>My First .js Website</h1>
      <img src="https://wallpapers.com/images/hd/pikachu-pictures-d0c59pwwq17g5avc.jpg" alt="" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias adipisci quaerat aut eaque quia modi.</p>
    </div>
  )
}

export default Home