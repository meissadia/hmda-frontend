import mapbox from 'mapbox-gl'
import COUNTIES from '../constants/counties.js'
import STATES from '../constants/fipsToState.js'

const geomap = {
  county: COUNTIES,
  state: STATES
}

const popup = new mapbox.Popup({
  closeButton: false,
  closeOnClick: false,
  maxWidth: '750px'
})

function buildPopupHTML(geography, data, features){
  const feature = features[0].properties['GEOID']
  return '<h4>' + feature + ' - ' + getFeatureName(geography, feature) + '</h4>'
}

function getFeatureName(geography, feature){
  return geomap[geography][feature]
}

export {
  popup,
  buildPopupHTML,
  getFeatureName
}