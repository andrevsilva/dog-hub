import React from 'react';

import { useSelector , useDispatch } from 'react-redux'
import { removeItem } from '../../store/ducks/dogs/adoption'

export default function Cart() {

	const adoption = useSelector(state => state.adoption);
	const dispatch = useDispatch();

	function removeItemDogs(id) {
		dispatch(removeItem (id));
		console.log(id)
	}

	return (
	 <div className="row">
			 {adoption.length === 0 ? (
				<p className="col-sm-12 mt-5 text-warning text-center">
					Wow ... you haven't adopted a puppy yet :(
				</p> 
				) : (
					<React.Fragment>
						{adoption.map(item =>
						<div key={item.id} className="col-sm-3 mt-3" id="card">
							<div className="card text-white bg-light mb-3" style={{marginBottom: 0 , height: 100}}>
								<div className="card-body" style={{color: "#000"}}>
									<img src={item.image} alt={item.name} style={{width: "100px"}} />
									<span style={{fontSize: 20 , marginLeft: 50}}>{item.name}</span>
								</div>
								<button className="btn btn-danger" 
									onClick={() => removeItemDogs(item.id)}
									style={{
										width: 38 , 
										position: 'absolute' , 
										bottom: 15 , 
										right: 15
									}}>
									<i className="fa fa-trash fa-1x"></i>
								</button>
							</div>
						</div>
						)}
					</React.Fragment>
				)}
		</div>
	 )
}
