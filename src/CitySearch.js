import React from 'react';

class CitySearch extends React.Component {
	constructor() {
		super();
		this.state = {
			query: '',
			suggestions: [],
		};
	}

	handleInputChange = e => {
		const value = e.target.value;
		const suggestions = this.props.locations.filter(location => {
			return location.toUpperCase().indexOf(value.toLowerCase()) > -1;
		});
		this.setState({ query: value, suggestions });
	};

	handleItemClicked = suggestion => {
		this.setState({
			query: suggestion,
		});
	};

	render() {
		const { query, suggestions } = this.state;
		return (
			<div className='CitySearch'>
				<input
					type='text'
					className='city'
					id='city'
					value={query}
					onChange={this.handleInputChange}
				/>
				<ul className='suggestions'>
					{suggestions.map(suggestion => (
						<li
							key={suggestion}
							onClick={() => this.handleItemClicked(suggestion)}>
							{suggestion}
						</li>
					))}
					<li key='all'>
						<b>See all cities</b>
					</li>
				</ul>
			</div>
		);
	}
}

export default CitySearch;
