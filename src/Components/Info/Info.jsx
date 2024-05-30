import React from 'react';
import { BiTrophy } from 'react-icons/bi';
import { BsCup } from 'react-icons/bs';
import { PiTelevision } from 'react-icons/pi';

const Info = () => {
  return (
    <div className="relative bg-headerbg info-card px-5 md:px-20 flex flex-col md:flex-row pt-24 justify-between pb-20">
      <div className="info-card-title gap-1 flex flex-col w-full md:w-1/4 mb-10 md:mb-0">
        <BiTrophy  className="text-headertext" size={34}/> 
        <p className='font-semibold text-2xl'>Nibh viverra</p>
        <p className="text-wrap font-normal leading-7 text-[18px]">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="info-card-title gap-1 flex flex-col w-full md:w-1/4 mb-10 md:mb-0">
        <BsCup  className="text-headertext" size={34}/>
        <p className='font-semibold text-2xl'>Cursus amet</p>
        <p className="text-wrap font-normal leading-7 text-[18px]">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="info-card-title gap-1 flex flex-col w-full md:w-1/4">
        <PiTelevision className="text-headertext" size={34}/>
        <p className='font-semibold text-2xl'>Ipsum fermentum</p>
        <p className="text-wrap font-normal leading-7 text-[18px]">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
        </p>
      </div>

      {/* <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[100vw] border-l-transparent border-t-[100vh] border-t-sneakerbg -z-10"></div> */}
    </div>
  );
};

export default Info;
