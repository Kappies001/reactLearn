import React, { useState } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import ApiList from './apiData';

export default function Filter() {
  const [search, setSearch] = useState("");

  const apiData = [
    {
      id: 1,
      name: "Hunter",
      category: "Data access",
      description: "Hunter API makes it easy to find or verify professional email addresses.",
      url: "./assets/Images/featured/hunter.png"
    },
    {
      id: 2,
      name: "Twilio",
      category: "Data access",
      description: "Send and receive SMS and MMS messages as well as query meta-data about text messages.",
      url: "./assets/Images/featured/twilio.png"
    },
    {
      id: 3,
      name: "WhatsApp Business",
      category: "Automation",
      description: "Hunter API makes it easy to find or verify professional email addresses.",
      url: "./assets/Images/featured/whatsapp.png"
    },
    {
      id: 4,
      name: "Stripe",
      category: "Data access",
      description: "A suite of payment APIs that powers commerce for online businesses of all sizes.",
      url: "./assets/Images/featured/stripe.png"
    },
    {
      id: 5,
      name: "Typeform",
      category: "Data access",
      description: "Create, retrieve, update, and delete your typeforms, themes, and images.",
      url: "./assets/Images/featured/typeform.png"
    },
    {
      id: 6,
      name: "BlaBlaCar",
      category: "Automation",
      description: "Hunter API makes it easy to find or verify professional email addresses.",
      url: "./assets/Images/featured/quotation.png"
    },
    {
      id: 7,
      name: "Meteorologisk Institutt",
      category: "Data access",
      description: "Weather and climate data.",
      url: "./assets/Images/featured/meter.png"
    },
    {
      id: 8,
      name: "Asana",
      category: "Data access",
      description: "Customize the Asana experience, leverage your data with the Asana API.",
      url: "./assets/Images/featured/asana.png"
    },
    {
      id: 9,
      name: "Mailchimp",
      category: "Automation",
      description: "Email marketing, ads, landing pages, and CRM tools to grow your business on your terms.",
      url: "./assets/Images/featured/mailchimp.png"
    }
  ];

  // Filter the data based on the search query
  const filteredData = apiData.filter(api =>
    api.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // submitAction();
      console.log(search); // Optional: Handle form submission on Enter key
    }
  }

  return (
    <div className="lg:p-20 px-8 py-16">
      <div className="font-[600] text-[28px] font-[poppins] text-center lg:leading-[45px] leading-[37px]">
        A collective list of free APIs for use in<br /> software and web development
      </div>

      {/* SEARCH BAR */}
      <div className="search-bar flex justify-center py-12">
        <div className="search-box lg:w-6/12 py-6 px-8 rounded-full border-2 relative">
          <HiOutlineSearch size="30" stroke="gray" className="absolute top-1/2 transform -translate-y-1/2 left-12" />
          <input 
            type="text" 
            placeholder="Search word" 
            className="search_field px-16 block w-full" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            onKeyDown={handleKeyDown} 
          />
        </div>
      </div>

      {/* APP */}
      <div className="search-results">
        <div className="search-subtitle text-[22px] font-[700] font-[poppins] pb-10">Featured APIs of this week</div>
        <ApiList filteredData={filteredData}/>
      </div>
    </div>
  )
}
