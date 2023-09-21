import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Icons from "./Components/Icons.js";
import Services from "./Components/Services.js";
import About from "./Components/About.js";
import Team from "./Components/Team.js";
import Riview from "./Components/Riview.js";
import Blogs from "./Components/Blogs.js";
import Footer from "./Components/Footer.js";
import BarChart from "./Components/Charts/BarChart.js";
import PieCharts from "./Components/Charts/PieCharts.js";
import ContactUs from "./Components/ContactUs.js";
import poster from "./images/poster.png"
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Icons />
      <BarChart />
      <PieCharts />
      <Services />
      <About />
      <Blogs />
      <Team />
      <Riview />
      <div className="poster">
        <img src={poster} alt=""/>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
