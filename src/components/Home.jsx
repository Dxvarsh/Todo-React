import React from 'react'
import Navbar from './Navbar'
import Routing from '../Routes/Routing'

const Home = () => {
  return (
    <div id='home' className='min-h-screen w-full bg-white dark:bg-neutral-950 overflow-y-auto'>
        <Navbar/>
        <div className="container mx-auto p-4 min-h-full">
          <Routing />
        </div>
    </div>
  )
}

export default Home