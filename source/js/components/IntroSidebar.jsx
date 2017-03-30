import React, { PropTypes } from 'react'

const IntroSidebar = React.createClass({
  render () {
    return (
      <section className="sidebar intro layout-sidebar">
        <h1 className='intro-title'> About the Health Index Score </h1>
          
        <p className='intro-paragraph'>
          Click on any dot in the map to learn about that site and see its score.
          </p>
        <p className='intro-paragraph'>
            Friends of Casco Bay has developed the Casco Bay Health Index, an easy-to-interpret, visual guide to the health of the Bay.  The index allows us to integrate data from selected water quality parameters into a single value to compare and rank each site as Good (green), Fair (yellow), or Poor (red).  A score of 85 and above is considered "Good", a score of 70 to 84 is "Fair", and anything below 70 falls into the "Poor" category.
          </p>
          <p className='intro-paragraph'>
            Overall, the water quality in Casco Bay is good, but there are instances when low oxygen, low pH, and murky waters are cause for concern.
          </p>
          <p className='intro-paragraph'>
            The relative rankings were calculated by analyzing dissolved oxygen, water clarity, and pH data from shoreside sites that our volunteer Citizen Stewards monitored from 2012-2016.  The values we chose to use were the 90th percentile of the dissolved oxygen percent saturation, the mean of the Secchi depth, and the mean of the diurnal differences in pH.
          </p>
          <p className='intro-paragraph'>
            For detailed information, read our <a href='http://www.cascobay.org/health-index'>Commonly Asked Questions about the Casco Bay Health Index. </a>
          </p>
          <p className='intro-paragraph'>
            Thank you to nearly 500 volunteer citizen scientists around the Bay who made our Health Index possible.
          </p>
      </section>
    )
  }
})

export default IntroSidebar
