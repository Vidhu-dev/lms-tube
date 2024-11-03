import { Button } from '@repo/ui'
import HeroSection from '../../assets/hero section .svg?react'
import { MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main className="flex-grow ">
      <div className="flex flex-row   justify-evenly  ">
        <h1 className="text-4xl mt-24">
          Unlock Your Potential,<br></br>
          <span className="   bg-black text-white px-2  rounded-3xl ">
            Illuminate
          </span>
          Your Path.
        </h1>
        <div className=" justify-start  w-1/4 mt-24 ">
          <p className="bg-red">
            Embark on a journey of discovery with engaging content and
            personalized learning experiences. Join us to unlock your potential
            and illuminate your path today.
          </p>{' '}
          <Link to="/signup">
            <Button className=" mx-auto rounded-full my-4">
              Get Started <MoveUpRight />
            </Button>{' '}
          </Link>
        </div>
      </div>
      <HeroSection className="w-2/5 h-2/5 mx-auto " />
    </main>
  )
}

export default LandingPage
