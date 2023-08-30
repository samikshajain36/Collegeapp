import React, { useState } from 'react'
import '../Contact.css'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2';
import image from '../Assests/Group 5462.png'
import image1 from '../Assests/Group 225.png'
import image2 from '../Assests/Screenshot_116 1.png'
import image3 from '../Assests/Screenshot_117 1.png'
import image4 from '../Assests/Screenshot_118 1.png'
import image5 from '../Assests/Screenshot_119 1.png'
import image6  from '../Assests/Group 194.png'

const dummuData=[
    {
        id:"1",
        image:image2
},
    {
        id:"2",
        image:image3
},
    {
        id:"3",
        image:image4
},
    {
        id:"4",
        image:image5
},
]
 
const Contact = () => {
    const [phone, setPhone] = useState("");
    return (
        <div>
            <div className='flex mb-7 mb-8 p-6'>
                <div className='flex flex-col justify-center '>
                    <h1 className='heading mx-10 p-10'>Have Question?Contact US</h1>
                </div>
                <div className='box-content color h-[600px]  w-[500px] p-4 shadow-inner'>
                    <div className='flex flex-col'>
                        <input type="text" className='m-4 h-[70px] border rounded-lg p-4' placeholder='Full Name' />
                        <input type="text" className='m-4 h-[70px] border rounded-lg p-4' placeholder='Enter Email ID' />
                        <PhoneInput
                            className="m-4 w-[67px] h-[70px] border rounded-lg p-4 bg-white style"
                            country={"eg"}
                            enableSearch={true}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                        />
                        <select className="bg-white h-[70px] w-[480px] border rounded-lg m-4">
                            <option value="BMW"> Mumbai - Andheri
                            </option>
                            <option value="Mercedes"> Mumbai - Andheri
                            </option>
                            <option value="Audi"> Mumbai - Andheri
                            </option>
                            <option value="Skoda"> Mumbai - Andheri
                            </option>
                        </select>
                    </div>
                    <div className='flex m-4'>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                        <h1 className='mx-4'>I accept the <span className='term'>Term and condition</span></h1>
                    </div>
                    <button className='h-[70px] mx-10 w-[420px] button border rounded-lg '>SUBMIT</button>
                </div>
            </div>


            <div className='background flex flex-col'>
                <h1 className='h1'>Let Us Walk Through Your Learning Path</h1>
                <img src={image}className=' p-10'  alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='course'>How Will I Learn The Practical Implications Of The Course?</h1>
                <img src={image1} className="title"alt="" />
                <div className='flex'>
                    {dummuData.map((item,id)=>{
                        return <div className='m-10'>
                            <img src={item.image} alt="" />
                        </div>
                    })}
                </div>
                <img src={image6} alt="" />
                <button className='enroll mt-6'>ENROLL NOW</button>
            </div>
        </div>
    )
}

export default Contact