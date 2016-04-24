import { connect } from 'react-redux'
import App from 'components/App'

/*
**  Make App.jsx component aware of the redux appState ('LANDING_PAGE' OR 'EXPLORE_MAP')
**  So we can render an intro sidebar or the data exploratory sidebar
*/
const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer
