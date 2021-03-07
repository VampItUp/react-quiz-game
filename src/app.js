
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import DemosPage from "./demos/demos-page";
import AboutPage from "./about/about-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";

function App(){
  return (
  <div>
  <BrowserRouter>
  <PageHeader />

    {/*Switch enforces that only one route can be matched. */}
    {/*Route allows you to conditionally render children based on route path */}
    <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>

    <Route path="/quiz">
    <QuizPage />
    </Route>

    <Route path="/about">
    <AboutPage />
    </Route>

    <Route path="/demo">
    <DemosPage />
    </Route>
    </Switch>

    <PageFooter />
    
  </BrowserRouter>
  </div>
  );
}

// function App(){
//     return(
    

  export default App;