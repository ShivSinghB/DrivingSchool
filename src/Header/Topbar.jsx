import { useState } from 'react'
import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle } from 'lucide-react';
import React from 'react'
function Topbar() {
 
  return (
    <>
    {/* Topbar */}
    <div className="bg-gray-900 text-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-between">
            <div className="flex">
              <div className="flex items-center mr-4">
                <MapPin size={14} className="text-blue-600 mr-2" />
                <small>53, Sethi Sambandh Nagar MR 9 Road, Indore</small>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="text-blue-600 mr-2" />
                <small>Mon - Sun : 07.00 AM - 07.00 PM</small>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center mr-4">
                <Phone size={11} className="text-blue-600 mr-2" />
                <small>+91 6266774711, +91 9893682072 </small>
              </div>
              <div className="flex">
                <a href="https://www.facebook.com/people/Priyanshi-Driving-School-Indore/61576753785088/?rdid=D9lqur5c79DeKHp5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F152D9RLXjs%2F" className="flex items-center justify-center h-8 w-8 border-r border-gray-700 text-gray-400 hover:text-blue-600">
                  <Facebook size={14} />
                </a>
               
               
                <a href="https://www.instagram.com/vandana_cilogiya?utm_source=qr&igsh=MTJ1OGt0N3dscHZsNQ==" className="flex items-center justify-center h-8 w-8 text-gray-400 hover:text-blue-600">
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Topbar
