import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import screen from "../../assets/screen.jpg";

const markers = [
  { coordinates: { top: '55%', left: '35%' } },
  { coordinates: { top: '40%', left: '50%' } },
  { coordinates: { top: '20%', left: '30%' } },
  { coordinates: { top: '53%', left: '55%' } },
  { coordinates: { top: '65%', left: '75%' } },
  { coordinates: { top: '20%', left: '60%' } },
  { coordinates: { top: '15%', left: '75%' } },
  { coordinates: { top: '28%', left: '65%' } },
  { coordinates: { top: '62%', left: '55%' } },
];

const Map = () => {
  return (
    <div className="bg-headertext h-[900px] relative font-roboto">
      <ComposableMap style={{ width: '100%', height: '100%' }}>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo} 
                style={{
                  default: {
                    fill: "#96440c",
                    outline: "none"
                  },
                  hover: {
                    fill: "#FDE68A",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#FFFFFF",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {markers.map(({ coordinates }, index) => (
        <div 
          key={index} 
          className="w-5 h-5 text-elips absolute border-2 border-elips rounded-full overflow-hidden" 
          style={{ top: coordinates.top, left: coordinates.left }}
        >
        </div>
      ))}
      <div>
        <div className="flex w-[250px] h-[236px] flex-col bg-white border-2 border-white rounded-xl p-2 mt-3 shadow-2xl absolute top-[19%] left-[29%]">
          <div>
            <img className="w-[250px] h-[216px]" src={screen} alt="" />
          </div>
        </div>
        <div className="absolute top-[46%] left-[29%]"> 
          <p className="w-[240px] bg-info text-cardbg border rounded-lg border-info p-2 text-sm">Emma Simpson collected one pair of Cool Shoes</p>
        </div>
        <div className="absolute top-[51%] left-[35%] bg-info w-5 h-5 rotate-45">
        </div>
        <div className="absolute top-[70%] left-[50%] sm:top-[20%] sm:left-[40%] lg:top-[70%] lg:left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold flex flex-col items-center">
          <h1 className="text-[30px] sm:text-[50px] lg:text-[96px]">11,658,467</h1>
          <h1 className="text-[20px] sm:text-[30px] lg:text-[66px]">Shoes Collected</h1>
        </div>
      </div>
    </div>
  );
};

export default Map;
