import React, { useState } from 'react';

const Counter = () => {
	const [count, SetCount] = useState(0)
	function increment(){
		SetCount(count+1)
	}

	function decrement(){
		SetCount(count-1)
		
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
		</div>
	);
};

export default Counter;