import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import logo from './porsche-vector-logo.svg';
import {Link} from 'react-router-dom';
import './App.css';
import Forms from './Form/index';
import ModelList from './ModelList';


import ReactGA from 'react-ga';


function initializeReactGA() {
  ReactGA.initialize('UA-146924651-1');
  ReactGA.pageview('/porsche-almaty.kz');
}
initializeReactGA();


export class Main extends Component {
    state={
        showmodel:false
    }
    render() {
        return (
            <div>
                <div className="top-nav">
                <div className="logo">
                <img style={{fill:'white'}} src={logo} className="App-logo" alt="logo" />
      
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
                <Carousel>
                <Carousel.Item>
                        <img
                        className="d-block w-100 car-im"
                        src={require('./img/Cayenne/cayenne_slider.jpg')}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <Link to="/cayenne" className="link-main"><h3>Модели Cayenne</h3></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 car-im"
                        src={require('./img/911сайт/slider.jpg')}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <Link to="p911" className="link-main"><h3>Модели 911</h3></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                   
                    <Carousel.Item>
                        <img
                        className="d-block w-100 car-im"
                        src={require('./img/MA19T2COX0006_KV_low.jpg')}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <Link to="/macan" className="link-main"><h3>Модели Macan</h3></Link>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 car-im"
                        src={require('./img/pana_slider.jpg')}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <Link to="/panamera" className="link-main"><h3>Модели Panamera</h3></Link>

                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    <section>
                    <div id="info4">
                    <p style={{textAlign:'center',padding:'70px 0px 10px 0px'}} className="gallery-text2">Уникальные цены на </p>

                  <div id="cars" className="info2">
                        <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4OOX0001_low.jpg')+")"}} className="info-elem">
                            <p className="info-name">Cayenne Turbo</p>
                            <Link to='/cayenne'><div className="info-button" ><span className="info-button-text">Подробнее</span></div></Link>
                        </div>
            
                
            
                        <div style={{backgroundImage:"url("+require('./img/MA19T2COX0006_KV_low.jpg')+")"}} className="info-elem">
                            <p className="info-name">Macan</p>
                            <Link to='/macan'><div className="info-button" ><span className="info-button-text">Подробнее</span></div></Link>
                        </div>
                    </div>

                    <div className="info2">
                        <div style={{backgroundImage:"url("+require('./img/911сайт/crop2.jpg')+")"}} className="info-elem">
                            <p className="info-name">911 Carrera S</p>
                            <Link to='/p911'><div className="info-button" ><span className="info-button-text">Подробнее</span></div></Link>
                        </div>
            
                
            
                        <div style={{backgroundImage:"url("+require('./img/PA19P3LOX0001_KV_low.jpg')+")"}} className="info-elem">
                            <p className="info-name">Panamera GTS</p>
                            <Link to='/panamera'><div className="info-button" ><span className="info-button-text">Подробнее</span></div></Link>
                        </div>
                    </div>
              </div>                          
                    <div className="contact-section">
                <div id="contact-id">
                  <p className="gallery-text2">Для консультации</p>
                  <div className="text-acc">
                  Вы можете оставить заявку или <br/> обратиться по телефону: +7 (727)
      300 52 00. <br/> С Уважением, Ваша команда Porsche.
                  </div>
                  </div>
                  <Forms/>
              </div>
      
      
           
            </section>
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

export default Main;
