import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Landie from './my-project/landie/index';
import Samsung from './my-project/samsung-page/index.js'
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
    
       <Router>
          <Switch>
            <Route exact path="/">
            <Landie/>
            </Route>
            <Route path="/samsung">
            <Samsung/>
            </Route>
            
          </Switch>
        </Router>
        
     <Footer/>

    </div>
  );
}

export default App;
