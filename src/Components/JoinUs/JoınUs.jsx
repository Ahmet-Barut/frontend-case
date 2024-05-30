import React from 'react';
import { FaCircle } from "react-icons/fa";
import video from "../../assets/video.jpg";
import { IoMdCheckmark } from "react-icons/io";

const JoinUs = () => {
  return (
    <div className="flex font-roboto bg-headerbg px-5 md:px-20 justify-center pb-14 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-around bg-white w-full md:w-[90%] mt-36 border-2 border-white rounded-2xl pb-12">
        <div className="flex flex-col justify-center p-5 md:p-0">
          <h1 className='text-4xl md:text-[56px] font-bold mb-5 md:mb-0  lg:mb-10'>Why join us</h1>
          <div className="text-[20px] font-normal space-y-3">
            <span className="flex items-center"><IoMdCheckmark /><p className="ml-2">Est et in phareta magna adipiscing ornare aliquam</p></span>
            <span className="flex items-center leading-[32.5px]"><IoMdCheckmark /><p className="ml-2">Tellus arcu sed consequat ac velit ut eu blandit.</p></span>
            <span className="flex items-center leading-[32.5px]"><IoMdCheckmark /><p className="ml-2">Ullamcorper ornare in et egestas dolor orci.</p></span>
          </div>
          <button className="border-2 border-headertext text-headertext font-semibold text-lg rounded-lg py-2 w-52 mt-4">
            Sign up Now
          </button>
        </div>
        <div className='flex flex-col  bg-white border-2 border-white rounded-xl p-2 mt-5 md:mt-3 shadow-2xl'>
          <div className="circles flex pt-4 pb-3 gap-2">
            <div className="text-red text-sm">
              <FaCircle />
            </div>
            <div className="text-yellow text-sm">
              <FaCircle />
            </div>
            <div className="text-green text-sm">
              <FaCircle />
            </div>
          </div>
          <div>
            <img className='w-full md:w-[520px] h-auto' src={video} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs;
