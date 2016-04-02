import { connect } from 'react-redux'
import { selectView } from 'actions'
import Sidebar from 'components/Sidebar'

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
    }
  }
}


const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
