import logo from '../logo.svg';
import Footer from '../components/footer';
import SignInSide from '../components/signIn';



function Home() {
  return (
    <div className="App">
        <SignInSide></SignInSide>
        <Footer></Footer>
    </div>
  );
}

export default Home;
