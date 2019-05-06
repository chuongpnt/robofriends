import React from "react";

const SearchBox = ({searchfield,searchChange}) => {
	return (
		<div className="pa2"> 
		<input  
			className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5" 
			type="search" 
			placeholder="search box"
			onChange={searchChange} />
		</div>
	);
}

export default SearchBox;