import './App.css';
import Mining from "./components/mining/mining";
import {Route} from "react-router-dom";

const tg = window.Telegram.WebApp;

const App = () => {
    if (tg.initDataUnsafe?.user?.username) {
        return (
            <div className="App">

                <Route path='/' exact={true} render={() => <Mining/>}/>

            </div>
        );
    } else {
        return (
            <div className="App">
                <h1>ooops</h1>
            </div>
        )
    }
}

export default App;
