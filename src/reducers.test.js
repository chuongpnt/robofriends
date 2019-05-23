import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from "./constants";


import * as reducers from "./reducers";

describe('search robot' , () => {
	const initialStateSearchField = {
		searchField: ''
	}

	it("it should return initial state" , () => {
		expect(reducers.searchRobots(undefined,{}) ).toEqual({searchField:'' });
	})

	it("it should handle CHANGE_SEARCH_FIELD" , () => {
		expect(reducers.searchRobots(initialStateSearchField,{
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc',

		})) .toEqual({
			searchField: 'abc',
		})
	})

})



describe('request robot' , () => {
	const initialStateRobots = {
		isPending:false,
		robots: [],
		error:""
	}

	/*it("it should return initial state" , () => {
		expect(reducers.requestRobots(undefined,{}) ).toEqual({initialStateRobots});
	})
*/
	it("it should handle pending Status" , () => {
		expect(reducers.requestRobots(initialStateRobots,{
			type: REQUEST_ROBOTS_PENDING,
		
		})).toEqual({
			robots: [],
			isPending: true,
			error: ''
		})
	})

	it("it should handle success Status" , () => {
		expect(reducers.requestRobots(initialStateRobots,{
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: "1",
				name: "John",
				email: "john@gmail.com"
			}]
		
		})).toEqual({
			robots: [{
				id: "1",
				name: "John",
				email: "john@gmail.com"
			}],
			isPending: false,
			error: ''
		})
	})


})