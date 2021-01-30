import logo from '../logo.svg';
// import './App.css';
import img12 from '../img-08.jpg'

function Body() {
  return (
    <div class="container-fluid tm-container-content tm-mt-60">

    <div class="row tm-mb-90 tm-gallery">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
            <a href=""><img alt="stack overflow" src={img12}></img></a>
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>Clocks</h2>
                    <a href="#">View more</a>
                </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
            <a href="#"><img alt="stack overflow" src={img12}></img></a>
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>Plants</h2>
                    <a href="#">View more</a>
                </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">14 Oct 2020</span>
                <span>16,100 views</span>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
            <a href="#"><img alt="stack overflow" src={img12}></img></a>
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>Morning</h2>
                    <a href="#">View more</a>
                </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">12 Oct 2020</span>
                <span>12,460 views</span>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
            <a href="#"><img alt="stack overflow" src={img12}></img></a>
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>Pinky</h2>
                    <a href="#">View more</a>
                </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">10 Oct 2020</span>
                <span>11,402 views</span>
            </div>
        </div>
        
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
            <a href="#"><img alt="stack overflow" src={img12}></img></a>
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>Hangers</h2>
                    <a href="#">View more</a>
                </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">24 Sep 2020</span>
                <span>16,008 views</span>
            </div>
        </div>
       
    </div> 
   
</div>
  );
}

export default Body;
