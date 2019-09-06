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



export class Accessories extends React.Component {
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

            <header className="App-header App-header-access">
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
            <section>

            <div className="access">
                        <p className="gallery-text2 gg">Спортивность и привлекательность</p>
                        <div style={{textAlign:'center'}} className="text-acc">
                        Эти качества уже знакомы Вам по
автомобилям Porsche. С особым вниманием к каждой детали мы создали
уникальные аксессуары, которые станут отражением вашей
индивидуальности.

Откройте мир Porsche Driver's Selection вместе с онлайн-каталогом. Или
узнайте о последних новинках коллекции в каталоге Select.

Коллекция аксессуаров Porsche Driver's Selection доступна только у
официальных дилеров Porsche.
                  </div>
                    <div id="accessories">
                            <div className="row">
                                <div onClick={()=>{window.open('https://www.porsche.com/all/media/flash/PDDS/book/ru/20-21/index.html')}} className="access-elem col-xl-4">
                                    <img className="images-row" src={require('./img/collection/1.jpg')} alt=""/>
                                    <p className="access-text">Porsche Pet's Collection</p>
                                </div>
                                <div  onClick={()=>{window.open('https://www.porsche.com/all/media/flash/PDDS/book/ru/20-21/index.html')}} className="access-elem col-xl-4">
                                    <img  className="images-row" src={require('./img/collection/2.jpg')} alt=""/>
                                    <p className="access-text">Sport Collection</p>

                                </div>
                                <div  onClick={()=>{window.open('https://www.porsche.com/all/media/flash/PDDS/book/ru/20-21/index.html')}} className="access-elem col-xl-4">
                                    <img className="images-row"src={require('./img/collection/3.jpg')} alt=""/>
                                    <p className="access-text">Motorsport Collection</p>

                                </div>
                            </div>

                            <div className="row">
                                <div  onClick={()=>{window.open('https://www.porsche.com/all/media/flash/PDDS/book/ru/20-21/index.html')}} className="access-elem col-xl-4">
                                    <img className="images-row" src={require('./img/collection/4.jpg')} alt=""/>
                                    <p className="access-text">#Porsche</p>

                                </div>
                                <div  onClick={()=>{window.open('https://www.porsche.com/all/media/flash/PDDS/book/ru/20-21/index.html')}} className="access-elem col-xl-4">
                                    <img className="images-row" src={require('./img/collection/5.jpg')} alt=""/>
                                    <p className="access-text">Urban Explorer Collection</p>

                                </div>
                                <div  onClick={()=>{window.open('https://www.porsche.com/all/media/flash/PDDS/book/ru/20-21/index.html')}} className="access-elem col-xl-4">
                                    <img className="images-row" src={require('./img/collection/6.jpg')} alt=""/>
                                    <p className="access-text">GT4 Clubsport Collection</p>

                                </div>
                            </div>
                            
                          
                        </div>
                        </div>
         
      
              {/* <div className="trunk-info">
                <div className="trunk-photo-wrap">
                  <img className="trunk-photo" src={this.state.trunk ? (open):(closed)} alt="Porsche Macan"/>
                  <div className="trunk-button" onClick={()=>{this.setState(old=>({trunk:!old.trunk}))}}>{this.state.trunk ? "Закрыть":"Открыть"}</div>
                </div>
                <div className="trunk-text">
                    <div className="trunk-text-title">
                      Мы не идем на компромиссы.
                      Мы сознательно делаем свой выбор.
                    </div>
                    <div className="trunk-volume">1 503 л</div>
                    <div className="trunk-volume-info">Объем багажного отделения (со сложенными сидениями)</div>
                </div>
              </div> */}
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

export default Accessories;
