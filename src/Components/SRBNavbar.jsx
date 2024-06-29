import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const SRBNavbar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className='relative z-50'>
      <div className="fixed top-3 left-4 border-gray-100  bg-[url('https://www.srvmedia.com/wp-content/uploads/2023/09/Vector-2-e1695979869806.png')] py-3 shadow backdrop-blur-2xl rounded-3xl text-white ">
        <div className='flex items-center     '>
           <div className='pl-2 ' >

            <img src="./logo.png" alt="" width={50} height={60} className='-translate-y-1' loading='lazy' />
           </div>
           
          <div className='flex justify-between items-center gap-9 px-6'>
            <div>
              <a href="/contact">contact</a>
            </div>
            <div>
              <h2 onClick={toggleOverlay} className='cursor-pointer flex items-center gap-2'> 
                <CiMenuBurger/>
                Menu </h2>
            </div>
          </div>
        </div>
      </div>

      {isOverlayVisible && (
        <div className='fixed inset-0 bg-[#171717]  text-[#747474] z-10'>
          {/* // Cross butt/on  */}
            <div className='absolute top-3 right-5'>
                <h3 className='text-white cursor-pointer' onClick={toggleOverlay}>
                   cross
                </h3>
            </div>
            {/* // Navbar Component  */}

                <div className='text-[#747474] mt-28 mx-12 '>
                    <div className=' flex flex-col justify-center items-start gap-16 '>
                       <div className='flex  gap-28  '>
                            <section className='text-5xl  flex flex-col gap-7 font-semibold text-[#747474] '>

                        <div className='cursor-pointer hover:text-white transition-all'>
                            <a href='/' >
                                About Us 
                            </a>
                        </div>
                        <div className='cursor-pointer hover:text-white transition-all'>
                            <a href='/' >
                                About Us 
                            </a>
                        </div>
                        <div className='cursor-pointer hover:text-white transition-all'>
                            <a href='/' >
                                About Us 
                            </a>
                        </div>
                        <div className='cursor-pointer hover:text-white transition-all'>
                            <a href='/' >
                                About Us 
                            </a>
                        </div>
                         
                            </section>
                        <section className=' '>
                            <div className='flex flex-col justify-center gap-4 text-lg'>
                               <div className='cursor-pointer hover:text-white transition-all '>
                                <a href='/'>servcie</a>
                                </div> 
                               <div className='cursor-pointer hover:text-white transition-all '>
                                <a href='/'>servcie</a>
                                </div> 
                               <div className='cursor-pointer hover:text-white transition-all '>
                                <a href='/'>servcie</a>
                                </div> 
                               
                            </div>
                        </section>
                       </div>
                        <div className='flex items-center gap-8 text-xl '>
                            <div className=  'cursor-pointer hover:text-white'>
                                <a href='/'>our Work </a>
                            </div>
                            <div className=  'cursor-pointer hover:text-white'>
                                <a href='/'>our Work </a>
                            </div>
                            <div className=  'cursor-pointer hover:text-white'>
                                <a href='/'>our Work </a>
                            </div>
                             
                        </div>
                    </div>
                </div>
        </div>
      )}
    </div>
  );
};

export default SRBNavbar;
