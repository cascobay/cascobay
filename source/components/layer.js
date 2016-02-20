export default {
    	user_name:'bfriedly',
    	type:'cartodb',
      sublayers:[{
      	sql:'SELECT * FROM casco_water_quality_data',
				cartocss:'#casco_water_quality_data{ marker-fill-opacity: 0.8; marker-line-color: #000000; marker-line-width: .5; marker-line-opacity: 1; marker-width: 12; marker-allow-overlap: true; } #casco_water_quality_data [zoom>=11]{ marker-width: 17; } #casco_water_quality_data [zoom>=12]{ marker-width: 20; } #casco_water_quality_data [zoom>=14]{ marker-width: 25; } #casco_water_quality_data [ index <= 100] { marker-fill: #91cf60; } #casco_water_quality_data [ index <= 85] { marker-fill: #ffffbf; } #casco_water_quality_data [ index <= 70] { marker-fill: #fc8d59; }'
      }]
}
