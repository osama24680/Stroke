import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Icons from "./Components/Icons.js";
import Services from "./Components/Services.js";
import About from "./Components/About.js";
import Doctors from "./Components/Doctors.js";
import Riview from "./Components/Riview.js";
import Blogs from "./Components/Blogs.js";
import Footer from "./Components/Footer.js";
import BarChart from "./Components/Charts/BarChart.js";
import PieCharts from "./Components/Charts/PieCharts.js";

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
      <Doctors />
      <Riview />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
