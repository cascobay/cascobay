import React from 'react';
import ReactDom from 'react-dom';

//TODO: import header, sidebar, map elements

// App component
const App = React.createClass({
  render () {
    return (
      <Header />
      <Sidebar />
      <Map />
    );
  }
});

// render App to the DOM, mounted on index.html's <div id='app'></div>
ReactDOM.render(
  <App />, document.getElementById('app')
);
