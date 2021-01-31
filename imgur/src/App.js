import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './page/home'; 
import Header from './components/Header';
import signin from './page/signIN'; 


class App extends Component { 
render() { 
	return ( 
	<Router> 
		<div className="App"> 
      <Header></Header>
			<Switch> 
			<Route exact path='/' component={Home}></Route> 
			<Route exact path='/signIN' component={signin}></Route> 
			{/* <Route exact path='/contact' component={Contact}></Route>  */}
			</Switch> 
		</div> 
	</Router> 
); 
} 
} 

export default App; 

