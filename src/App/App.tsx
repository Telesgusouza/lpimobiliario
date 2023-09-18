
import Footer from "../components/Footer";
import Main from "../components/Main";
import SectionConnected from "../components/SectionConnected";
import SectionCostEstimate from "../components/SectionCostEstimate";
import SectionDifference from "../components/SectionDifference";
import SectionGrafictDonut from "../components/SectionGrafictDonut";
import SectionNews from "../components/sectionNews";

function App() {
  

  return (
    <div>
      <Main />
      <SectionDifference />
      <SectionGrafictDonut />
      <SectionCostEstimate />
      <SectionNews />
      <SectionConnected />
      <Footer />
    </div>
  );
}

export default App;
