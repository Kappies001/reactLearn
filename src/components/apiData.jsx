import React from 'react';

export default function ApiList({filteredData}) {

  return (
    <div className="lg:grid grid-cols-3 gap-4">
      {
        filteredData.length > 0 ? (
          filteredData.map((api) => (
            <div key={api.id} className="p-6 bg-white rounded-lg lg:mb-0 mb-8 flex lg:flex-row flex-col gap-6 card_shadow">
              <img src={api.url} alt={`${api.name} logo`} className="w-12 h-12" />
              <div>
                  <h2 className="font-[poppins] text-xl font-bold">{api.name}</h2>
                  <p className="font-[poppins] text-sm text-gray-500 my-2">{api.category}</p>
                  <p className="font-[poppins] mt-2 text-gray-700">{api.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[40px] text-gray-500 text-center font-[700] opacity-50 col-span-3">No results found</p>
        )
      }
    </div>
  );
}
