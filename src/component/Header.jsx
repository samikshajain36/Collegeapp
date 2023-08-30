import React from 'react'
import "../Header.css"
import logo from '../Assests/logo.png.png'
import profile from '../Assests/profile.png'

const Header = () => {
  return (
    <div className='p-4 '>
      <div className='logo nav p-3'>
        <div className='flex justify-between '>
          <img src={logo} className='w-[82px] ' alt="" />
          <div className='py-4 flex p-6'>
            <select className='option border border-2 border-orange-300 w-[100px]'>
              <option value="BMW"> Courses
              </option>
              <option value="Mercedes"> Courses
              </option>
              <option value="Audi"> Courses
              </option>
              <option value="Skoda"> Courses
              </option>
            </select>
            <button className='flex mx-12 border-orange-600 p-2 text-white  border border-2 border-orange-300 w-[100px]'>Explore</button>
            <img src={profile} className='myprofile w-[44px] my-1' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header