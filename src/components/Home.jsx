import React from 'react'
import Navbar from './Navbar'
import Routing from '../Routes/Routing'

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-white dark:bg-neutral-950'>
        <Navbar/>
        <div className="container mx-auto p-4 min-h-full">
          <Routing />
        </div>
    </div>
  )
}

export default Home