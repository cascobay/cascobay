import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Sidebar from 'components/sidebar'

const mapStateToProps = (state) => {
  return {

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
