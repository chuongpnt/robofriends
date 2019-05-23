import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from "./constants";

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it("should create action to search robot" , () => {
	const text ="woo";
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction)
})


it("handle requesting API" , () => {
	const store = mockStore();
	store.dispatch(actions.requestRobots())
	const action = store.getActions()


	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING,
	}
	expect(action[0]).toEqual(expectedAction)
})


