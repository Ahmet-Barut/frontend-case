import React from 'react';
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import { FiShoppingCart } from "react-icons/fi";

const Cards = () => {
  const cardData = [
    {
      image: card1,
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
    },
    {
      image: card2,
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
    },
    {
      image: card3,
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
    }
  ];

  return (
    <div className="bg-cardbg text-white px-5 md:px-20 font-roboto overflow-hidden pb-20">
      <div className="flex flex-col md:flex-row justify-between items-center pt-14 pb-10">
        <h1 className="text-4xl md:text-[56px] font-bold mb-5 md:mb-0">The best of the best</h1>
        <button className="border-2 border-white text-white text-[18px] font-semibold px-12 py-3 rounded-lg">Sign Up Now</button>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {cardData.map((card, index) => (
          <div key={index} className="rounded overflow-hidden bg-cardbg shadow-lg shadow-white w-full md:w-[30%]">
            <img className="w-full h-[280px] object-cover" src={card.image} alt={card.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base leading-8 text-[18px] font-normal">
                {card.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-8">
              <button className='flex border-2 border-white text-white text-[18px] font-semibold py-3 rounded-lg w-full justify-center items-center gap-4'>
                <FiShoppingCart />Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards;
