import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTemp() {
  return (
    <nav className=" flex justify-around py-2 backdrop-blur-xl ">
      <Link to="/" className=" font-semibold text-xl">
        illumi
      </Link>
    </nav>
  )
}

export default HeaderTemp
