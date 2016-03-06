import React from 'react';

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
      <div className='layout-App cf'>
        <Header className='layout-header' />
        <Map className='layout-map'/>
        <Sidebar className='layout-sidebar' />
      </div>
    );
  }
});

export default App
