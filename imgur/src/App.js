import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Search from './components/search';
import Body from './components/body';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Search></Search>
        <Body></Body>
        <Footer></Footer>
    </div>
  );
}

export default App;
