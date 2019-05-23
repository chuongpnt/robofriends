
import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';
import "../setupTests";


it("expect to render card component" , () => {
	expect(shallow(<Card />)).toMatchSnapshot();
})