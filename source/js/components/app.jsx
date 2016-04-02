import React from 'react';

// Import Styles
import style from 'styles/main.scss';

// Import react components
import Header from 'components/header';
import SidebarContainer from 'containers/sidebarContainer';
import MapContainer from 'containers/mapContainer';

// App component
const App = React.createClass({
  render () {
    return (
      <div className='layout-App cf'>
        <Header className='layout-header' />
        <MapContainer />
        <SidebarContainer />
      </div>
    );
  }
});

// this gets rendered in ../index.js (the redux container component for the entire app)
export default App
