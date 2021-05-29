import './App.css';
import Banner from './Components/Banner/Banner';
import CharactersList from './Components/CharactersList/CharactersList';
import Collection from './Components/Collection/Collection';
import Terms from './Components/Terms/Terms';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Banner />
      <CharactersList />
      <Collection />
      <Terms />
      <Footer />
    </div>
  );
}

export default App;
