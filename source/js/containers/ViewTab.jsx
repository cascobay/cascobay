import { connect } from 'react-redux'
import { selectView } from 'actions'
import Tab from 'components/Tab'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.view === state.sidebarView
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectView(ownProps.view))
    }
  }
}

const ViewTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab)

export default ViewTab
