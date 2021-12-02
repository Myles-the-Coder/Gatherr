import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../views/EventList';
import Event from '../view/Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
	test('render correct number of events', () => {
		const EventListWrapper = shallow(<EventList events={mockData} />);
		expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
	});
});
