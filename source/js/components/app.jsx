import React from 'react';

// Import Styles
import style from 'styles/main.scss';

// Import react components
import Header from 'components/Header';
import SidebarContainer from 'containers/SidebarContainer';
import IntroSidebar from 'components/IntroSidebar'
import MapContainer from 'containers/MapContainer';

// App component
const App = React.createClass({
  render () {
    // render appropriate sidebar component depending on appState
    let sidebar;
    if (this.props.appState === 'LANDING_PAGE') {
      sidebar= (<IntroSidebar />)
    }
    else {
      sidebar = (<SidebarContainer />)
    }

    return (
      <div className='layout-App cf'>
        <Header className='layout-header' />
        <MapContainer />
        {sidebar}
      </div>
    );
  }
});

// this gets rendered in ../index.js (the redux container component for the entire app)
export default App
