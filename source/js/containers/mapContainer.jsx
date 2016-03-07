import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectFeature } from 'actions'
import Map from 'components/map'

const mapStateToProps = (state) => {
  return {
    cartodbData: state.cartodbData,
    selectedFeature: state.selectedFeature
  }
}

// Allows us to dispatch actions as component props
  //Like this.onFeatureClick(feature)
const mapDispatchToProps = (dispatch)=> {
  // bind action creator to dispatch because this is passed to a react component that is unaware of redux
  return {
    selectFeature: bindActionCreators({ selectFeature }, dispatch)
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
