import React from "react";
import ReactPlayer from "react-player/youtube";

export default class YoutubePlayer extends React.Component {
  render() {
    return (
        <ReactPlayer
          className="react-player"
          url={this.props.url}
          width={"90%"}
          height={"90%"}
          playing={true}
          muted={true}
          loop={true}
        />
    );
  }
}
