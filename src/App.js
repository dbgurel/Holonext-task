import './App.css';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';

function App() {
  return (
    <>
      <Slider slides={SliderData}></Slider>
    </>
  )
}

export default App;
