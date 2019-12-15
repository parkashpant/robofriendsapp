import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div>
			<input 
			className='ma3 pa3 ba bg-lightest-blue' 
			type='search' 
			placeholder='Find robots' 
			onChange= {searchChange}
			/>
		</div>
	)
}

export default SearchBox;