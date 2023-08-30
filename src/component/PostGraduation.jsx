import React from 'react'
import '../Post.css'
import image from '../Assests/guranteed 1.png'
import image1 from '../Assests/jobrelevent 1.png'
import image2 from '../Assests/learnbydoing 1.png'
import image3 from '../Assests/careerAssistence 1.png'
import image4 from '../Assests/capstone 1.png'
import image5 from '../Assests/experitial 1.png'

const data = [
  {
    id: "1",
    image: image,
    title: "Guaranteed Job Placement",
    body: "This Program comes with a job guarantee which offers you a chance to be placed at over 500 top-tier partner organizations hiring for the role. Our career related services include resume development, profile enhancement, career mentorship, interview preparation workshops and one-on-one career counselling to ensure you land the right job."
  },
  {
    id: "2",
    image: image1,
    title: "Learn Job-relevant Skills",
    body: "Equip yourself with crucial skills such as financial statement analysis, modelling, valuation, equity research, and transaction execution, along with Excel and PowerPoint.",

  },
  {
    id: "3",
    image: image2,
    title: "Learn by Doing",
    body: "Our course uses the latest in learning engagement solutions, such as simulation tools that allow learners to experience live happenings at the workplace.",
  },
  {
    id: "4",
    image: image3,
    title: "Personal Branding",
    body: "Enhance your professional presence through our personal branding project and LinkedIn challenge, giving you the ultimate advantage in current competitive job market.",
  },
  {
    id: "5",
    image: image4,
    body: "Seize a remarkable opportunity to engage with influential thought leaders and esteemed indsutry experts through our captivating webinars. Uncover fresh perspectives, broaden your network, and propel your professional growth to new heights.",
  },
  {
    id: "6",
    image: image5,
    title: "In-class Simulations",
    body: "Immerse yourself in the exhilarating realm of real-time financial decision-making through our cutting-edge corporate finance simulations. Acquire hands-on expertise in financial modelling techniques, empowering you with practical skills and insights that transcend theory."
  },
]
const PostGraduation = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold heading'>About Postgraduate Financial Analysis Program</h1>
        <h2 className='color1 mx-w-[1134px]'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>

      
      <div className='grid grid-cols-3  gap-8 p-8 justify-center ml-6'>
       {data.map((item, id) => {
            return <div className='shadow-inner h-[450px] w-[350px] p-4 border' >
              <div className='w-[120px] h-[120px] bgcolor flex justify-center '>
                <img src={item.image} className=' my-8 p-2' alt="" />

              </div>
              <div className='p-2'>{item.title}</div>
              <div className='p-2'>{item.body}</div>
            </div>
          })}
         </div>
         </div>
    </div>

  )
}

export default PostGraduation