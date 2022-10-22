import React from "react";
import ReactPlayer from "react-player/youtube";

export default class YoutubePlayer extends React.Component {
  render() {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className="react-player"
          url={this.props.url}
          width={"1280px"}
          height={"720px"}
          playing={true}
          muted={true}
          loop={true}
        />
      </div>
    );
  }
}
