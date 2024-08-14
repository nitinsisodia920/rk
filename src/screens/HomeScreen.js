import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './HomeScreen.css';

const data = [
  {
   image: require('./c1.jpg'), 
  },
  {
    image:require('./c2.jpg'), 
   },
   {
    image:require('./c3.jpg'), 
   }, 
 
]

function HomeScreen() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider"
        />
      </Carousel.Item>
        )
      })}
      
    </Carousel>

    <br/>
        <br/>
      <h4 class="text-center">SHOP BY CATEGORIES</h4>
      <div class="container" id="contain1">
        <div className="signup-content" class="row d-flex justify-content-center align-items-center">
       
        <div class="form d-flex justify-content-center">
          <div class="column">
            <Link to="/dining"><div class="bg-image hover-zoom"><img src={require("./dining.jpg")} alt="img1"/></div></Link>
            <div className="text">Dining Table</div>
          </div>
          <div class="column">
            <Link to="/chair"><img  src={require("./d.jpg")} alt="img2"/></Link>
            <div className="text">Chairs</div>
          </div>
          <div class="column">
            <Link to="/bedroom"><img  src={require("./c.jpg")} alt="img3"/></Link>
            <div className="text">Bed</div>
          </div>
          <div class="column">
          <Link to="/mattress"><img  src={require("./o.jpg")} alt="img2"/></Link>
          <div className="text">Mattress</div>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          
      </div>
     
      <div class="container">
        <div className="signup-content" class="row d-flex justify-content-center align-items-center">
       
        <div class="form d-flex justify-content-center">
          <div class="column">
            <Link to="/cabinate"><div class="bg-image hover-zoom"><img src={require("./cabinate.jpg")} alt="img1"/></div></Link>
            <div className="text">Cabinates & sideboards</div>
          </div>
          <div class="column">
            <Link to="/shoerack"><img  src={require("./s.jpg")} alt="img2"/></Link>
            <div className="text">Shoe rack</div>
          </div>
          <div class="column">
          <Link to="/centertable"><img  src={require("./sofa4.jpg")} alt="img2"/></Link>
          <div className="text">Center Table </div>
          </div>
          <div class="column" id="WoodenTemple">
            <Link to="/woodentemple"><img  src={require("./woodentemple.jpeg")} alt="img3" /></Link>
            <div className="text">Wooden Temple</div>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          
      </div>


      <div class="container">
        <div className="signup-content" class="row d-flex justify-content-center align-items-center">
       
        <div class="form d-flex justify-content-center">
          <div class="column">
            <Link to="/table"><div class="bg-image hover-zoom"><img src={require("./l.jpg")} alt="img1"/>
            </div></Link>
            <div className="text">Table</div>
          </div>
          <div class="column">
            <Link to="/livingroom"><img  src={require("./g.jpg")} alt="img2"/></Link>
            <div className="text">sofa</div>
          </div>
          {/* <div class="column">
          <Link to="/bedroom"><img  src={require("./f.jpg")} alt="img2" /></Link>
          <div className="text">Wooden shelves</div>
          </div> */}
             <div class="column">
          <Link to="/officechair"><img  src={require("./officechair.jpg")} alt="img2" /></Link>
          <div className="text">Office Chair</div>
          </div>
          <div class="column">
            <Link to="/wardrobe"><img  src={require("./j.jpg")} alt="img3"/></Link>
            <div className="text">wardrobes</div>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          
      </div>

      <div class="container">
        <div className="signup-content" class="row d-flex justify-content-center align-items-center">
       
        <div class="form d-flex justify-content-center">
          <div class="column" id='cooler'>
            <Link to="/cooler"><div class="bg-image hover-zoom"><img src={require("./cooler.jpg")} alt="img1"/>
            </div></Link>
            <div className="text"> General Cooler</div>
          </div>
           <div class="column">
            <Link to="/sectional"><img  src={require("./sectional7.jpg")} alt="img2"/></Link>
            <div className="text"> Sectional sofa</div>
          </div> 

        
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          
      </div>

<br/>
<br/>
      <h4 class="text-center">EXPLORE OUR </h4>
      <h1 class="text-center">Luxurious Haven Collection </h1>
      <div class="container" id="contain1">
        <div className="signup-content" class="row d-flex justify-content-center align-items-center">
       
        <div class="form d-flex justify-content-center">
          <div class="column">
            <Link to="/luxurious"><div class="bg-image hover-zoom"><img src={require("./luxi1.jpg")} alt="img1"/></div></Link>
            <div className="text">Luxurious Bed</div>
          </div>
          <div class="column">
            <Link to="/luxurious"><img  src={require("./dining luxi.jpg")} alt="img2"/></Link>
            <div className="text"> Luxurious Dining Table</div>
          </div>
          <div class="column">
            <Link to="/luxurious"><img  src={require("./luxi3.jpg")} alt="img3"/></Link>
            <div className="text">Luxurious Wardrobes</div>
          </div>
          <div class="column">
          <Link to="/luxurious"><img  src={require("./luxi4.jpg")} alt="img2"/></Link>
          <div className="text">Luxurious Sofa</div>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          
      </div>

    </div>
  );
}
export default HomeScreen;
