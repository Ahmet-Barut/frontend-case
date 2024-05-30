import React from "react";
import sneaker from "../../assets/sneaker.png";
import { FaRegPlayCircle } from "react-icons/fa";

const CollectibleSneakers = () => {
  const title = "Collectible Sneakers";
  const text =
    "Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.";
  return (
    <div className=" lg:h-max lg:bg-headerbg flex-col collectible-sneakers font-roboto flex lg:flex-row sm:flex-row lg:pt-28 pt-2 overflow-hidden lg:p-20 p-2 h-full lg:pb-0 sm:pb-30 ">
      <div className="collectible-sneakers-left w-[100%] lg:w-[50%] relative top-20 flex flex-col gap-5 ">
        <div className="collectible-sneakers-left-title">
          <h1 className=" text-[45px] font-[700] leading-[79.2px]  tracking-wide lg:text-[72px] sm:text-[28px]">
            {title}
          </h1>
        </div>
        <div className="collectible-sneakers-left-text">
          <p className="text-wrap text-[18px] leading-8">{text}</p>
        </div>
        <div className="collectible-sneakers-left-under flex items-center gap-5">
          <button className="border-2 border-headertext text-headertext  text-[22px] font-semibold px-10  py-4 text-lg  rounded-lg z-10 ">
            Sign up Now
          </button>

          <span className="flex text-headertext font-semibold text-[22px] gap-3 items-center">
            <FaRegPlayCircle /> Watch Demo
          </span>
        </div>
      </div>
      <div className="collectible-sneakers-right w-full  lg:w-1/2 h-[372px] relative ">
        <img
          className=" w-[636px] float-right absolute lg:top-[-320px] z-10 -top-10 -right-0  lg:right-[-90px] overflow-hidden"
          src={sneaker}
          alt=""
        />
        <div className=" bg-sneakerbg w-[237px] h-[212px]  lg:w-[367px] lg:h-[372px] border-2 right-20  top-32 lg:right-[30px] bottom-0 lg:top-0 border-sneakerbg  rounded-[60px] absolute "></div>
      </div>
    </div>
  );
};

export default CollectibleSneakers;
