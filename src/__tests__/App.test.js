import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../views/EventList';
import CitySearch from '../views/CitySearch';
import { mockData } from '../helpers/mock-data';
import { extractLocations, getEvents } from '../helpers/api';
import NumberOfEvents from '../views/NumberOfEvents';

// Unit Tests
describe('<App/> component', () => {
	let AppWrapper;
	beforeAll(() => (AppWrapper = shallow(<App />)));

	test('render EventList, CitySearch, and', () => {
		expect(AppWrapper.find(EventList)).toHaveLength(1);
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
		expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
	});
});

// Integration Tests
describe('<App/> integration', () => {
	test('App passes "events" state as a prop to EventList', () => {
		const AppWrapper = mount(<App />);
		const AppEventsState = AppWrapper.state('events');
		expect(AppEventsState).not.toEqual(undefined);
		expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
		AppWrapper.unmount();
	});

	test('App passes "locations" state as a prop to CitySearch', () => {
		const AppWrapper = mount(<App />);
		const AppLocationsState = AppWrapper.state('locations');
		expect(AppLocationsState).not.toEqual(undefined);
		expect(AppWrapper.find(CitySearch).props().locations).toEqual(
			AppLocationsState
		);
		AppWrapper.unmount();
	});

  test('App passes "numberOfEvents" and "currentLocation" state as a prop to NumberOfEvents', () => {
		const AppWrapper = mount(<App />);
		const AppEventsNumberState = AppWrapper.state('numberOfEvents');
		const AppCurLocationState = AppWrapper.state('currentLocation');
		expect(AppEventsNumberState).not.toEqual(undefined);
    expect(AppCurLocationState).not.toEqual(undefined)
		expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(
			AppEventsNumberState
		);
    expect(AppWrapper.find(NumberOfEvents).props().currentLocation).toEqual(
			AppCurLocationState
		);
		AppWrapper.unmount();
	});

  test('the <EventList/> component renders the mockData successfully', async () => {
    const AppWrapper = mount(<App/>)
    const allEvents = await getEvents()
    const number = 1
    AppWrapper.setState({
      events: allEvents.slice(0, number),
      numberOfEvents: number
    })
    const EventListWrapper = AppWrapper.find(EventList)
    const events = EventListWrapper.prop('events')
    expect(events.length).toEqual(number)
    AppWrapper.unmount()
  })

	test('get list of events matching the city selected by the user', async () => {
		const AppWrapper = mount(<App />);
		const CitySearchWrapper = AppWrapper.find(CitySearch);
		const locations = extractLocations(mockData);
		CitySearchWrapper.setState({ suggestions: locations });
		const suggestions = CitySearchWrapper.state('suggestions');
		const selectedIndex = Math.floor(Math.random() * suggestions.length);
		const selectedCity = suggestions[selectedIndex];
		await CitySearchWrapper.instance().handleItemClicked(selectedCity);
		const allEvents = await getEvents();
		const eventsToShow = allEvents.filter(
			event => event.location === selectedCity
		);
		expect(AppWrapper.state('events')).toEqual(eventsToShow);
		AppWrapper.unmount();
	});

	test('get list of all events when the user selects "See all cities"', async () => {
		const AppWrapper = mount(<App />);
		const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
		await suggestionItems.at(suggestionItems.length - 1).simulate('click');
		const allEvents = await getEvents();
		expect(AppWrapper.state('events')).toEqual(allEvents);
		AppWrapper.unmount();
	});
});
