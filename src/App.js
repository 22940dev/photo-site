import React, {Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Abstract from './Components/Abstract/Abstract';
import Scenic from './Components/Scenic/Scenic';
import Street from './Components/Street/Street';
import { Route, Switch} from 'react-router-dom';
import Categories from './Components/Categories/Categories';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import StickyFooter from 'react-sticky-footer';
import Footer from './Components/Footer/Footer';

class App extends Component {


  render () {
    return (
      <div className="app">
        <BrowserRouter basename={'https://haripalbaluja.github.io/photography/'}>
        <Layout></Layout>
    
        <Switch>  
                    <Route exact path="/"   component={Categories}></Route>
                    <Route path="/abstract" component={Abstract}></Route>
                    <Route path="/scenic"   component={Scenic}></Route>
                    <Route path="/street"   component={Street}></Route>
                    <Route path="/about"    component={About}></Route>
                    <Route path="/contact"  component={Contact}></Route>
                    
              </Switch>
              {/* <Footer></Footer> */}
         


        </BrowserRouter>

      </div>
    );
  }
 
}

export default App;
