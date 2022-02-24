import './App.css'
import SideMenu from './components/sideMenu/SideMenu';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
      <div className="container">
        <SideMenu />
        <Home />
      </div>
    </div>
  );
}

export default App;
