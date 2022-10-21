// import playita from "../assets/images/playita1.jpg";
import PlayitaVideo from "../assets/playita/videos/Playita1.mp4";

// var script = document.createElement("script");
// script.src = "https://code.jquery.com/jquery-3.6.1.min.js";
// script.integrity = "sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=";
// script.crossOrigin = "anonymous";
// document.getElementsByTagName("head")[0].appendChild(script);

const Index = () => {
  return (
    <div className="div_index">
      <h1>Centro Recreacional La Playita - Mocoa</h1>
      <div className="video_index">
        <video height="600" autoPlay muted loop>
            <source src={PlayitaVideo} type="video/mp4" />
        </video>
      </div>
      <p>Aquí puedes encontrar toda la información de La Playita.</p>
    </div>
  );
};

export default Index;
