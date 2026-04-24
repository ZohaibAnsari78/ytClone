import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'


const App = () => {

  const [Sidebar, setSidebar] = useState(true)

  return (
    <div>
      <Navbar Sidebar={Sidebar} setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home Sidebar={Sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />

      </Routes>
    </div>
  )
}

export default App
