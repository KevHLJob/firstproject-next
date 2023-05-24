import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">Next First App</Link>

        <div className="text-center navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" href="/about">About</Link>
            <Link className="nav-link" href="/services">Services</Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navigation