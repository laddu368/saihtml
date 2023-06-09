 
import '../about/about.scss';

function App() {
  return (
     <div>
      <h1> ABOUT</h1>
  
      <body>


<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
<div className="container">
<img src="img/logo1.png" alt=""/>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span><i id="bar" className="fas fa-bars"></i></span>
     </button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ml-auto">

<li className="nav-item">
  <a className="nav-link" href="index.html">Home</a>
</li>
<li className="nav-item">
    <a className="nav-link" href="shop.html">Shop</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" href="blog.html">Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="about.html">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="contact.html">Contact Us</a>
  </li>
  <li className="nav-item">
    <i className="fal fa-search"></i>
    <i className="fal fa-shopping-bag"></i>
  </li>
</ul>
</div>
</div>
</nav>

<section id="blog-home" className="pt-5 mt-5 container">
        <h2 className="font-weight-bold pt-5">Blogs</h2>
        <hr/>
</section>

<section id="blog-container" className="container pt-5">
    <div className="row">
        <div className="post col-lg-6 col-md-6 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/1.jpg" alt=""/>
            </div>
            <h3 className="text-center font-weight-normal pt-3">The best ways to chaange your summer wardrobe into autumn wardrobe.</h3>
            <p className="text-center">Jan 3, 2023</p>
        </div>
        <div className="post col-lg-6 col-md-6 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/2.jpg" alt=""/>
            </div>
            <h3 className="text-center font-weight-normal pt-3">Men's fashion in leather.</h3>
            <p className="text-center">Jan 3, 2023</p>
        </div>
        <div className="post col-lg-6 col-md-6 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/3.jpg" alt=""/>
            </div>
            <h3 className="text-center font-weight-normal pt-3">DIYer and TV host Trisha Hershberger's journey through gaming keeps evolving.</h3>
            <p className="text-center">Jan 3, 2023</p>
        </div>
        <div className="post col-lg-6 col-md-6 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/4.jpg" alt=""/>
            </div>
            <h3 className="text-center font-weight-normal pt-3">The best ways to chaange your summer wardrobe into autumn wardrobe.</h3>
            <p className="text-center">Jan 3, 2023</p>
        </div>

        <div className="col-lg-12 col-md-12 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/banner.webp" alt=""/>
            </div>
        </div>

        <div className="post col-lg-4 col-md-6 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/1.webp" alt=""/>
            </div>
            <h4 className="font-weight-normal pt-3">The best ways to chaange your summer wardrobe.</h4>
        </div>
        <div className="post col-lg-4 col-md-6 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/3.webp" alt=""/>
            </div>
            <h4 className="text-center font-weight-normal pt-3">Lenovo's smarter devices stoke professional passions</h4>
        </div>
        <div className="post col-lg-4 col-md-6 col-12 pb-5">
            <div className="post-img">
                <img className="img-fluid w-100" src="img/blog/2.webp" alt=""/>
            </div>
            <h4 className="text-center font-weight-normal pt-3">Take a 3D tour through a Microsoft datacenter</h4>
        </div>
    </div>
</section>



<footer className="mt-5 py-5">
    <div className="row container mx-auto pt-5">
        <div className="footer-one col-lg-3 col-md-6 col-12">
            <img src="img/logo2.png" alt=""/>
            <p className="pt-4">Fringilla urna porttitor rhoncus dolor purus lucutus venenaties lecteus megna fringilla dianm meacesnas ultricies mi eget mauris.</p>
        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
            <h5 className="pb-2">Featured</h5>
            <ul className="text-uppercase list-unstyled">
                <li><a href="#">men</a></li>
                <li><a href="#">women</a></li>
                <li><a href="#">boys</a></li>
                <li><a href="#">girls</a></li>
                <li><a href="#">new arrivals</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">clothes</a></li>
            </ul>
        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
            <h5 className="pb-2">Contact Us</h5>
            <div>
                <h6 className="text-uppercase">Address</h6>
                <p>369 STREET NAME, CITY, USA</p>
            </div>
            <div>
                <h6 className="text-uppercase">Phone</h6>
                <p>(123) 829 7369</p>
            </div>
            <div>
                <h6 className="text-uppercase">Email</h6>
                <p>gandhi@contact.com</p>
            </div>
        </div>

        <div className="footer-one col-lg-3 col-md-6 col-12">
            <h5 className="pb-2">Instagram</h5>
            <div className="row">
                <img className="img-fluid w-25 h-100 m-2" src="img/insta/1.jpg" alt=""/>
                <img className="img-fluid w-25 h-100 m-2" src="img/insta/2.jpg" alt=""/>
                <img className="img-fluid w-25 h-100 m-2" src="img/insta/3.jpg" alt=""/>
                <img className="img-fluid w-25 h-100 m-2" src="img/insta/4.jpg" alt=""/>
                <img className="img-fluid w-25 h-100 m-2" src="img/insta/5.jpg" alt=""/>
            </div>
        </div>
    </div>
    <div className="copyright mt-5">
        <div className="row container mx-auto">

            <div className="col-lg-3 clo-md-6 col-12 mb-4">
                <img src="img/payment.png" alt=""/>
            </div>
            <div className="col-lg-4 clo-md-6 col-12 text-nowrap mb-2">
                <p>ryno © 2023.All Rights Reserved By G@ndhi</p>
            </div>
            <div className="col-lg-4 clo-md-6 col-12">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
</footer>


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
</body>
     </div>
  );
}

export default App;
