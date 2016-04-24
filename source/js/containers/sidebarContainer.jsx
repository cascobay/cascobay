import { connect } from 'react-redux'
import { selectView, enterLandingPage } from 'actions'
import Sidebar from 'components/Sidebar'

/*
**  Make Sidebar.jsx component aware of the selected feature's data
**  and whether the user is viewing the description or data window
*/
const mapStateToProps = (state) => {
  return {
    currentFeature: state.selectedFeature.Feature,
    view: state.sidebarView
  }
}

const mapDispatchToProps = (dispatch)=> {
  // these dispatch methods become component props that happen to be functions
  return {
    selectView: (view) => {
      dispatch(selectView(view))
    },
    enterLandingPage: () => {
      dispatch(enterLandingPage())
    }
  }
}


const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
