import React from 'react';
import logo from './porsche-vector-logo.svg';
import open from './img/porsche-normal.webp';
import closed from './img/porsche-normal (1).webp';
import './App.css';
import Gallery from 'react-photo-gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Images from './Images';
import {Link} from 'react-router-dom';
import Forms from './Form/index';
import ModelList from './ModelList';
import ReactGA from 'react-ga';


export class Offers extends React.Component {
  state={
    showmodel:false
  }
  componentDidMount(){
    window.scrollTo(0,0);
  }
   
    render() {
        return (
            <div className="App">

              <div className="top-nav">
                    <div  className="logo">
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
            

            <section>
              <div id="sale" className="infopage-sale">
    
                <img className="photo" src={require('./img/offer1.jpg')} alt=""/>
                  <div className="bottom-text-section-left-big">
                    <p className="sale-left-text">
                    <span className="sale-left-text-warner">В Porsche Centre Almaty действует
                        специальное предложение 
                        -20% на сервисные работы и
                        -15% на запасные части  для
                        автомобилей Porsche старше 5
                        лет. <br/></span>
                        В нашем автоцентре вас ждут
                        высококачественный сервис с
                        использованием современного
                        оборудования в полном
                        соответствии с требованиями
                        производителя, оригинальные
                        запасные части и аксессуары, а
                        также помощь
                        квалифицированных
                        специалистов.
                        За дополнительной
                        информацией Вы можете
                        обращаться в отдел
                        технического сервиса по
                        телефону: +7 727 300 52 00</p>
      
                  </div>
              </div>

              <div id="sale" className="infopage-sale">
                <img className="photo" src={require('./img/offer2.jpg')} alt=""/>
                  <div className="bottom-text-section-left-lit">
                    <p className="sale">Рассрочка 0% на весь модельный ряд Porsche </p>
                    <div className="info-button-sale"><span className="info-button-text"><a href="#field">Оставить заявку</a> </span></div>
      
                  </div>
              </div>


              <div id="sale" className="infopage-sale">
                <img className="photo" src={require('./img/offer3.jpg')} alt=""/>
                  <div className="bottom-text-section-left-lit">
                    <p className="sale-left-text"><span className="sale-left-text-warner">Уникальная цена на единственный в Казахстане  Porsche Cayenne Turbo  <br/></span></p>
                    <div className="info-button-sale"><span className="info-button-text"><a href="#field">Оставить заявку</a> </span></div>
      
                  </div>
              </div>
           
           
           
      
             
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

export default Offers;
