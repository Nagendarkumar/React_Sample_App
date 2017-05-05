//NOTE: *{pckg} -> [package]

//Mandatory {pckg}s
//To render into DOM element
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//App extending the Component(parent class)
class App extends Component {
	//Initializing the constructor
	//since it calls first for every js
	//for state property
	constructor(props) {
		super(props);
	}

	//render function
	render() {
		return(
			<div>
			 	Test Subject
			</div>
		);
	}
}

//Renders DOM
//to the stated the id element
ReactDOM.render(
	<App />,
	document.getElementById('initiative-root')
);
