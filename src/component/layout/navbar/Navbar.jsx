import {useContext} from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { gState } from '../../../context/Context'


export default function Navbar() {

  const {data} = useContext(gState)
  const {isLoggedIn , userData} = data
  const {image} = userData

  const account = (user)=>{
    if (typeof user != 'undefined') {
      if (user.profile_pic!="") {
        return(
          <Link>
          <img src={user.profile_pic} className='w-8 rounded-full'></img>
          </Link>
          )
      }
      else return (
      <Link>
         <FaRegUserCircle className='text-white w-8 m-3'/>
        </Link>
        )
    }
    else return (
        <Link  to={`login`} className='block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 text-xs underline'>
         sign up
        </Link>
    )
  }


  return (
    <div>
    <nav className="relative z-10">

      {/* logo */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center">
          <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-white text-xs">Moon Travels</span>
      </a>
      <div className="flex md:order-2">



        {isLoggedIn && 
            <Link>
              <img src={image} className='w-8 rounded-full hover:backdrop-blur-sm hover:shadow-md'></img>
            </Link>  
        }

        {
          !isLoggedIn && 
          <div className='p-3 hover:backdrop-blur-sm hover:shadow-md rounded-lg'>
            <Link  to={`login`} className='block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 text-xs underline'>
              sign up
            </Link>
          </div>
        }
         


        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search..."/>
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  \ dark:border-gray-700">
            <li>
              <Link to={'/'} className="hover:backdrop-blur-sm hover:shadow-md block py-2 pl-3 pr-4 text-white rounded-lg" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="#" className="hover:backdrop-blur-sm hover:shadow-md block py-2 pl-3 pr-4 text-white rounded-lg">About</a>
            </li>
            <li>
              <a href="#" className="hover:backdrop-blur-sm hover:shadow-md block py-2 pl-3 pr-4 text-white rounded-lg">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
