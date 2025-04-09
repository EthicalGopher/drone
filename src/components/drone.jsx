import React from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import Droneani from "../assets/drone.riv";
import "../assets/styles/hero.scss";

const RiveWrapper = () => {
  const { RiveComponent } = useRive({
    src: Droneani,
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <RiveComponent
      id="drone"
      style={{
        maxWidth: "100vw",
        height: "100%",

        background: "transperent",
      }}
    />
  );
};

export default function Drone() {
  return (
    <React.Fragment>
      <section
        className=" container mx-auto flex flex-col  inset"
        id="hero_section"
        style={{
          position: "relative",

          maxHeight: "100vh",
          maxWidth: "100vw",
        }}
      >

<div className="absolute bottom-20  w-full z-5 flex items-center justify-center lg:hidden">

<Scrolldown/>
</div>



        <ul
          className=" flex  justify-between w-full  h-screen md:items-center items-end  absolute "
          style={{ zIndex: "1" }}
        >
          <div className=" hidden lg:flex  flex-col md:gap-12 px-3">
            <li className="fancy">
              <span className="top-key"></span>
              <span className="text">Audio Announcements and Warnings</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </li>
            <li className="fancy">
              <span className="top-key"></span>
              <span className="text">Real Time Alert System</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </li>
            <li className="fancy">
              <span className="top-key"></span>
              <span className="text">Laser scanner / LIDAR / LADAR</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </li>
          </div>
      
          <RiveWrapper />
         
          <div className= "hidden lg:flex  flex-col md:gap-12 px-3">
            <li className="fancy">
              <span className="top-key"></span>
              <span className="text">Geofencing and Obstacle Avoidance</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </li>
            <li className="fancy">
              <span className="top-key"></span>
              <span className="text">Thermo-graphic/ IR cameras</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </li>
            <li className="fancy">
              <span className="top-key"></span>
              <span className="text">RGB & Multi-Spectral Sensor</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </li>
          </div>
        </ul>

        <div
          className=" justify-center align-center  absolute "
          id="header"
          style={{
            zIndex: "-2",
            minWidth: "100%",
          }}
        >
          
          <p id="heading" className="2xl:text-[10vw] text-7xl md:text-9xl">
            Jatayu
          </p>
          <p id="subheading" className="2xl:w-[40%] xl:w-[50%]  lg:w-[30vw]  w-[90vw]">
            Tea gardens and other plantations are large and expensive to
            supervise manually. A drone-based system using computer vision can
            reduce these costs by simplifying monitoring and aiding in effective
            plantation management.
          </p>
        

        </div>
        <div className="absolute bottom-0 left-0" style={{zIndex:"-5"}}>

        <Scrolldown/>
        </div>
        <div
          className="background-divider1 divider1 absolute "
          style={{ zIndex: "-5", bottom: "0" }}
        ></div>
        <span
          className="bg-red-200 w-full h-screen absolute"
          style={{ zIndex: "-999" }}
        ></span>
      </section>
    </React.Fragment>
  );
}


const Scrolldown = () => {
  return(
    <a className="button rotate-180" href="#mobilefeature" >
    <svg viewBox="0 0 384 512" className="svgIcon">
      <path
        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
      ></path>
    </svg>
  </a>
  )
}