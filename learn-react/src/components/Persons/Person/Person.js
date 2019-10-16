import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElRef = React.createRef();
	}
	componentDidMount() {
		// this.inputEl.focus();
		this.inputElRef.current.focus();
		console.log('Persons js componentDidMount');
	}

	render() {
		console.log('Person js child component');
  		return (
		<Aux>
			<p onClick={this.props.click}> I'm a {this.props.name} and I'm {this.props.age} years old!</p>
			<p>{this.props.children}</p>
			<input type="text" ref={this.inputElRef} onChange={this.props.changed} value={this.props.name}/>
		</Aux>
		)
  	}
};

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default Person;