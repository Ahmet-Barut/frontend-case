import React from "react";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="px-6 lg:px-14 bg-cardbg text-white font-roboto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center mx-auto">
        <div className="text-center">
          <h4 className="text-lg font-semibold pb-4">Product</h4>
          <ul className="flex flex-col gap-4">
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold pb-4">Solutions</h4>
          <ul className="flex flex-col gap-4">
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Design</li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold pb-4">Support</h4>
          <ul className="flex flex-col gap-4">
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold pb-4">Get the app</h4>
          <div className="flex flex-col gap-2 items-center">
            <img width={160} src={appstore} alt="App Store" />
            <img width={160} src={googleplay} alt="Google Play" />
          </div>
          <div className="pt-4">
            <h4 className="text-lg font-semibold sm:mb-4">Follow Us</h4>
            <div className="flex text-2xl gap-5 justify-center">
              <a href="# ">
                <FaYoutube />
              </a>
              <a href="# ">
                <FaFacebook />
              </a>
              <a href="# ">
                <FaTwitter />
              </a>
              <a href="# ">
                <FaInstagram />
              </a>
              <a href="# ">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:justify-center lg:justify-between flex-col lg:flex-row pt-8 border-t border-gray-400 mt-8">
        <div className="text-center lg:text-left">
          <p>Collers @2023. All rights reserved.</p>
        </div>
        <div className="flex gap-7 items-center justify-center lg:justify-start mt-4 lg:mt-0">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <span className="flex gap-3 items-center">
            <GrLanguage />
            <p>EN</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
