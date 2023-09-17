import Main from "../components/Main"
import SectionCostEstimate from "../components/SectionCostEstimate"
import SectionDifference from "../components/SectionDifference"
import SectionGrafictDonut from "../components/SectionGrafictDonut"
import SectionNews from "../components/sectionNews"

function App() {

  return (
    <div>
      <Main />
      <SectionDifference />
      <SectionGrafictDonut />
      <SectionCostEstimate />
      <SectionNews />
      
      <h1 style={{height: "700px"}} >
        ola mundo
      </h1>
    </div>
  )
}

export default App
