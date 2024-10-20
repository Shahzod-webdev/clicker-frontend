import './App.css';
import Mining from "./components/mining/mining";
import {Route} from "react-router-dom";
const tg = window.Telegram.WebApp;

const App =()=> {
  return (
    <div className="App">
        if({tg.initDataUnsafe}){
        <Route path='/' exact={true} render={ () => <Mining/> }/>
    }else{
        <h1>Oooops</h1>
    }
    </div>
  );
}

export default App;
