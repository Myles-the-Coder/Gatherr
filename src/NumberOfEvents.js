import React, { Component } from 'react';

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = {
			eventNumber: 32,
		};
	}

	handleChange = e => {
		const value = e.target.value;
		this.setState({ eventNumber: Number(value) });
	};

	render() {
		return (
			<div className='NumberOfEvents'>
				label
				<input
					type='text'
					className='events-input'
					value={this.state.eventNumber}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;
