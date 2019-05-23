import React from 'react';
import "../setupTests";

const Card = (props) => {
	const {name , id , email } = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
			<img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

	);


}

export default Card;