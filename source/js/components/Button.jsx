import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Button = React.createClass({
  getInitialState() {
    return {
      hover: false,
      pressed: false
    }
  },
  render () {
    let btnClass = classNames({
      'button': true,
      'button-external': this.props.buttonType === 'external',
      'button-internal': this.props.buttonType === 'internal',
      'button-over': this.state.hover,
      'button-pressed': this.state.pressed,
      'active-button': this.props.active
    })
    return (
      <a className={this.props.className + ' ' + btnClass}
        href={this.props.href}
        onMouseEnter={this._onMouseEnter}  onMouseLeave={this._onMouseLeave}
        onMouseDown={this._onMouseDown}
        onMouseUp={this._onMouseUp}
        onClick = {this._onClick}
        >
        <div
        >
          {this.props.text}
          {this.props.children}
        </div>
      </a>
    )
  },
  propTypes: {
    handleClick: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    text: PropTypes.string
  },
  _onMouseEnter(){
    this.setState({hover: true})
  },
  _onMouseLeave(){
    this.setState({hover: false, pressed: false})
  },
  _onMouseDown(){
    console.log('mouse down!')
    this.setState({pressed: true})
  },
  _onMouseUp(){
    console.log('mouse up!')
    this.setState({pressed: false})
  },
  _onClick() {
    // reset the internal state of the button to not pressed
    this.setState({'pressed': false})

    //Execute the click functionality handed down by the parent component
    this.props.handleClick()
  }
})


export default Button
