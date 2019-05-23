
import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import "../setupTests";


let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots : jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps}/>)
})


it("render MainPage without crashing" , () => {
	expect(wrapper).toMatchSnapshot();
})

it("filter robots correctly" , () => {

	const mockProps = {
		onRequestRobots : jest.fn(),
		robots: [
			{
				id:3,
				name: 'John',
				email: "john@gmail.com"
			}
		],
		searchField: 'a',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {...mockProps}/>)

	expect(wrapper2.instance().filteredRobots()).toEqual([]);
	expect(wrapper2.instance().filteredRobots()).toEqual([]);
})

