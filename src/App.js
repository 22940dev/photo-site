import React, {Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Abstract from './Components/Abstract/Abstract';
import Scenic from './Components/Scenic/Scenic';
import Street from './Components/Street/Street';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Categories from './Components/Categories/Categories';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import StickyFooter from 'react-sticky-footer';
import Footer from './Components/Footer/Footer';

class App extends Component {


  render () {
    return (
      <div className="app">
        <HashRouter>
        <Layout></Layout>
    
        <Switch>  
                    <Route exact path="/"   component={Categories}></Route>
                    <Route path="/photography/abstract" component={Abstract}></Route>
                    <Route path="/photography/scenic"   component={Scenic}></Route>
                    <Route path="/photography/street"   component={Street}></Route>
                    <Route path="/photography/about"    component={About}></Route>
                    <Route path="/photography/contact"  component={Contact}></Route>
                    
              </Switch>
              {/* <Footer></Footer> */}
         


        </HashRouter>

      </div>
    );
  }
 
}

export default App;
