
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../Assests/Group 202.png'
import '../CAreer.css'
import image2 from '../Assests/8111398_download_arrow_down_direction_navigation_icon (1) 1.png'
import image3 from '../Assests/Screenshot_112.png'
import image4 from '../Assests/Screenshot_113.png'
import image5 from '../Assests/Screenshot_114.png'
import image6 from '../Assests/Screenshot_115.png'
import image7 from '../Assests/Group 5477.png'
const dummy = [
  {
    image: image,

  },
]
const dummyData=[{
  image:image3,
  image1:image7
},{
  image:image4,
  image1:image7
},{
  image:image5,
  image1:image7
},{
  image:image6,
  image1:image7
}]
const CarrerTransition = () => {
  const [careerTransitions, setCareerTransitions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://13.235.150.18:4006/v1/careerTransitions/get_All_careerTransitions");
      setCareerTransitions(response.data.data.admincareerTransitions);
      console.log("API Data:", response.data.data.admincareerTransitions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='mt-24 bg5'>

      <h1 className='font-bold heading mb-4'>Career Transitions</h1>
      <div className='flex  ml-12'>
        <div className=''>
          {dummy.map((item, id) => {
            return <div className='' >
              <img src={item.image} alt="" />
              <img src={item.image1} alt="" />
            </div>
          })}
        </div>
        <div className='grid grid-cols-3  ml-4 '>

        </div>
        <div className=''>
          {dummy.map((item, id) => {
            return <div >
              <img src={item.image} alt="" />
            </div>
          })}
        </div>
        <div className=''>
          {dummy.map((item, id) => {
            return <div >
              <img src={item.image} alt="" />
            </div>
          })}
        </div>
      </div>
      <div className='flex justify-center items-center '>
      <div className='h-[125px] w-[750px] border-2 flex justify-center flex-col'>
      <div className='flex justify-center flex-col item-center'>
        <h1 className='flex justify-center typography'>We Have An 80% Placement Success Rate</h1>
        <h1 className='flex justify-center typo'>Learn more about how we’ve been impacting thousands of careers.</h1>
        </div>
       
      </div>
      
      </div>
      <div className='flex justify-center '>
          <div className='w-[320px] h-[50px] bg4 flex'> 
          <h1 className='flex justify-center text-white items-center p-4'>Download Placement Report</h1>
          <img src={image2} className='h-8 flex items-center' alt="" />
          </div>
          </div>
          <div className='mt-10'>
          <h1 className='flex justify-center typography'>We Have An 80% Placement Success Rate</h1>
          </div>
          <div>
        
          </div>
          <div className='flex'>
                    {dummyData.map((item,id)=>{
                        return <div className='m-10'>
                            <img src={item.image} alt="" />
                        </div>
                    })}
                </div>
    </div>
  );
};

export default CarrerTransition;



