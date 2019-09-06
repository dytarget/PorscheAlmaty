import React from 'react';
import logo from './porsche-vector-logo.svg';
import open from './img/porsche-normal.webp';
import closed from './img/porsche-normal (1).webp';
import './App.css';
import Gallery from 'react-photo-gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ImagesPan from './ImagesPan';
import Forms from './Form/index';
import ImagesCayenne from './ImagesCayenne';
import {Link} from 'react-router-dom';
import ModelList from './ModelList';
import { YMaps, Map, Placemark,FullscreenControl,GeolocationControl,ZoomControl } from "react-yandex-maps";


const mapData = {
  center: [43.292826, 76.995322],
  zoom: 15,
  controls: [],
};


const coordinates = [
  [43.292826, 76.995322],
];



export class Contact extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
    state={
        trunk:true,
        opened:0,
        showmodel:false
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
    render() {
        return (
            <div className="App">

              <header className="App-header App-header-porsche">
              <div className="top-nav">
                <div className="logo">
                <div style={{display:'flex',justifyContent:'center'}} onClick={()=>{window.location.replace('/')}}><img  style={{fill:'white'}} src={logo} className="App-logo" alt="logo" /></div>
      
                <div className="menu">
                  <div className="menu-item main-items" onClick={()=>{this.setState(old=>({showmodel:!old.showmodel}))}}><Link>Модели</Link> 
                  <div className="models">
                      {this.state.showmodel && <ModelList/>}
                  </div>
                   </div>
                   <div className="menu-item main-items"><Link to="/accessories">Аксессуары</Link> </div>
                  <div className="menu-item main-items"><Link to="/special_offers">Специальные предложения</Link> </div>
                  <div className="menu-item main-items"><Link to="/contacts">Контакты</Link> </div>
                </div>
                </div>
              </div>
            </header>
            <section className="map-contacts">
                <YMaps  >
                  <Map className="map" defaultState={mapData}>
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                  <FullscreenControl /> 
                  <GeolocationControl options={{ float: 'left' }} />
                  <ZoomControl options={{ float: 'right' }} />
                  </Map>

                </YMaps>

                <div className="contacts-numbers">
                  <p className="gallery-text2 gk">Контакты</p>
                  <div className="contacts-number">
                    Телефон: +7(727)300-52-00 <br/>
                    Адрес: Кульжинский тракт, 12/1 <br/>
                    Пн-Пт: 09:00-19:00 <br/>
                    Сб: 09:00-14:00
                  </div>


                </div>
           
            </section>
            <hr/>
            <div className="contact-section">
                <div id="contact-id">
                  <p className="gallery-text2">Для консультации</p>
                  <div className="contacts">
                  Вы можете оставить заявку или <br/> обратиться по телефону: +7 (727)
      300 52 00. <br/> С Уважением, Ваша команда Porsche.
                  </div>
                  </div>
                  <Forms/>
              </div>
            <footer id="footer">
              <div className="top-footer">
                <p>Связаться с Porsche:</p>
                <div className="social-links">
                  <div onClick={()=>{window.open('https://www.facebook.com/porsche.kz.58')}} className="facebook-porsche"><img src={require('./img/facebook-logo.png')} alt=""/></div>
                  <div  onClick={()=>{window.open('https://www.youtube.com/user/Porsche')}}  className="youtube-porsche"> <img src={require('./img/youtube.png')} alt=""/></div>
                  <div onClick={()=>{window.open('https://www.instagram.com/porsche_kz/?hl=ru')}}  className="instagram-porsche"><img src={require('./img/instagram-logo.png')} alt=""/></div>
                </div>
              </div>
              <div className="footer-content">
                <p>© 2019 Porsche Centre Almaty. Правовое уведомление. Privacy Policy. Cookie Policy. </p>
      
                <p>* Данные определены методом Евро-5 (715/2007/ЕС и 692/2008/ЕС) в цикле NEFZ (европейский ездовой цикл). Сведения не относятся к отдельному автомобилю и не являются частью предложения, а служат только для сравнения различных типов автомобилей. Дополнительную информацию Вы можете уточнить в Вашем официальном дилерском центре Porsche.</p>
              </div>
            </footer>
          </div>
        )
    }
}

export default Contact;
