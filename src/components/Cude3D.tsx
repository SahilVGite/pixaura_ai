import React from "react";
import "./cube.css";
import face1 from '../assets/videos/face1.mp4';
import face2 from '../assets/videos/face2.mp4';
import face3 from '../assets/videos/face3.mp4';
import face4 from '../assets/videos/face4.mp4';
import face5 from '../assets/videos/face5.mp4';
import face6 from '../assets/videos/face6.mp4';

const Cube3D = () => {
  return (
    <div className="scene my-15">
      <div className="cube">
        <div className="face front"><video src={face1} autoPlay loop playsInline muted preload="eager" className="w-full h-full object-cover rounded-2xl"></video></div>
        <div className="face back"><video src={face2} autoPlay loop playsInline muted preload="eager" className="w-full h-full object-cover rounded-2xl"></video></div>
        <div className="face right"><video src={face3} autoPlay loop playsInline muted preload="eager" className="w-full h-full object-cover rounded-2xl"></video></div>
        <div className="face left"><video src={face4} autoPlay loop playsInline muted preload="eager" className="w-full h-full object-cover rounded-2xl"></video></div>
        <div className="face top"><video src={face5} autoPlay loop playsInline muted preload="eager" className="w-full h-full object-cover rounded-2xl"></video></div>
        <div className="face bottom"><video src={face6} autoPlay loop playsInline muted preload="eager" className="w-full h-full object-cover rounded-2xl"></video></div>
      </div>
    </div>
  );
};

export default Cube3D;
