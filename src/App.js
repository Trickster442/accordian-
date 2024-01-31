import './App.css'
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider/index.jsx';
import RandomColor from './components/random color/index.jsx';
import StarRating from './components/star rating/index.jsx';
function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian/> */}
      {/* Generating Random Color*/}
      {/* <RandomColor/> */}

      {/*Creating Star-Rating Page*/ }
      {/* <StarRating /> */}

      {/*Image-slider project where url is passing through props*/}
      <ImageSlider url={'https://picsum.photos/v2/list?page=1'} limit={'10'} page={'1'}/>
    </div>
  )
}

export default App;
