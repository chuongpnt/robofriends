
import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';
import "../setupTests";


it("expect to render cardlist component" , () => {
	const mockRobots = [
		{
			id : "1",
			name: "JohnJohn",
			email: "john@gmail.com"


		}

	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})