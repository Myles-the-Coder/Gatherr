import React, { Component } from 'react';

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = { error: false };
	}

	handleChange = e => {
		const { updateEventNumber } = this.props;
		let eventNumber = e.target.value;
		eventNumber < 1 || eventNumber > 32
			? this.setState({ error: true })
			: this.setState({ error: false });
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
					min='1'
					max='32'
					value={numberOfEvents}
					onChange={this.handleChange}
				/>
				{error && 'Please select a number between 1 and 32'}
			</div>
		);
	}
}

export default NumberOfEvents;
