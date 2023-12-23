import React from 'react'
import "./Home.css"
import Sidebar from './Sidebar'
import RightContent from './RightContent'

const Home = () => {
  return (
    <>
    <div className='mainContainer'>
          <div className='left'>
            <Sidebar></Sidebar>
          </div>
          <div className='right'>
            <RightContent></RightContent>
          </div>
        </div>
    </>
  )
}

export default Home