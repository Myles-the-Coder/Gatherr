import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../helpers/mock-data';
import Event from '../views/Event';

describe('<Event/> component', () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={mockData[0]} />);
	});

	test('render basic information', () => {
		expect(EventWrapper.find('.event')).toHaveLength(1);
		expect(EventWrapper.find('.summary')).toHaveLength(1);
		expect(EventWrapper.find('.location')).toHaveLength(1);
		expect(EventWrapper.find('.start-date')).toHaveLength(1);
		expect(EventWrapper.find('.details-btn')).toHaveLength(1);
	});

	test('default state of "collapsed" is true', () => {
		expect(EventWrapper.state('collapsed')).toBe(true);
	});

	test('if collapsed state is true, extra info in not visible', () => {
		EventWrapper.setState({ collapsed: true });
		expect(EventWrapper.find('.more-info')).toHaveLength(0);
	});

	test('if collapsed state is false, extra info become visible', () => {
		EventWrapper.setState({ collapsed: false });
		expect(EventWrapper.find('.more-info')).toHaveLength(1);
	});

	test('collapsed state is toggled on button click', () => {
		EventWrapper.find('.details-btn').simulate('click');
		expect(EventWrapper.state('collapsed')).toBe(true || false);
	});
});
