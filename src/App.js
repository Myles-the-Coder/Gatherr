import React from 'react';
import './App.css';
import './nprogress.css';
import EventList from './views/EventList';
import NumberOfEvents from './views/NumberOfEvents';
import CitySearch from './views/CitySearch';
import { extractLocations, getEvents } from './helpers/api';
import Logo from './Gatherr-logo.png';
import { InfoAlert } from './views/Alert';

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
			this.mounted &&
				this.setState({ events, locations: extractLocations(events) });
		});
	};

	componentWillUnmount = () => (this.mounted = false);

	updateEvents = location => {
		getEvents().then(events => {
			let locationEvents =
				location === 'all'
					? events
					: events.filter(event => event.location === location);
			this.setState({
				events: locationEvents.slice(0, this.state.numberOfEvents),
			});
		});
	};

	updateEventNumber = eventNumber => {
		const { currentLocation } = this.state;
		this.setState({ numberOfEvents: eventNumber });
		this.updateEvents(currentLocation);
	};

	render() {
		const { events, locations, numberOfEvents } = this.state;
		return (
			<div className='App'>
				<img src={Logo} alt='Gatherr-logo' className='logo' />
				<CitySearch
					locations={locations}
					updateEvents={this.updateEvents}
					numberOfEvents={numberOfEvents}
				/>
				<NumberOfEvents
					numberOfEvents={numberOfEvents}
					updateEventNumber={this.updateEventNumber}
				/>
        {!navigator.onLine && <InfoAlert text='Offline Mode: Data may not be up to date' />}
				<EventList events={events} />
			</div>
		);
	}
}

export default App;
