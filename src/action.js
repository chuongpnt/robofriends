import {CHANGE_SEARCH_FIELD} from "./constanst";

export const setSearchField = (text) => {
	type: 'CHANGE_SEARCH_FIELD',
	payload: text
}