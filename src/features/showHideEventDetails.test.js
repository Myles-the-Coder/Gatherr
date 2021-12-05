import { mount, shallow } from 'enzyme';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { mockData } from '../helpers/mock-data';
import App from '../App';
import Event from '../views/Event';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
	let AppWrapper;
	let EventWrapper;
	beforeAll(() => {
		AppWrapper = mount(<App />);
		EventWrapper = shallow(<Event event={mockData[0]} />);
	});
	test('An event element is collapsed by default', ({ given, when, then }) => {
		given('A user is on the main page', () => {});

		when('The events are displayed', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
		});

		then('The events will be collapsed by default', () => {
			expect(EventWrapper.state('collapsed')).toBe(true);
		});
	});

	test('User can expand an event to see its details', ({
		given,
		when,
		then,
	}) => {
		given('A user has a list of events', () => {});

		when("A user clicks on the 'More Details' button", () => {
			AppWrapper.update();
			EventWrapper.find('.details-btn').simulate('click');
		});

		then('The event will expand to reveal more details about the event', () => {
			expect(EventWrapper.state('collapsed')).toBe(false);
		});
	});

	test('User can collapse an event to hide its details', ({
		given,
		when,
		then,
	}) => {
		given('A user has opened an event', () => {
			expect(EventWrapper.state('collapsed')).toBe(false);
		});

		when("A user clicks the 'Hide Details' button", () => {
			EventWrapper.find('.details-btn').simulate('click');
		});

		then('The event will collapse into its default state', () => {
			expect(EventWrapper.state('collapsed')).toBe(true);
		});
	});
});
