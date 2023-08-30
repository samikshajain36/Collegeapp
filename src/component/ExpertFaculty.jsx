import React from 'react'
import '../Expert.css'
import image from '../Assests/Mask group.png'
import image2 from '../Assests/Group 226.png'
import image3 from '../Assests/3d-illustration-people-working-marketing_23-2150417382 1.png'
import image4 from '../Assests/Screenshot_121 1.png'
import image5 from '../Assests/Group 229.png'
import image6 from '../Assests/istockphoto-649011886-612x612 1.png'
import image7 from '../Assests/Group 5481.png'

const ExpertFaculty = () => {
    return (
        <div>
            <div className='mt-8 bg1 h-[]'>
                <h1 className='expert'>Learn From The Expert Faculty</h1>
                <div className='flex justify-center items-center p-16 '>
                    <img src={image} className=' w-[100px] h-[100px] blur-sm' alt="" />
                    <img src={image} alt="" />
                    <img src={image} className=' w-[100px] h-[100px] blur-sm' alt="" />

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='heading'>Andrew Falloff</h1>
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className=''>
                <div className='flex '>
                    <img src={image3} className='h-[558] w-[719]' alt="" />
                    <div className='flex flex-col flex-start ml-5'>
                        <h1 className='learn flex flex-col '>Learn From The Expert Faculty</h1>
                        <h1 className='financial flex flex-col '>Financial Planning and Analysis (FP&A) Analyst</h1>
                        <div className='flex'>
                            <div className='investment shadow-inner m-4 border flex items-center justify-center'>Investment Banking Analyst</div>
                            <h1 className='equaty shadow-inner m-4 border flex items-center justify-center'>Equity Research Analyst</h1>
                        </div>
                        <div className='flex'>
                            <div className='investment2 shadow-inner m-4 border flex items-center justify-center'>Treasury Analyst</div>
                            <h1 className='equaty shadow-inner m-4 border flex items-center justify-center'>Corporate Development Analyst</h1>
                        </div>
                        <h1 className='equaty shadow-inner m-4 border flex items-center justify-center'>Private Equity Analyst</h1>
                        <h1 className='back'>Private Equity Analyst : A private equity analyst is an employee of the firm
                            whose responsibilities include conducting the research that impacts the com
                            panies in which the company invests.Their job is to interact with the senior me
                            mbers of private equity firms to get intelligence on the current and potential
                            investments and getting the work done internally with the teammates.</h1>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className='relative text-white bg'>
                <div className='ml-16 flex mt-10 justify-between mr-10'>
                    <div className=' mt-10'>
                        <h1 className='certified'>Will I Get Certified?</h1>
                        <h2 className='content'>Upon completing this Program, you shall receive a Certificate
                            for Postgraduate Financial Analysis Program. This particular
                            certification will add a significant amount of value to your
                            professional credentials.</h2>
                        <img src={image5} className='flex' alt="" />
                    </div>

                    <img className=' mt-10' src={image4} alt="" />

                </div>
            </div>
            <div className='relative'>

                <div className='absolute'>
                    <div className='flex justify-end'>
                        <img src={image7} className='absolute img' alt="" />
                        {/* <h1 className='absolute img'>Grow Learning</h1>
                        <h1 className='content'>We’re focused on giving you an integrated learning
                            experience. With our one-of-its-kind career support
                            services, we continue to support you as you take a
                            step into your career with a renewed perspective.
                            Get access to over 500+ placement partners and
                            explore unlimited opportunities.</h1> */}
                    </div>
                    <img src={image6} alt="" />

                </div>
            </div>
        </div>
    )
}

export default ExpertFaculty