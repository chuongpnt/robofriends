import React , { Component } from "react";

import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundtry from "../Components/ErrorBoundry";
import Header from '../Components/Header';




class MainPage extends Component {

	componentDidMount(){

		this.props.onRequestRobots();
	}
	filteredRobots = () => {
		return   this.props.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
	}

	render(){

		const { onSearchChange , robots , isPending} = this.props;

		


		return isPending ? 
		<h1>Loading</h1> :

		 (
		<div className="tc">
		<Header />
		<SearchBox searchChange={onSearchChange}/>
		<Scroll>
			<ErrorBoundtry>
				<CardList robots={this.filteredRobots()}/>
			</ErrorBoundtry>
		</Scroll>
		</div>
		);
		
	}
	

}

export default MainPage;