import React , { useState } from 'react';

import './styles.css';

import { Collapse, Button, CardBody, Card } from 'reactstrap';

  


export default function Dogs({ dogs , addItemDog }) {

	const [collapse, setCollapse] = useState(false);
	const [status, setStatus] = useState('VIEW MORE DETAILS');

	//const onEntering = () => setStatus('Opening...');

	const onEntered = () => setStatus('VIEW LESS DETAILS');

	//const onExiting = () => setStatus('Closing...');

	//const onExited = () => setStatus('Exibir menos s');

	const toggle = () => setCollapse(!collapse);






	return (
		<div style={{boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)" , padding: 0 , margin: 35}}>
			<div className="card">
				<img src={dogs.image} className="card-img-top" alt={dogs.name} />
				<div className="card-body">
					<h5>{dogs.name}</h5>
					<p className="temperament">Temperament: <br /> {dogs.temperament}</p>
					<ul className="desk">
						<li>Created for: {dogs.bred_for}</li>
						<li>Breed group: {dogs.breed_group}</li>
						<li>Life span: {dogs.life_span}</li>
						<li>Average weight (lbs): {dogs.weight.imperial}</li>
						<li>Average weight (kgs): {dogs.weight.metric}</li>
						<li>Average heights ("): {dogs.height.imperial}</li>
						<li>Average height (m): {dogs.height.metric}</li>
					</ul>

					<button className="btn btn-danger" onClick={() => addItemDog(dogs)}>
						ADOTION <i className="fa fa-heart fa-1x" aria-hidden="true" />
					</button>

					<div className="mob">
					<Button color="" onClick={toggle} style={{ marginBottom: '1rem' }}>{status}</Button>
						<Collapse
							isOpen={collapse}
							//onEntering={onEntering}
							onEntered={onEntered}
							//onExiting={onExiting}
							//onExited={onExited}
						>
							<Card>
								<CardBody>
									<ul>
										<li>Created for: {dogs.bred_for}</li>
										<li>Breed group: {dogs.breed_group}</li>
										<li>Life span: {dogs.life_span}</li>
										<li>Average weight (lbs): {dogs.weight.imperial}</li>
										<li>Average weight (kgs): {dogs.weight.metric}</li>
										<li>Average heights ("): {dogs.height.imperial}</li>
										<li>Average height (m): {dogs.height.metric}</li>
									</ul>

									<button className="btn btn-danger" onClick={() => addItemDog(dogs)}>
										ADOTION <i className="fa fa-heart fa-1x" aria-hidden="true" />
									</button>
								</CardBody>
							</Card>
						</Collapse>
					</div>
				</div>
			</div>
		</div>
	);
}
