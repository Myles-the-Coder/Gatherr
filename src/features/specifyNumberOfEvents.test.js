import { mount } from 'enzyme';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { mockData } from '../helpers/mock-data';
import App from '../App';
import NumberOfEvents from '../views/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
	let AppWrapper;
	let NumberOfEventsWrapper;
	beforeAll(() => {
		AppWrapper = mount(<App />);
		NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
	});

	test('A user has not specified a number', ({ given, and, when, then }) => {
		given('The user is on the main page', () => {});

		and('The user has a list of events', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
		});

		when('The user has not specified a number of events', () => {
			expect(NumberOfEventsWrapper.state('eventNumber')).toBe(32);
		});

		then('The max number of events displayed will be thirty-two', () => {
			const eventNumber = NumberOfEventsWrapper.state('eventNumber');
			expect(NumberOfEventsWrapper.find('.events-input').prop('value')).toBe(
				eventNumber
			);
		});
	});

	test('A user can specify the number of events they want displayed', ({
		given,
		when,
		then,
	}) => {
		given('The user select an number input', () => {
			NumberOfEventsWrapper.find('.events-input').simulate('change', {
				target: { value: '1' },
			});
		});

		when(
			'The input number is greater then one and less than thirty-two',
			() => {
				expect(
					NumberOfEventsWrapper.state('eventNumber')
				).toBeGreaterThanOrEqual(1);
				expect(NumberOfEventsWrapper.state('eventNumber')).toBeLessThanOrEqual(
					32
				);
			}
		);

		then('The number of events selected by the user will be displayed', () => {
			expect(AppWrapper.find('.EventList')).toHaveLength(1);
		});
	});
});
