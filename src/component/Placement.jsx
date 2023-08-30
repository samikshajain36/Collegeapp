import React from 'react'
import '../Hiring.css'
import image1 from '../Assests/Group 5.png'
import image2 from '../Assests/Group 200.png'
import image3 from '../Assests/Group 199.png'
import image4 from '../Assests/Group 179.png'
const Placement = () => {
  return (
    <div className='flex justify-center flex justify-center h-[45px] relative placeman'>
    <div className='shadow-lg w-[1000px] h-[130px] bg-white p-6 absolute'>
        <div className='flex justify-between'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Placement