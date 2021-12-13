import React, { Component } from 'react'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.color = null
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: '1.2rem',
      backgroundColor: 'whitesmoke',
      padding: '10px',
      borderRadius: '5px'
    }
  }

  render() {
    return (
      <div className='Alert'>
      <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    )
  }
}

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
      this.color = '#f8b500'
    }
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
      this.color = '#cc0202'
    }
}

