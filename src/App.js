import React from 'react';
import './styles/App.css';
import './styles/nprogress.css';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CitySearch from './components/CitySearch';
import {
	extractLocations,
	getAccessToken,
	getEvents,
	checkToken,
} from './helpers/api';
import Logo from './Gatherr-logo.png';
import { InfoAlert } from './components/Alert';
import WelcomeScreen from './components/WelcomeScreen';
import EventGenre from './components/EventGenre';
import {
	ResponsiveContainer,
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';

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

	componentDidMount = async () => {
		this.mounted = true;
		// const accessToken = localStorage.getItem('access_token');
		// const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		// const searchParams = new URLSearchParams(window.location.search);
		// const code = searchParams.get('code');
		// this.setState({ showWelcomeScreen: !(code || isTokenValid) });
		// if ((code || isTokenValid) && this.mounted) {
		// 	getEvents().then(events => {
		// 		this.setState({ events, locations: extractLocations(events) });
		// 	});
		// }
    if (this.mounted) {
			getEvents().then(events => {
				this.setState({ events, locations: extractLocations(events) });
			});
		}
	};

	componentWillUnmount = () => (this.mounted = false);

	getData = () => {
		const { locations, events } = this.state;
		const data = locations.map(location => {
			const number = events.filter(event => event.location === location).length;
			const city = location.split(', ').shift();
			return { city, number };
		});
		return data;
	};

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

		// if (showWelcomeScreen === undefined) {
		// 	return <div className='App' />;
		// }

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
				<h4>Events in each city</h4>
				<div className='data-vis-wrapper'>
					<EventGenre events={events}/>
					<ResponsiveContainer width={400} height={400}>
						<ScatterChart
							margin={{
								top: 20,
								right: 20,
								bottom: 20,
								left: 20,
							}}>
							<CartesianGrid />
							<XAxis type='category' dataKey='city' name='city' />
							<YAxis
								allowDecimals={false}
								type='number'
								dataKey='number'
								name='number of events'
							/>
							<Tooltip cursor={{ strokeDasharray: '3 3' }} />
							<Scatter data={this.getData()} fill='#8884d8' />
						</ScatterChart>
					</ResponsiveContainer>
				</div>
				<EventList events={events} />
				{/* <WelcomeScreen
					showWelcomeScreen={showWelcomeScreen}
					getAccessToken={() => {
						getAccessToken();
					}}
				/> */}
			</div>
		);
	}
}

export default App;
