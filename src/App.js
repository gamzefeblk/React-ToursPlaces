import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
     <Header content={["ABOUT US","FOR YOU", "SERVICES","BLOG","VLOG","CONTACT"]}/>
     <Body/>
    </div>
  );
}

export default App;
