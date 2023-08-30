import React from 'react'
import '../Hiring.css'
import photo from '../Assests/GGU1__1651645239320 2.png'
import photo1 from '../Assests/GGU1__1651645239320 1.png'
import photo2 from '../Assests/Deakin120__1629343950576 1.png'
import photo3 from '../Assests/ljmu_08__1593324049750 1.png'

const Hiring = () => {
  return (
    <div>
        <div className='bgColor h-[365px] my-32 flex justify-center'>
            <div className='flex flex-col '>
            <h1 className='text flex justify-center'>500+ Multinational Hiring Partners</h1>
            <h3 className='flex justify-center'>A World Of Opportunity For You</h3>
            <div className='flex justify-between my-4 gap-24'>
        <img src={photo1} className='w-[200px] h-[90px] rounded-lg shadow-lg bg-white' alt="" />
        <img src={photo3} className='w-[200px] h-[90px] rounded-lg shadow-lg bg-white' alt="" />
            <img src={photo2}  className='w-[200px] h-[90px] rounded-lg shadow-lg bg-white' alt="" />
            <img src={photo3}  className='w-[200px] h-[90px] rounded-lg shadow-lg bg-white' alt="" />
            <img src={photo}  className='w-[200px] h-[90px] rounded-lg shadow-lg bg-white' alt="" />
        </div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Hiring