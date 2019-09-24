import React from 'react';
import logo from './porsche-vector-logo.svg';
import open from './img/porsche-normal.webp';
import closed from './img/porsche-normal (1).webp';
import './App.css';
import Gallery from 'react-photo-gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Images from './Images';
import Forms from './Form/index';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Macan from './Macan';
import Panamera from './Panamera';
import Cayenne from './Cayenne';
import { Por911 } from './911';
import Main from './Main';
import Chat from './Chat';
import Accessories from './Accessories';
import Offers from './SpecialOffers';
import { Contact } from './Contact';
import CayenneCoupe from './CayenneCoupe';


class App extends React.Component {
  state={
    trunk:true,
    opened:0,
  }
 
  open=(page)=>{
    if (this.state.opened>0) {
      if(this.state.opened===page){
        this.setState({opened:0})
      }
      else{
        this.setState({opened:page})
      }
    }
    else{
      this.setState({opened:page})
    }
  }
  render(){
  return (
    <BrowserRouter>
    <>
      <Chat/>
      <div className="App">
            <Switch>
              <Route exact path="/macan" component={Macan}/>
              <Route exact path="/panamera" component={Panamera}/>
              <Route exact path="/cayenne" component={Cayenne}/>
              <Route exact path="/cayenne_coupe" component={CayenneCoupe}/>
              <Route exact path="/p911" component={Por911}/>
              <Route exact path="/accessories" component={Accessories}/>
              <Route exact path="/special_offers" component={Offers}/>
              <Route exact path="/contacts" component={Contact}/>
              <Route exact path="/" component={Main}/>
            </Switch>
      </div>
      </>
    </BrowserRouter>

  );
  }
}

export default App;
