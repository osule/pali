import React from 'react';
import './App.css';

function App() {
  const ref = React.createRef();
  React.useEffect(() => {
    if(ref.current) {
      window.renderApplet({key: "value"}, "#applet");
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apps</h1>
      </header>
      <div ref={ref} id="applet"></div>
    </div>
  );
}

export default App;
