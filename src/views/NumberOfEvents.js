import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = { errorText: '' };
	}

	handleChange = e => {
		const { updateEventNumber } = this.props;
		let eventNumber = e.target.value;
		if (eventNumber < 0 || eventNumber > 32) {
			this.setState({
				errorText: 'Please enter an event number between 0 and 32',
			});
			return;
		}
		this.setState({ errorText: '' });
		updateEventNumber(eventNumber);
	};

	render() {
		const { errorText } = this.state;
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
				{errorText && <ErrorAlert text={errorText} />}
			</div>
		);
	}
}

export default NumberOfEvents;
