import React, { PropTypes } from 'react'
import Button from './Button'

const Header = React.createClass({
  render () {
    const handleClick= () => {
      console.log('hey, this is something happening from within the buttons parent component!')
    }
    return (
        <header className='header layout-header'>
            <div className='logo'>
              <a className='logo-img' href='http://www.cascobay.org/'>
                <img id ='logo' src='http://cascobay.org/wp-content/uploads/2017/02/cropped-FOCB-logo_FINAL_cmyk.png' alt='Friends of Casco Bay'></img>
              </a>
            </div>
          <h1 className='title'>Casco Bay Health Index</h1>
        </header>
    )
  }
})

export default Header
