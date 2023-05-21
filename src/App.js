import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data/demoData";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        {data.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
