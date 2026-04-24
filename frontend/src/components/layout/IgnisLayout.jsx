import React from 'react'

const IgnisLayout = ({ children }) => {
  return (
    <div className="layout">
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default IgnisLayout
