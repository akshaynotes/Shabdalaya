import './App.css';
import Header from './Header';
import Carousal from './Carousal';
import Body from './Body';
// Shabdalaya apk coming soon !! 

function App() {
  return (
    <div>
      <Header />
      <Carousal/>
      <Body />
      {/* <TempComp /> */}
    </div>
  );
}

//TODO
//TODO BUGS
// 1. Image Bug.....add image by cropping and fit to the Card
// 2. reduce spacing for the card components
// 3. increase font size for price and make offer more attractive
// 4. before border bottom card is getting cropped fix that bug
//TODO NEW FEATURE
// 1. Add footer to the website
export default App;
