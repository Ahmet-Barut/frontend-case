import React from 'react';
import { FaCircle, FaSearch } from 'react-icons/fa';
import video from '../../assets/video.jpg';
import { GoVerified } from 'react-icons/go';
import { BiRadioCircle, BiRocket } from 'react-icons/bi';
import { FaComputer } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import card2 from "../../assets/card2.jpg";
import screen from "../../assets/screen.jpg";

const Collection = () => {
  return (
    <div className="flex flex-col justify-around pt-10 bg-headerbg py-40 px-14 font-roboto">
      <div className="pb-20">
        <h1 className="text-5xl font-bold">Grow your collection</h1>
        <p className="text-xl pt-5">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="lg:mr-10">
          <div className="relative mb-10 lg:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 top-3">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Bibendum Tellus"
              className="pl-10 pr-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-cardbg placeholder-opacity-100 border-none"
            />
          </div>
          <div className="flex flex-col justify-start text-center text-xl">
            <button className="flex items-center gap-4 py-4"> <GoVerified /> Cras eget</button>
            <button className="flex items-center gap-4 py-4"> <BiRocket /> Dolor pharetra</button>
            <button className="flex items-center gap-4 py-4"> <FaComputer /> Amet, fringilla</button>
            <button className="flex items-center gap-4 py-4"> <BiRadioCircle /> Amet nibh</button>
            <button className="flex items-center gap-4 py-4"> <CiSettings /> Sed velit</button>
          </div>
        </div>
        <div className="relative bg-headerbg mt-10 lg:mt-0 lg:pl-10 flex justify-center">
          <div className="relative flex flex-col items-center">
            <div className="w-full lg:w-[759px] h-[451px] flex flex-col bg-white border-2 border-white rounded-xl p-2 mt-3 shadow-2xl">
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
                <img className="w-[759px] h-[390px]" src={video} alt="" />
              </div>
            </div>
            <div className="w-full lg:w-[759px] h-[451px] flex flex-col bg-white border-2 border-white rounded-xl p-2 mt-3 shadow-2xl absolute top-20  lg:top-20 lg:left-20 sm:top-10 sm:left-0">
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
                <img className="w-[759px] h-[390px]" src={card2} alt="" />
              </div>
            </div>
            <div className="lg:w-[256px] h-[286px] flex flex-col bg-white border-2 border-white rounded-xl p-2 mt-3 shadow-2xl absolute -bottom-36 lg:-bottom-28 lg:-right-44 sm:-bottom-36 sm:-right-0">

              <div>
                <img className=" w-[256px] h-[266px] lg:w-[256px] lg:h-[266px] sm:w-[156px] sm:h-[123px] " src={screen} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
