import React from 'react';
import ReactDOM from 'react-dom';

// Import Styles
import style from 'styles/main.scss';

// Import react components
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import Map from 'components/map';

// App component
const App = React.createClass({
  render () {
    return (
      <div className='cf'>
        <Header />
        <Sidebar />
        <Map/>
      </div>
    );
  }
});

// render App to the DOM, mounted on index.html's <div id='app'></div>
ReactDOM.render(
  <App />, document.getElementById('app')
);
