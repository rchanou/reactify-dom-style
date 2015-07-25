# reactify-dom-style


This module exports a single function which simply creates a React-compatible
style object from a DOM node's computed style. The function itself has zero
dependencies; if you want, you can just copy the function from the
src/module/reactify-dom-style.js file and paste it into your code.


Example usage in a React render function:

    var reactifyDOMStyle = require('reactify-dom-style');

    ...

    render(){
      var sourceStyle = reactifyDOMStyle(document.getElementById('someNodeId'));

      return <div style={sourceStyle}>
        I'm in the style of the other DOM node.
      </div>;
    }

    ...



To build the JS for demo/index.html, run the following commands in this project's root directory:


Initial Install:

    npm install


Activate Auto-Build:

    node build
