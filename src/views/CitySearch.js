import React from 'react';

class CitySearch extends React.Component {
	constructor() {
		super();
		this.state = {
			query: '',
			suggestions: [],
			showSuggestions: undefined,
		};
	}

	handleInputChange = e => {
		const value = e.target.value;
		const suggestions = this.props.locations.filter(location => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});
		this.setState({ query: value, suggestions });
	};

	handleItemClicked = suggestion => {
		this.setState({
			query: suggestion,
			showSuggestions: false,
		});
		this.props.updateEvents(suggestion);
	};

	render() {
		const { query, suggestions, showSuggestions } = this.state;
		return (
			<div className='CitySearch'>
				<input
					type='text'
					className='city'
					value={query}
          style={{marginTop: '75px', width: '200px'}}
					onChange={this.handleInputChange}
					onFocus={() => this.setState({ showSuggestions: true })}
				/>
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