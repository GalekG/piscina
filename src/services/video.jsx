import React from "react";
import ReactPlayer from "react-player/youtube";

export default class YoutubePlayer extends React.Component {
  render() {
    return (
        <ReactPlayer
          className="react-player"
          url={this.props.url}
          width={"70%"}
          height={"70%"}
          playing={true}
          muted={true}
          loop={true}
        />
    );
  }
}
