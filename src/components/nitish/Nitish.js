 
import '../nitish/nitish.scss';
 
function App() {
  return (
 <div>
   
 





 
<nav   className="navbar navbar-expand-lg" id="navbar">
  <div   className="container">
    <a   className="navbar-brand" href="index.html" id="logo"><span>T</span>ravel</a>
    <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span><i   className="fa-solid fa-bars"></i></span>
    </button>
    <div   className="collapse navbar-collapse" id="mynavbar">
      <ul   className="navbar-nav me-auto">
        <li   className="nav-item">
          <a   className="nav-link active" href="index.html">Home</a>
        </li>
        <li   className="nav-item">
          <a   className="nav-link" href="#book">Book</a>
        </li>
        <li   className="nav-item">
          <a   className="nav-link" href="#Packages">Packages</a>
        </li>
        <li   className="nav-item">
          <a   className="nav-link" href="#services">Services</a>
        </li>
        <li   className="nav-item">
          <a   className="nav-link" href="#gallery">Gallary</a>
        </li>
        <li   className="nav-item">
          <a   className="nav-link" href="#about">About</a>
        </li>
        </ul>
      <form   className="d-flex">
        <input   className="form-control me-2" type="text" placeholder="Search"/>
        <button   className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>


<div   className="home">
  <div   className="content">
    <h5>Welcome To World</h5>
    <h1>Visit <span   className="changecontent"></span></h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit. Quae, nisi.</p>
   <a href="#book">Book Place</a>
  </div>
</div>
 





 
<section   className="book" id="book">
  <div   className="container">

    <div   className="main-text">
      <h1><span>B</span>ook</h1>
    </div>

    <div   className="row">

      <div   className="col-md-6 py-3 py-md-0">
          <div   className="card">
            <img src="https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?3&w=900&t=st=1685908447~exp=1685909047~hmac=0001b4941689dd3cd8d77629530410d1fa9d0a1b52926ae008641bddd6eaf214" alt=""/>
          </div>
      </div>
      
      <div   className="col-md-6 py-3 py-md-0">
        <form action="#">
           <input type="text"   className="form-control" placeholder="Where To" required /><br />
           <input type="text"   className="form-control" placeholder="How Many" required /><br/>
           <input type="date"   className="form-control" placeholder="Arrivals" required /><br />
           <input type="date"   className="form-control" placeholder="Leaving" required/><br />
           <textarea   className="form-control" rows="5" name="text" placeholder="Enter Your Name & Details"></textarea>
           <input type="submit" value="Book Now"   className="submit" required />

         </form>
      </div>

     </div>
  </div>
</section>
 
<section   className="packages" id="packages">
<div   className="container">

  <div   className="main-txt">
    <h1><span>P</span>ackages</h1>
  </div>

  <div   className="row" >
  
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <img src="https://img.freepik.com/free-photo/famous-tower-bridge-evening-london-england_268835-1390.jpg?w=900&t=st=1685897234~exp=1685897834~hmac=61c2582ec7df81a8afc1c31f44daf439509958512f9b7908a00970bfa32564bb" alt=""/>
      <div   className="card-body">
        <h3>United Kingdom</h3>
        <p>Lorem.ipsum dolor sit amet consectetur adipiscing elit. Ut, doloribus!</p>
      <div   className="Star">
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star "></i>
        <i   className="fa-solid fa-star "></i>
      </div>
      <h6>Price: <strong>$500</strong></h6>
      <a href="#book">Book Now</a>
      </div>
    </div>
  </div>
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <img src="https://img.freepik.com/premium-photo/seine-paris-with-eiffel-tower-sunrise-time_219717-5079.jpg?w=900" alt="" />
      <div   className="card-body">
        <h3>France</h3>
        <p>Lorem.ipsum dolor sit amet consectetur adipiscing elit. Ut, doloribus!</p>
      <div   className="Star">
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star "></i>
        <i   className="fa-solid fa-star "></i>
      </div>
      <h6>Price: <strong>$500</strong></h6>
      <a href="#book">Book Now</a>
      </div>
    </div>
  </div>
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <img src="https://img.freepik.com/free-photo/landmark-islam-putrajaya-geometric-landscape_1122-1628.jpg?w=900&t=st=1685898706~exp=1685899306~hmac=4e27da473c746c6ddeaec0941252dcc39b1c41c21c2f9e1e6a89ca8514916004" alt="" />
      <div   className="card-body">
        <h3>Pakistan</h3>
        <p>Lorem.ipsum dolor sit amet consectetur adipiscing elit. Ut, doloribus!</p>
      <div   className="Star">
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star "></i>
        <i   className="fa-solid fa-star "></i>
      </div>
      <h6>Price: <strong>$500</strong></h6>
      <a href="#book">Book Now</a>
      </div>
    </div>
  </div>
  
  </div>
  <div   className="row"  >
  
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <img src="https://img.freepik.com/premium-photo/cityscape-view-rome-sunset-with-st-peter-cathedral-vatican_136401-3120.jpg?w=996" alt="" />
      <div   className="card-body">
        <h3>Italy</h3>
        <p>Lorem.ipsum dolor sit amet consectetur adipiscing elit. Ut, doloribus!</p>
      <div   className="Star">
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star "></i>
        <i   className="fa-solid fa-star "></i>
      </div>
      <h6>Price: <strong>$500</strong></h6>
      <a href="#book">Book Now</a>
      </div>
    </div>

  </div>
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
    <img src="https://img.freepik.com/premium-photo/famous-taj-mahal-complex-yamuna-river-boats-beautiful-sunset-agra-india_400112-536.jpg?w=900" alt="" />
      <div   className="card-body">
        <h3>India</h3>
        <p>Lorem.ipsum dolor sit amet consectetur adipiscing elit. Ut, doloribus!</p>
      <div   className="Star">
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star "></i>
        <i   className="fa-solid fa-star "></i>
      </div>
      <h6>Price: <strong>$500</strong></h6>
      <a href="#book">Book Now</a>
      </div>
    </div>

  </div>
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <img src="https://img.freepik.com/premium-photo/statue-liberty-new-york-city_147382-4.jpg?w=900" alt="" />
      <div   className="card-body">
        <h3>United States</h3>
        <p>Lorem.ipsum dolor sit amet consectetur adipiscing elit. Ut, doloribus!</p>
      <div   className="Star">
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star checked"></i>
        <i   className="fa-solid fa-star "></i>
        <i   className="fa-solid fa-star "></i>
      </div>
      <h6>Price: <strong>$500</strong></h6>
      <a href="#book">Book Now</a>
      </div>
    </div>
  </div>
  
  </div>
</div>
</section>
 
<section   className="services" id="services">
<div   className="container">

  <div   className="main-txt">
    <h1><span>S</span>ervices</h1>
  </div>

  <div   className="row" >
    
  
    <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <i   className="fas fa-hotel"></i>
      <div   className="card-body">
        <h3>Affordable Hotel</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor.</p>
      </div>
    </div>

  </div>
  
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <i   className="fas fa-utensils"></i>
      <div   className="card-body">
        <h3>Food & Drinks</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor.</p>
      </div>
    </div>

  </div>
  
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <i   className="fas fa-bullhorn"></i>
      <div   className="card-body">
        <h3>Safety Guide</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor.</p>
      </div>
    </div>

  </div>
  
  

  </div>


  <div   className="row"  >
    
  
    <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <i   className="fas fa-globe-asia"></i>
      <div   className="card-body">
        <h3>Around The World</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor.</p>
      </div>
    </div>

  </div>
  
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <i   className="fas fa-plane"></i>
      <div   className="card-body">
        <h3>Fastest Travel</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor.</p>
      </div>
    </div>

  </div>
  
  <div   className="col-md-4 py-3 py-md-0">

    <div   className="card">
      <i   className="fas fa-hiking"></i>
      <div   className="card-body">
        <h3>Adventures</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor.</p>
      </div>
    
    
       </div>
   
     </div>
  
   </div>
</div>
</section>
 
<section   className="gallary" id="gallary">
 <div   className="container">

    <div   className="main-txt">
      <h1><span>G</span>allary</h1>
    </div>

   <div   className="row"  >
     <div   className="col-md-4 py-3 py-md-0">
       <div   className="card">
          <img src="https://img.freepik.com/premium-photo/giza-pyramid-complex-egypt-beautiful-sunset-view_400112-790.jpg?w=900"  alt="" height="230px"/>
       </div>
     </div>
   <div   className="col-md-4 py-3 py-md-0">
       <div   className="card">
          <img src="https://img.freepik.com/free-photo/beautiful-cityscape-with-historic-buildings-florence-italy_181624-49926.jpg?w=900&t=st=1685903858~exp=1685904458~hmac=ea7615c3072da69a3f116cfb2d8ce42e74e87037cf0b8ac897651226c9d4ca73"  alt="" height="230px" />
       </div>
     </div>
  <div   className="col-md-4 py-3 py-md-0">
       <div   className="card">
          <img src="https://img.freepik.com/premium-photo/london-city-skyline-united-kindom_131985-130.jpg?w=900"  alt="" height="230px" />
       </div>
     </div>
   </div>
   
   <div   className="row" >
    <div   className="col-md-4 py-3 py-md-0">
      <div   className="card">
         <img src="https://img.freepik.com/free-photo/eiffel-tower-view_1101-42.jpg?2&w=740&t=st=1685903891~exp=1685904491~hmac=9d8c0b7c8626f8bf617c4449b137c6420670d8e0e215fa7fa622f78dd76e3e68"  alt="" height="230px" />
      </div>
    </div>
  <div   className="col-md-4 py-3 py-md-0">
      <div   className="card">
         <img src="https://img.freepik.com/free-photo/view-alcazar-toledo-sunny-time_1398-3314.jpg?w=900&t=st=1685904190~exp=1685904790~hmac=4ff8f701113026da5f7279fe13a74c7831f62c748ead4012da813f6f131d349b"  alt="" height="230px" />
      </div>
    </div>
 <div   className="col-md-4 py-3 py-md-0">
      <div   className="card">
         <img src="https://img.freepik.com/premium-photo/brooklyn-bridge-statue-liberty_63253-7983.jpg?w=900"  alt="" height="230px" />
      </div>
    </div>
  </div> 
   
    </div>
</section>
 
<section   className="about" id="about">
<div   className="container">

  <div   className="main-txt">
    <h1>About <span>Us</span></h1>
  </div>

  <div   className="row"  >

     <div   className="col-md-6  py-3 py-md-0">
        <div   className="card">
          <img src="https://img.freepik.com/premium-photo/travel-concept-with-landmarks_23-2149153251.jpg?2&w=996" alt="" />
        </div>
     </div>

     <div   className="col-md-6 py-3 py-md-0">
        <h2>How Travel Agency Work</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Provident perferendis dolorem, numquam earum at nam beatae voluptae natus consecteur facere, saepe cupiditate ut exercitationem deserunt,facils quam perspiciatis autem iure illo harum minima.Quas, vitae aperiam laudantium alias asperiores nulla rerum, nihil eveniel perferends sini illum accusamus officis aliquam nam.</p>
        <button id="about-btn">Read More...</button>
      </div>


  </div>


</div>
</section>
 

<footer id="footer">
<h1><span>T</span>ravel</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugiat, ipsa quos nulla qui alias.</p>
<div   className="social-links">
   <i   className="fa-brands fa-twitter"></i>
   <i   className="fa-brands fa-facebook"></i>
   <i   className="fa-brands fa-instagram"></i>
   <i   className="fa-brands fa-youtube"></i>
   <i   className="fa-brands fa-pinterest-p"></i>
   </div>
   <div   className="credit">
    <p>Designed By <a href="a">SA coding</a></p>
   </div>
   <div   className="copyright">
     <p>&copy;Copyright SA Coding. All Rights Reserved</p>

   </div>
</footer>
 





<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> 
 
 </div>
   
  );
}

export default App;
