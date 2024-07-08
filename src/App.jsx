import Header from './components/Header'
import Body from './components/Body';
import Gallary from './components/Gallary'
import Blogs from './components/Blogs'
import Contact from './components/Contact';
import Footer from './components/Footer'
import PHONE2 from './assets/p3.webp';
import TEAM from './assets/team.jpg';
import './App.css'


function App() {
  return (

    <main>
      <Header />
      <Body />

      <div className="holo"></div>
      {/* --------------about----------- */}
      <div className="mainbox2">
        <div className="box2">
          <h1 id='about'>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias odio maxime accusamus, rerum optio voluptatum reprehenderit error dolore repudiandae vel exercitationem nisi animi labore et impedit doloribus libero quaerat illum velit eveniet consequuntur! Quo minus facere quasi, ea optio sed dicta velit. Quas excepturi ipsum quaerat. Ad doloremque, velit officia veritatis ratione facilis rerum doloribus delectus minus laborum neque iure vel voluptatum maiores! Doloremque laboriosam rerum dolorem iste cum saepe vitae aliquam, laudantium dolore voluptatibus, quas iusto. Vitae ab, earumliquam, unde earum eveniet minima!</p>
        </div>
        <div className="box1">
          <img src={PHONE2} alt="img" />
        </div>
      </div>
      <div className="holo"></div>

      {/* --------------about end----------- */}

      {/* --------------team ----------- */}
      <div className="mainbox3">
        <div className="box3">
          <h1>Our Team</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias odio maxime accusamus, rerum optio voluptatum reprehenderit error dolore repudiandae vel exercita
            Lorem ipsum dolor sit, amet cononsequuntur! Quo minus facere quasi, ea optio sed dicta velit. Quas exce minus laborum neque iure vel voluptatum maiores! Doloremque laboriosam rerum dolorem iste cum saepe vitae aliquam, laudantium dolore voluptatibus, quas iusto. Vitae ab, earumliquam, unde earum eveniet minima!</p>
        </div>
      </div>
      <div className="box4" >
        <img src={TEAM} alt="img" />
      </div>  {/* --------------team end----------- */}

      <div className="holo"></div>
      <div id='products'><Gallary /></div>
      <div className="holo"></div>
      <div id='blogs'><Blogs /></div>
      <div className="holo"></div>
      <img src="https://jazeeratalahlam.com/cdn/shop/products/dfsdg.png?v=1666438278" alt="" style={{ width: "100%", height: "400px", marginBottom: "20px" }} />
      <div className="holo"></div>
      <Contact />
      <div className="holo"></div>
      <Footer />
    </main>

  );
}

export default App
