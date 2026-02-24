import Header from "./components/Header";
import Footer from "./components/Footer";
import CardItem from "./components/card/CardItem";

function App() {
  return (
    <>
      <Header />
      <main>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </main>
      <Footer />
    </>
  );
}

export default App;
