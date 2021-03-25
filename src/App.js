import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Error from "./Error";
// Shabdalaya apk coming soon !!

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route component={Error} />
    </Switch>
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
