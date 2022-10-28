import YoutubePlayer from "../services/video";
// import { useEffect } from "react";

const Index = () => {

  // useEffect(()=>{
  //   document.getElementById("video_index").style.width = 1280 + 'px';
  //   document.getElementById("video_index").style.height = 720 + 'px';
  //   }, []);

  return (
    <div className="div_index">
      <h1>Centro Recreacional La Playita - Mocoa</h1>
      <div className="video_index" id="video_index">
        <YoutubePlayer url="https://www.youtube.com/embed/Fm-ZzLoRWs0?showinfo=0&modestbranding=1" />
      </div>
    </div>
  );
};

export default Index;
