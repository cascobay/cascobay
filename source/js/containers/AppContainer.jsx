import { connect } from 'react-redux'
import { selectFeature, getCartodbData } from 'actions'
import App from 'components/App'

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer
