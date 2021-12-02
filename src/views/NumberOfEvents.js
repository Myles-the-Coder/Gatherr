import React, { Component } from 'react';

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = {
			eventNumber: 32,
      error: false
		};
	}

	handleChange = e => {
		let eventNumber = Number(e.target.value);
		if (eventNumber < 1 || eventNumber > 32) {
      this.setState({error: true})
    } else {
      this.setState({ eventNumber, error: false });
      this.props.updateEvents(this.props.currentLocation, eventNumber);
    }
	};

	render() {
    const {error} = this.state
		return (
			<div className='NumberOfEvents'>
				<label htmlFor='event-number'>Number of events: </label>
				<input
					name='event-number'
					type='number'
					className='events-input'
          min='1'
          max='32'
					value={this.state.eventNumber}
					onChange={this.handleChange}
				/>
        {error ? 'Please select a number between 1 and 32' : ''}
			</div>
		);
	}
}

export default NumberOfEvents;
