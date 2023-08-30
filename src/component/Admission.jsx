import React from 'react'
import image from '../Assests/Group 231.png'
import image1 from '../Assests/Group 5475.png'
import '../Admission.css'

const Admission = () => {
  return (
    <div>
         <div className='background flex flex-col justify-center items-center mb-6 p-6'>
                <h1 className='h1'>What Is The Program Eligibility And Admission Process</h1>
                <img src={image}className=' hello p-10'  alt="" />
                <img src={image1} alt="" />
                <h1 className='mt-7'>Need help? Our admission team happy to assist you</h1>
                <button className='enroll mt-6'>ENQUIRE NOW</button>
            </div>
               
               <div className='flex flex-col border-4 p-6 backgroundColor'>
                <div className='flex justify-center'>
                <h1 className='some'>Wait! I Have Some Quetion</h1>
                </div>
               <select className='flex flex-col border-2 m-4 p-2'>
              <option value="BMW"> 01. There are many variations of passages ?
              </option>
              <option value="Mercedes"> Mercedes
              </option>
             
            </select>
               <select className='border-2 m-4 p-2'>
              <option value="BMW"> 02. There are many variations of passages ?
              </option>
              <option value="Mercedes"> Mercedes
              </option>
             
            </select>
               <select className='border-2 m-4 p-2'>
              <option value="BMW"> 03. There are many variations of passages ?
              </option>
              <option value="Mercedes"> Mercedes
              </option>
             
            </select>
               <select className='border-2 m-4 p-2'>
              <option value="BMW"> 04. There are many variations of passages ?
              </option>
              <option value="Mercedes"> Mercedes
              </option>
             
            </select>
               <select className='border-2 m-4 p-2'>
              <option value="BMW"> 05. There are many variations of passages ?
              </option>
              <option value="Mercedes"> Mercedes
              </option>
             
            </select>
              
               </div>
    </div>
  )
}

export default Admission