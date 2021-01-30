import logo from '../logo.svg';
// import './App.css';

function Header() {
  return (
    // <div className="App">
    //   <header className="App-header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <i class="fas fa-film mr-2"></i>
                Imgur
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link nav-link-1 active" aria-current="page" href="#">Go Ad-free</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-2" href="#">New Post</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-3" href="#">SignIn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-4" href="#">SignUp</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;
