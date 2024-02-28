// import logo from './logo.svg';
import './App.css';
import first from './images/1.png'
import seco from './images/2.png'
import third from './images/3.png'
import logo from './images/logo.png'

function App() {
  return (
    <div className="container">
    <div className="top-section">
      <div className="left-top">
        <img src={logo} alt="Company Logo" />
        <h5>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
          <ul className="det">
          <li>
          C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
          </li>

          <li>
          C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
          </li>

          </ul>
         
        
      </div>
      <div className="right-top">
        <img className="right-img" src={first} alt="Award" />
      
      <img className="space" src={seco} alt="Pump" />
      <p className="lett">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
      </p>
      </div>
    </div>
     <div className="middle"><p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p></div>
     <img className="pump-img" src={third} alt="Pump" />
     <div className='below-img'>
      <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
<hr></hr>
     </div>
     <div className='below-img-text'>
      <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
     </div>
     <div className="sectors">
    <p>CHEMICALS | PROCESS POWER | WATER | WASTE WATER | OILS | GAS | PHARMA | SUGARS | DISTILLERIES | PAPER | PULP | MARINE | DEFENCE | METAL | MINING | FOOD | BEVERAGE |<div> PETROCHEMICAL | REFINERIES | SOLAR | BUILDING HVAC | FIRE FIGHTING | AGRICULTURE | RESIDENTIAL</div></p>
  </div>

  <div>
    <div className='footer'>
        <div>Toll free 1800 200 1234</div>
        <div><a href='www.facebook.com/cripumps'>www.facebook.com/cripumps</a></div>
        <div><a href='www.facebook.com/cripumps'>www.criggroups.com</a></div>
    </div>
  </div>
     








    {/* <div className="middle-section">
      <div className="left-middle">
        <h5>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h5>
        <h3>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.</h3>
        <button>Contact Us</button>
      </div>
      <div className="right-middle">
        
      </div>
    </div>
    <div className="bottom-section">
      <div className="left-bottom">
        <h2>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h2>
        <img src={third} alt="Pump" />
        <h3>TAMA</h3>
        <ul>
          <li>Valves</li>
          <li>Pumps</li>
          <li>Pipes</li>
          <li>IOT Drives & Controllers</li>
          <li>Wires & Cables</li>
          <li>Solar Systems</li>
          <li>Motors</li>
        </ul>
      </div>
      <div className="right-bottom">
        <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
        <ul>
          <li>CHEMICALS & PROCESS</li>
          <li>POWER</li>
          <li>WATER & WASTE WATER</li>
          <li>OILS & GAS</li>
          <li>PHARMA</li>
          <li>SUGARS & DISTILLERIES</li>
          <li>PAPER & PULP</li>
          <li>MARINE & DEFENCE</li>
          <li>METAL & MINING</li>
          <li>FOOD & BEVERAGE</li>
          <li>PETROCHEMICAL & REFINERIES</li>
          <li>SOLAR | BUILDING | HVAC</li>
          <li>FIRE FIGHTING</li>
          <li>AGRICULTURE & RESIDENTIAL</li>
        </ul>
      </div> */}
  
  </div>
  );
}

export default App;
