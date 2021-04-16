import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Dogs from '../../components/Dogs';

import { getAllDogs } from '../../store/fetchActions'
import { addItem } from '../../store/ducks/dogs/adoption';

export default function List() {

	const dogs = useSelector((state) => state.dogs);
	const dispatch = useDispatch()

	useEffect( 
		() => {
			dispatch(getAllDogs());
		}, 
		[ dispatch ]
	);

	function addItemDog(dogs) {
		console.log(dogs);
		dispatch(addItem(dogs));
	}

	return (
		<div className="container-fluid">
			<div className="row">
				{dogs.map((dogs, index) => <Dogs key={index} dogs={dogs} addItemDog={addItemDog} />)}
			</div>
		</div>
	);
}
