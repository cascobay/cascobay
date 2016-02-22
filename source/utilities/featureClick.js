import d3 from 'd3'

export default function(event, latlng, position, data) {
  console.log(data)
  document.getElementById('sitename').innerHTML = data.sitename;
  document.getElementById('sitelocation').innerHTML = data.sitelocation;
  document.getElementById('sitedescription').innerHTML = data.sitedescription;

}
