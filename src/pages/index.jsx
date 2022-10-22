import YoutubePlayer from "../services/video";

const Index = () => {
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
