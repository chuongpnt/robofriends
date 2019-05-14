import React , { Component } from "react";
import {connect} from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundtry from "../Components/ErrorBoundry";
import Header from '../Components/Header';

import {setSearchField , requestRobots} from '../actions';


const mapStateToProps = state =>{
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots:() => dispatch(requestRobots())
	}
	
}

class App extends Component {
	/*constructor(){
		super()
		this.state = {
			robots : [],
			//searchfield : "",
		}
	}*/

	componentDidMount(){
		/*fetch('http://jsonplaceholder.typicode.com/users')
			.then(response=>{
				return response.json();
			})
			.then(users=>{
				this.setState({robots:users});
			})*/

		this.props.onRequestRobots();
	}

	/*onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}
*/
	render(){
		//const {robots, searchfield} = this.state;

		//const {robots} = this.state;
		const {searchField , onSearchChange , robots , isPending} = this.props;

		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})


		return isPending ? 
		<h1>Loading</h1> :

		 (
		<div className="tc">
		<Header />
		{/*<SearchBox searchChange={this.onSearchChange}/>*/}
		<SearchBox searchChange={onSearchChange}/>
		<Scroll>
			<ErrorBoundtry>
				<CardList robots={filteredRobots}/>
			</ErrorBoundtry>
		</Scroll>
		</div>
		);
		
	}
	

}

export default connect(mapStateToProps,mapDispatchToProps)(App);