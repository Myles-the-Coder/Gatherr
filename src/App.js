import React from 'react';
import './App.css';
import './nprogress.css';
import EventList from './views/EventList';
import NumberOfEvents from './views/NumberOfEvents';
import CitySearch from './views/CitySearch';
import { extractLocations, getEvents } from './helpers/api';
import Logo from './Gatherr-logo.png';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			events: [],
			locations: [],
			currentLocation: 'all',
			numberOfEvents: 32,
		};
	}

	componentDidMount = () => {
		this.mounted = true;
		getEvents().then(events => {
			if (this.mounted) {
				this.setState({ events, locations: extractLocations(events) });
			}
		});
	};

	componentWillUnmount = () => (this.mounted = false);

	updateEvents = (location, eventNumber) => {
		getEvents().then(events => {
			let locationEvents =
				location === 'all'
					? events
					: events.filter(event => event.location === location);
			this.setState({
				events: locationEvents.slice(0, eventNumber),
			});
			console.log(this.state.events);
		});
	};

  updateEventNumber = eventNumber => {
    const {currentLocation} = this.state
    this.setState({numberOfEvents: eventNumber})
    this.updateEvents(currentLocation, eventNumber)
  }

	render() {
		const { events, locations, numberOfEvents } = this.state;
		return (
			<div className='App'>
				<img src={Logo} alt='Gatherr-logo' className='logo' />
				<CitySearch locations={locations} updateEvents={this.updateEvents} />
				<NumberOfEvents
					numberOfEvents={numberOfEvents}
					updateEventNumber={this.updateEventNumber}
				/>
				<EventList events={events} />
			</div>
		);
	}
}

export default App;
