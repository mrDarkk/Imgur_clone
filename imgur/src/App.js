
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './page/home'; 
import Header from './components/Header';
import Footer from './components/footer';
import signIN from './components/signIn';
// import signin from './page/signIN'; 

class App extends Component { 
render() { 
	return ( 
	<Router> 
		<div className="App"> 
      <Header></Header>
			<Switch> 
			<Route exact path='/' component={Home}></Route> 
			<Route exact path='/signIN' component={signIN}></Route> 
			{/* <Route exact path='/contact' component={Contact}></Route>  */}
      
			</Switch> 
      <Footer></Footer>
		</div> 
	</Router> 
); 
} 
} 

export default App; 

