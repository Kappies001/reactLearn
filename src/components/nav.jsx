import React from 'react'
import "../nav.css"

export default function nav() {
  return (
    <nav>
      <div className="py-6 nav lg:px-14 px-8 flex flex-row items-center">
          <div className="flex-none">
              <a href="https://www.abiraamihospital.com"><img title="image" loading="lazy" width="150" alt="logo" height="64.32" src="./assets/Images/venzo_logo.webp" /></a>
          </div>
          <div className="flex-1 md:flex hidden justify-center">
              <div className="navlist flex flex-row gap-14 justify-center">
                    <div className="navlistItem hover:text-indigo-500 relative group">
                        <a href="#" className="inline-flex items-center gap-2">
                            Platform
                            <svg className="pt-1" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1L8.25942 7.74058C7.84905 8.15095 7.1767 8.12697 6.79662 7.68841L1 1" stroke="black" stroke-width="2"/>
                            </svg>
                        </a>
                        <div className="absolute bg-white lg:w-[220px] shadow-lg rounded-lg py-5 hidden group-hover:block opacity-0 group-hover:opacity-100">
                            <div className="navlistItem hover:text-indigo-500 px-5 pb-5"><a href="#">App Developement</a></div>
                            <div className="navlistItem hover:text-indigo-500 px-5 pb-5"><a href="#">Product Developement</a></div>
                            <div className="navlistItem hover:text-indigo-500 px-5"><a href="#">Digital Marketing</a></div>
                        </div>
                    </div>
                    <div className="navlistItem hover:text-indigo-500"><a href="#">Solutions</a></div>
                    <div className="navlistItem hover:text-indigo-500"><a href="#">Pricing</a></div>
                    <div className="navlistItem hover:text-indigo-500"><a href="#">Resources</a></div>
                    <div className="navlistItem hover:text-indigo-500"><a href="#">Company</a></div>
              </div>
          </div>
          <div className="flex-1 h-full md:hidden flex">
              <label for="sideopen_D" className="flex items-center justify-end text-white flex  w-full text-2xl float-end">
                  <img title="image" loading="lazy"  width="30" height="30" src="./assets/Images/menu.png" alt="menubar icon" />
              </label>
              <input type="checkbox" id="sideopen_D" />
              <div className="sidebox_D" id="sidebar_D">
                  <div className="sidebar_dropdown">
                      <div className="navlistItem mblist"><a href="https://www.abiraamihospital.com">Home</a></div>
                      <div className="navlistItem mblist"><a href="orthopedic-treatments">Treatments</a></div>
                      <div className="navlistItem mblist"><a href="doctors">Doctors</a></div>
                      <div className="navlistItem mblist"><a href="about-us">About Us</a></div>
                      <div className="navlistItem mblist"><a href="contact-us">Contact Us</a></div>
                  </div>
              </div>
          </div>
          { /* contact */ }
          <div className="md:flex hidden flex-row justify-end  gap-2">
              <button className="px-7 py-2 contact_D"><a href="">Log In</a></button>
              <button className="px-7 py-2 contact_D border-2 rounded-full font-[500]"><a href="">Book a demo</a></button>
          </div>
      </div>  
    </nav>
  )
}
