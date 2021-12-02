import { shallow } from 'enzyme';
import React from 'react';
import NumberOfEvents from '../views/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateEvents={() => {}}/>);
	});

	test('render input field', () => {
		expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
	});

	test('render default number of events', () => {
		const eventNumber = NumberOfEventsWrapper.state('eventNumber');
		expect(NumberOfEventsWrapper.find('.events-input').prop('value')).toBe(
			eventNumber
		);
	});

	test('render correct number of events based on input', () => {
		const sampleValue = { target: { value: '16' } };
		NumberOfEventsWrapper.find('.events-input').simulate('change', sampleValue);
		expect(NumberOfEventsWrapper.state('eventNumber')).toBe(16);
	});
});
