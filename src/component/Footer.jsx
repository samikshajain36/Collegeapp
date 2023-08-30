import React from 'react'
import logo from '../Assests/logo.png.png'
import '../Footer.css'
import { Link } from 'react-router-dom';

const footerLinks = [

  {
    title: "Company",
    links: [
      { title: "Blog", url: "/" },
      { title: "Career", url: "/" },
      { title: "Contact", url: "/" },
      { title: "Center", url: "/" },
    ],
  },
  {
    title: "Become",
    links: [
      { title: "Careers Services", },
      { title: "Become a Instructor", },
      { title: "Become a Affiliate", },
      { title: "Become a Franchise ", },
    ],
  },
  {
    title: "Our Branches",
    links: [
      { title: "Manipur", },
      { title: "Waghodia", },
      { title: "Ellora Park", },

    ],
  },
];


const Footer = () => {
  return (
    <div className='footer'>
      <div className='p-6 '>
      <div className='flex flex-col gap-6 text-base min-w-[170px]'>

        <div className='flex'>
          <img src={logo} alt="" />
          <h1 className='text-white flex items-center mx-3'>Baroda Institute of Technology</h1>
        </div>
        <div className='flex flex-col '>
          <div className='flex text-white m-4'>
            <h1 className='head'>Head Office : </h1>
            <h1 className='max'>B/208, Manubhai Tower, Opp. M.S. University,
              Sayajigunj, Vadodara-390005, Gujarat, India.</h1>
          </div>
          <div className='flex text-white m-4'>
            <h1 className='head'>Call :</h1>
            <h1>+91 93272 19987</h1>
          </div>
          <div className='flex text-white m-4'>
            <h1 className='head'>Mail :</h1>
            <h1>info@bitbaroda.com</h1>
          </div>
          <div className=' w-full flex md:justify-end flex-wrap  gap-20;'>
            {footerLinks.map((link, index) => (
              <div key={index} className='flex flex-col gap-6 text-base min-w-[170px]'>
                <h3 className='head text-white'>{link.title}</h3>
                {link.links.map((item) => (
                  <>
                    <h3 className='text-white'><Link href={item.url}>{item.title}</Link></h3>
                  </>
                ))}
              </div>
            ))}
          </div>
          </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className='flex justify-center gap-6 text-white'>
              <h1>Term and condition</h1>
              <h1>|</h1>
              <h1>Refund Policy</h1>
              <h1>|</h1>
              <h1>Privacy Policy</h1>
              
            </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default Footer