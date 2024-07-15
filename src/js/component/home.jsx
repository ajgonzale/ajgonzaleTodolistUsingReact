import React, { useState } from "react";

//create your first component
const Home = () => {

	const [list, setList] = useState(['Make the bed', 'Make a bot', 'develop an project']);
	const [item, setItem] = useState('');

	function addItem() {
		console.log(list);
		setList([...list, item]);
		setItem('');		
	}

	function removeItem(index) {
		let aux = list;
		aux[index] = null;
		aux = aux.filter(n => {return n != null})
		setList(aux);
	}

	return (
		<div className="text-center container-fluid d-flex justify-content-center">
			<div>
				<h1 className="text-center mt-5 tittle" >todos</h1>
				<div>
					<input type="text" className="w-100 border-bottom input" onChange={e => setItem(e.target.value)} onKeyDown={(e) => {if (e.key === 'Enter') addItem()}} value={item}></input>
				</div>
				<div id='parentItems'>{ 
							list.map((item, index) => {
								return <div key={index} className="itemList"><div>{item}</div><i className="fas fa-times" onClick={e => removeItem(index)}></i></div>
							}) 
						}
						{ list.length == 0 && <div className="itemList">No tasks, add a task</div>}
				</div>
				<div className='bottomList'>{list.length} item left</div>
				<p className="p-3">
					Made by{" "}
					<a href="#">Alejandro Gonzalez</a>, with
					love!
				</p>`
			</div>
		</div>
	);
};

export default Home;
