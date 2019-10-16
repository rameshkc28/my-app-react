import React, { useEffect, useRef } from 'react';

const cockpit = props => {
	const toggleBtnRef = useRef(null);

	useEffect(() => {
		console.log('Cockpit js useEffect');
		// setTimeout(() => {
		// 	alert('Cock Pit updated');
		// }, 1000);
		toggleBtnRef.current.click();
		return () => {
			console.log('Cockpit js clean up work');
		};
	}, []);

	useEffect(() => {
		console.log('Cockpit js 2 useEffect');
		return () => {
			console.log('Cockpit js 2 clean up work');
		};
	})
  return (
		<div>
			<h1> Hi, I'm a {props.title}!!</h1>
    	<button onClick={props.clicked} ref={toggleBtnRef} >Toggle Persons</button>
		</div>
	);
}

export default React.memo(cockpit);