import React from 'react';
import Slider from 'react-slick';
import zoomer from "../../assets/zoomer.jpg";
import artvenue from "../../assets/artvenue.jpg";
import kontrastr from "../../assets/kontrastr.jpg";
import sheels from "../../assets/sheels.jpg";
import waves from "../../assets/waves.jpg";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next-arrow text-2xl border-headertext text-headertext border-2 w-9 rounded-full text-center cursor-pointer" onClick={onClick}>
      &rarr;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev-arrow border-headertext text-headertext text-2xl border-2 w-9 rounded-full text-center cursor-pointer" onClick={onClick}>
      &larr;
    </div>
  );
};

const SliderComponent = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const data = [
    { id: 1, content: "Zoomer", text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.", image: zoomer, name:"Hellen Jummy", title:"Team Lead" },
    { id: 2, content: "SHEELS", text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.", image: sheels, name:"Hellena John",title:"Co-founder" },
    { id: 3, content: "ArtVenue", text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.", image: artvenue , name:"David Oshodi",title:"Manager"},
    { id: 4, content: "Waves", text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.", image: waves, name:"Charolette Hanlin", title:"CEO" },
    { id: 5, content: "Kontrastr", text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.", image: kontrastr, name:"Ralph Edwards",title:"Product Designer" }
  ];

  return (
    <div className="slider-container overflow-hidden p-5 bg-headerbg h-auto max-h-full">
      <div className="header flex justify-between px-14 pb-8">
        <h1 className='text-5xl font-bold'>Because they love us</h1>
        <div className="flex gap-5 h-10">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      <Slider className='relative z-40' ref={sliderRef} {...settings}>
        {data.map(item => (
          <div key={item.id} className="slide-item p-14">
            <div className="bg-white p-9 w-full border border-white rounded-lg shadow-md z-50">
              <h3 className="lg:text-2xl sm:text-xl pb-7">{item.content}</h3>
              <p className='lg:text-2xl sm:text-lg whitespace-pre-wrap h-32'>{item.text}</p>
              <div className="flex pt-6">
                <img className='w-16 h-16 rounded-full object-cover' src={item.image} alt={item.content} />
                <div className='pl-4 flex flex-col justify-center'>
                  <p>{item.name}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
            <div className='bg-sliderbg w-full h-4/5 border-2 border-sliderbg absolute top-0 -z-10'></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
