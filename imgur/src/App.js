import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Search from './components/search';

function App() {
  return (
    <div className="App">
        {/* <Header> */}
        <Header></Header>
        <Search></Search>
        <Footer></Footer>
    </div>
  );
}

export default App;
