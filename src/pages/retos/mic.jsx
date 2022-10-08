import React from "react";
import { ReactMic } from "react-mic";

export default class Mic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }
 
  startRecording = () => {
    this.setState({ record: true });
    document.getElementById('text-record').innerHTML = '';
  }
 
  stopRecording = () => {
    this.setState({ record: false });
  }
 
  onStop(recordedBlob) {
    document.getElementById('text-record').innerHTML = '<a class="link" href="'+(recordedBlob.blobURL)+'" target="_blank"> Ir al audio grabado </a>';
  }
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          mimeType="audio/mp3"
        />
        <button onClick={this.startRecording} type="button">
          Start
        </button>
        <button onClick={this.stopRecording} type="button">
          Stop
        </button>

        <div>
          <p id='text-record'></p>
        </div>
      </div>
    );
  }
}