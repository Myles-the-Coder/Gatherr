import React from 'react';
import './styles/App.css';
import './styles/nprogress.css';
import EventList from './views/EventList';
import NumberOfEvents from './views/NumberOfEvents';
import CitySearch from './views/CitySearch';
import {
	extractLocations,
	getAccessToken,
	getEvents,
	checkToken,
} from './helpers/api';
import Logo from './Gatherr-logo.png';
import { InfoAlert } from './views/Alert';
import WelcomeScreen from './views/WelcomeScreen';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			events: [],
			locations: [],
			currentLocation: 'all',
			numberOfEvents: 32,
			showWelcomeScreen: undefined,
		};
	}

	componentDidMount =  async () => {
		this.mounted = true;
		const accessToken = localStorage.getItem('access_token');
		const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get('code');
		this.setState({ showWelcomeScreen: !(code || isTokenValid) });
		if ((code || isTokenValid) && this.mounted) {
			getEvents().then(events => {
				this.setState({ events, locations: extractLocations(events) });
			});
		}
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
		const { events, locations, numberOfEvents, showWelcomeScreen } = this.state;

		if (showWelcomeScreen !== undefined) {
			return (
				<div className='App'>
					<WelcomeScreen
						showWelcomeScreen={showWelcomeScreen}
						getAccessToken={() => {
							getAccessToken();
						}}
					/>
				</div>
			);
		}

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
				{!navigator.onLine && (
					<InfoAlert text='Offline Mode: Data may not be up to date' />
				)}
				<EventList events={events} />
			</div>
		);
	}
}

export default App;
