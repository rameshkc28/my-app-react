import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App js constructor');
  }
  state = {
    persons: [
      {id: 'wss', name: 'Ramesh', age: 25},
      {id: 'fvv', name: 'Krishna', age: 24},
      {id: 'efcc', name: 'Choudary', age: 23},
    ],
    showPersons: false,
    showCockpit: true
  }
  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props);
    return state;
  }

  togglePersonHandler = () => {
    const doesShows = this.state.showPersons;
    this.setState( {
      showPersons: !doesShows
    })
  }

  clickCockpit = () => {
    const doesShows = this.state.showCockpit;
    this.setState( {
      showCockpit : !doesShows
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  // componentWillMount() {
  //   console.log('App js componentWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState) {
		console.log('App js shouldComponentUpdate');
		return true;
  }
  
  componentDidUpdate(prevProps, prevState) {
		console.log('App js componentDidUpdate');
	}

  componentDidMount() {
    console.log('App js componentDidMount');
  }

  render() {
    console.log('App js render');
    let persons = null
    if(this.state.showPersons) {
      persons = (
        <Persons
          persons= {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
      );
    }
    return (
      <Aux>
        <button onClick={this.clickCockpit}>Remove Toggle</button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            clicked= {this.togglePersonHandler}/> ) : null}
          {persons}
      </Aux>
    );
  }
}

export default withClass(App, 'App');
