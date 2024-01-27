import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random color/index.jsx';
function App() {
  return (
    <div className="App">
      {/* Accordian*/}
      <Accordian/>
      {/* Generating Random Color*/}
      <RandomColor/>
    </div>
  )
}

export default App;
