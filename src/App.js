import './App.css';
import StoreListing from './StoreListing';
import TopBar from './TopBar'
import Home from './Home';



function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <StoreListing/>
    </div>
  );
}

export default App;


