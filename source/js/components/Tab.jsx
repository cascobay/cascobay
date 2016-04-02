import React, { PropTypes } from 'react'

// This is a stateless react component (just a function)
const Tab = ({active, children, onClick}) => {
  //render children if tab is active
  if(active) {
    return <span className='activeViewButton'>{children}</span>
  }

  return (
    <a className='viewButton' href='#'
      onClick={event => {
        event.preventDefault()
        onClick()
      }}
      >
      {children}
    </a>
  )
}

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}


export default Tab
