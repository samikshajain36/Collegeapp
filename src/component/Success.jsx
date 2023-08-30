import React from 'react'
import image from '../Assests/Mask group.png'
const data = [
  {
    id: "1",
    image: image,
    title: "Andrew Falloff",
    body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "2",
    image: image,
    title: "Andrew Falloff",
    body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",

  },
  {
    id: "3",
    image: image,
    title: "Andrew Falloff",
    body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
 
]

const Success = () => {
  return (
    <div>
        
         <div className=' flex flex-col justify-center items-center mb-6'>
                <h1 className='h1'>Create Your Success  Story</h1>
                <div className='grid grid-cols-3 border'>
       {data.map((item, id) => {
            return <div className='shadow-inner h-[450px] w-[350px] p-4 gap-6 ' >
              <div className=' flex justify-center '>
                <img src={item.image} className=' my-8 p-2' alt="" />

              </div>
              <div >
              <div className='p-2 flex justify-center'>{item.title}</div>
             
              <div className='p-2 justify-center'>{item.body}</div>
              </div>
            </div>
          })}
         </div>
                {/* <img src={image}className=' hello p-10'  alt="" />
                <img src={image1} alt="" /> */}
                <button className='enroll mt-6'>Prepared To Succeed</button>
            </div>
    </div>
  )
}

export default Success