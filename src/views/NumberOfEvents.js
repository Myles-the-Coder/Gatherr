import React, { Component } from 'react';

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = { error: false };
	}

	handleChange = e => {
		const { updateEventNumber } = this.props;
		let eventNumber = e.target.value;
		if (eventNumber < 0 || eventNumber > 32) {
			this.setState({ error: true });
			return;
		}
		this.setState({ error: false });
		updateEventNumber(eventNumber);
	};

	render() {
		const { error } = this.state;
		const { numberOfEvents } = this.props;
		return (
			<div className='NumberOfEvents'>
				<label htmlFor='event-number'>Number of events: </label>
				<input
					name='event-number'
					type='number'
					className='events-input'
					value={numberOfEvents}
					onChange={this.handleChange}
				/>
				{error && 'Please select a number between 1 and 32'}
			</div>
		);
	}
}

export default NumberOfEvents;
