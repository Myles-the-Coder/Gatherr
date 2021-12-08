import React from 'react';
import {InfoAlert} from './Alert';

class CitySearch extends React.Component {
	constructor() {
		super();
		this.state = {
			query: '',
			suggestions: [],
			showSuggestions: undefined,
			infoText: '',
		};
	}

	handleInputChange = e => {
		const { locations } = this.props;
		const value = e.target.value;
		const suggestions = locations.filter(location => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});

		suggestions.length === 0
			? this.setState({
					query: value,
					infoText: 'Cannot find events for that city. Please try another city',
			  })
			: this.setState({ query: value, suggestions, infoText: '' });
	};

	handleItemClicked = suggestion => {
		const { updateEvents } = this.props;
		this.setState({
			query: suggestion,
			showSuggestions: false,
		});
		updateEvents(suggestion);
	};

	render() {
		const { query, suggestions, showSuggestions, infoText } = this.state;
		return (
			<div className='CitySearch'>
				<input
					type='text'
					className='city'
					value={query}
					style={{ marginTop: '90px', width: '200px' }}
					onChange={this.handleInputChange}
					onFocus={() => this.setState({ showSuggestions: true })}
				/>
				{infoText && <InfoAlert text={infoText} />}
				<ul
					className='suggestions'
					style={showSuggestions ? {} : { display: 'none' }}>
					{suggestions.map(suggestion => (
						<li
							key={suggestion}
							onClick={() => this.handleItemClicked(suggestion)}>
							{suggestion}
						</li>
					))}
					<li
						key='all'
						className='city-btn'
						onClick={() => this.handleItemClicked('all')}>
						<b>See all cities</b>
					</li>
				</ul>
			</div>
		);
	}
}

export default CitySearch;
