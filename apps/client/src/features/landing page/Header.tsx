import { Button } from '@repo/ui'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <nav className=" z-50 sticky top-0">
      <ul className="flex justify-around py-2 backdrop-blur-xl  ">
        <li className=" font-semibold text-xl">illumi</li>
        <div className="flex gap-8">
          <NavLink to="/login">
            <Button className=" rounded-full" variant="outline">
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button className=" rounded-full">Get Started</Button>
          </NavLink>
        </div>
      </ul>
    </nav>
  )
}

export default Header
