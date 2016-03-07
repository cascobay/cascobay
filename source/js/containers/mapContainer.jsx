import { connect } from 'react-redux'
import { selectFeature } from 'actions'

const mapStateToProps = (state) => {
  return {
    features:
  }
}

// Allows us to dispatch actions as component props
  //Like this.onFeatureClick(feature)
const mapDispatchToProps = (dispatch) => {
  return {
    onFeatureClick: (feature) => {
      dispatch(selectFeature(feature))
    }
  }
}
