import React from 'react'
import { Outlet, Link } from "react-router-dom"


export default function Layout() {
  return (
    <><nav>
          <Link to="/">Home</Link>
          <Link to="current">Current Weather</Link>
          <Link to="other">Weather</Link>
      </nav><main>
              <Outlet />
          </main></>
  )
}
