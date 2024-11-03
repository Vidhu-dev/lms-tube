import {
  SiGithub,
  SiLeetcode,
  SiLinkedin,
  SiX,
} from '@icons-pack/react-simple-icons'

function Footer() {
  return (
    <footer className="mt-auto bg-white">
      <ul className="flex gap-8 justify-center items-center py-4">
        <hr className="my-4 border-t-2 w-1/4 border-gray-600" />
        <SiLinkedin className="hover:text-blue-600 cursor-pointer" />
        <SiX className="hover:text-gray-700 cursor-pointer" />
        <SiLeetcode className="hover:text-yellow-500 cursor-pointer" />
        <SiGithub className="hover:text-red-800 cursor-pointer" />
        <hr className="my-4 border-t-2 w-1/4 border-gray-600" />
      </ul>
    </footer>
  )
}

export default Footer
