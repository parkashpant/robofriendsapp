import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className= 'tc f5 bg-light-green dib pa1 ma2 grow shadow-3 br2'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;
