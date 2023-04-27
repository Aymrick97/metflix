import "./App.css";
import data from "./assets/data.json";
import Section from "./component/Section";
import Header from "./component/Header";
function App() {
  return (
    <>
      <Header />

      <div>
        {data.map((elem) => {
          return <Section elem={elem} key={elem.category} />;
        })}
      </div>
    </>
  );
}

export default App;
