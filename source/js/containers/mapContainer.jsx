import { connect } from 'react-redux'
import { clickFeature, getCartodbData } from 'actions'
import Map from 'components/Map'

/*
**  Pass cartodbData to the Map component as props
**  So we can then add the geojson to the leaflet map object
*/
const mapStateToProps = (state) => {
  return {
    cartodbData: state.cartodbData
  }
}

  //  Allows us to dispatch actions as component props
  
const mapDispatchToProps = (dispatch)=> {
  // these dispatch methods become component props that happen to be functions
  return {
    getCartodbData: (username, query) => {
      dispatch(getCartodbData(username, query))
    },
    clickFeature: (feature) => {
      dispatch(clickFeature(feature))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
