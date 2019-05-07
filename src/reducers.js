import {CHANGE_SEARCH_FIELD} from "./constanst";


const intialState = {
	searchField:""
}

export const searchRobot = (state=intialState,action={}) => {
	switch(action.type){
		case:CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField:action.payload});
		default:
			return state;
	}
}