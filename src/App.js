import './App.css';
import Mining from "./components/mining/mining";
import {Route} from "react-router-dom";

const App =()=> {
  return (
    <div className="App">
        <Route path='/' exact={true} render={ () => <Mining/> }/>
    </div>
  );
}

export default App;
