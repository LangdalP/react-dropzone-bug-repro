import React, {Component} from 'react';
import Dropzone from 'react-dropzone'

function onDrop(acceptedFiles, rejectedFiles) {
  console.log('Accepted files: ', acceptedFiles);
  console.log('Rejected files: ', rejectedFiles);
  let string = "";
  for (var i = 0; i < 10000; i++) {
    string += '' + i;
  }
  console.log(string);
}

class App extends Component {
  render() {
    return (
      <Dropzone onDrop={ onDrop }>
        <div className="inside-dropzone">
        </div>
      </Dropzone>
    )
  }
}

export default App;
