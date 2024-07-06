import React from 'react';

const ServiceGrid = () => {
  return (
    <div className='block mx-auto   sm:p-10'>
      <div className="w-full  grid grid-cols-1 xl:grid-cols-3 gap-4 px-4 py-4">
        <div className="relative h-auto w-full bg-blue-600 rounded-xl mx-auto cursor-pointer">
          <img src="./mob.jpg" alt="" className='rounded-xl h-full object-cover w-screen
          ' />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className='font-bold text-lg sm:text-2xl'>Mobile App Development:</h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
               Create intuitive and engaging mobile applications.</p>
          </div>
        </div>
        <div className="relative w-full h-auto bg-blue-900 rounded-xl col-span-2 mx-auto cursor-pointer">
          <video src="./appvideo.mp4" autoPlay muted loop className='w-full rounded-xl  ' />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className='font-bold text-lg sm:text-2xl'>Mobile App Development:</h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
               Create intuitive and engaging mobile applications.</p>
          </div>
        </div>

        <div className="relative w-full h-auto bg-blue-900 rounded-xl col-span-2 mx-auto cursor-pointer">
          <video src="./edting.mp4" autoPlay muted loop className='rounded-xl opacity-65' />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className='font-bold text-lg sm:text-2xl'>Mobile App Development:</h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
               Create intuitive and engaging mobile applications.</p>
          </div>
        </div>
        <div className="relative h-auto w-full bg-blue-600 rounded-xl mx-auto cursor-pointer">
          <img src="./marketig.jpg" alt="" className=' w-full rounded-xl h-full object-cover mx-auto border' />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-75 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className='font-bold text-lg sm:text-2xl'>Mobile App Development:</h3>
            <p className="text-white text-center p-6 text-base sm:text-xl">
               Create intuitive and engaging mobile applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceGrid;
