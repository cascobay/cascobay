import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Sidebar from 'components/sidebar'

const mapStateToProps = (state) => {
  return {
    currentFeature: state.selectedFeature.Feature
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
export default SidebarContainer
