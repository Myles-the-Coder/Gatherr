import React from 'react';

class Event extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true,
		};
	}

	setCollapsed = () => {
  this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
	};

	render() {
		const { collapsed } = this.state;
		const { summary, location, start, htmlLink, description } =
			this.props.event;
      let date = new Date(start.dateTime).toLocaleString()

		return (
			<div className='event'>
				<h1 className='summary'>{summary}</h1>
				<p className='location'>{location}</p>
				<p className='start-date'>{date}</p>
				{!collapsed && (
					<div className='more-info'>
						<a href={htmlLink} target='_blank' rel='noreferrer'>
							View Event in Calendar
						</a>
						<p className='description'>{description}</p>
					</div>
				)}
				<button onClick={this.setCollapsed} className='details-btn'>
					{collapsed ? 'More Details' : 'Hide Details'}
				</button>
			</div>
		);
	}
}

export default Event;
