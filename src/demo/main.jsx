import React from 'react';
import reactifyDomStyle from '../module/reactify-dom-style';

class Demo extends React.Component {

  state = { style: {} };

  render(){
    return <div>
      <div style={this.state.style}>
        I am a React Component that can get its style from the regular DOM node.
      </div>
      <button onClick={this._onClick.bind(this)}>
        Set to regular DOM node style
      </button>
    </div>;
  }

  _onClick(){
    var style = reactifyDomStyle(document.getElementById('source'));
    console.log(style);
    this.setState({ style });
  }

}

React.render(<Demo />, document.getElementById('main'));
