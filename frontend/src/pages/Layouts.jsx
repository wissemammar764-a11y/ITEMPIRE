import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'

const Layouts = () => {
  return (
    <div><Topbar />
    <div className="layout">
      
      <Sidebar />
      <main className="content card" id="content">
        <Outlet />
      </main>


    </div>
    </div>
  )
}

export default Layouts