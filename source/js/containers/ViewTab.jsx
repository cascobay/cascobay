import { connect } from 'react-redux'
import { selectView } from 'actions'
import Button from 'components/Button'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.view === state.sidebarView
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => {
      dispatch(selectView(ownProps.view))
    }
  }
}

const ViewTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ViewTab
