import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random color/index.jsx';
import StarRating from './components/star rating/index.jsx';
function App() {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordian/>
      {/* Generating Random Color*/}
      <RandomColor/>

      {/*Creating Star-Rating Page*/ }
      <StarRating />
    </div>
  )
}

export default App;
