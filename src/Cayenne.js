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



export class Cayenne extends React.Component {
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

            <header className="App-header App-header-cayenne">
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
              <div className="bottom-text">
                <p className="car-name">Cayenne</p>
              </div>
            </header>
            <section>
              <div id="infopage" className="infopage">
                <div className="info-text3">
                  {/* <p className="infopage-car-category">Macan SUV</p> */}
                  <p style={{  fontSize: "calc(10px + 2.5vmin)"}} className="infopage-car-name">Новые модели</p>
                  <p className="infopage-car-name">Porsche Cayenne</p>
                  <p><span className="infopage-car-year">2019 <br/></span> {/*<span className="tag-ot">от</span><span className="infopage-car-price"> 24 000 000 ₸</span>*/}</p>
                  {/* <a href="#images"><p className="infopage-go-button">Посмотреть</p></a> */}
                  <div className="text-mobile-none">
                    <div className="infopage-left-elem">
                      <p className="infopage-left-title">Двигатель</p>
                      <p className="infopage-left-info">4.0L Hybrid <br/>8-цилиндровый</p>
                    </div>
                    <div className="infopage-left-elem">
                      <p className="infopage-left-title">Мощность</p>
                      <p className="infopage-left-info">680 л.с./500 кВт</p>
                    </div>
                    <div className="infopage-left-elem">
                      <p className="infopage-left-title">Разгон 0-100 км/ч</p>
                      <p className="infopage-left-info">3,8 сек</p>
                    </div>
                  </div>
                </div>
                <img className="photo" src={require('./img/Cayenne/crop.jpg')} alt=""/>
                <div className="infopage-left">
                <div className="infopage-left-elem">
                  <p className="infopage-left-title">Двигатель</p>
                  <p className="infopage-left-info">4.0L Hybrid <br/>8-цилиндровый</p>
                </div>
                <div className="infopage-left-elem">
                  <p className="infopage-left-title">Мощность</p>
                  <p className="infopage-left-info">680 л.с./500 кВт</p>
                </div>
                <div className="infopage-left-elem">
                  <p className="infopage-left-title">Разгон 0-100 км/ч</p>
                  <p className="infopage-left-info">3,8 сек</p>
                </div>
              </div>
              <div className="infopage-logo">
                  <img style={{fill:'white'}} src={logo} className="App-logo2" alt="logo" />
                </div>
              </div>
        
      
              <div className="idea-page">
                <div className="top-idea-block">
                    <div className="top-idea-block-text">
                          <div className="top-idea-block-title">Сила спорта.</div>
                          <div className="top-idea-block-info">Благодаря 5 дверям, которые открыты для любых приключений. Благодаря динамичному дизайну и экономичным турбированным двигателям. Благодаря прекрасным коммуникационным возможностям, которые позволяют, сидя за рулем, оставаться на связи со всем миром. Благодаря разносторонности, качеству и совершенным системам помощи, которые предлагают водителю и пассажирам исключительный уровень комфорта.</div>
                    </div>
                    <div className="top-idea-block-images">
                    <Carousel showThumbs={false}>
                        <div>
                            <img src={require("./img/Cayenne/porsche-normal (1).webp")} />
                        </div>
                        <div>
                            <img src={require("./img/Cayenne/porsche-normal (5).webp")} />
                        </div>
                        <div>
                            <img src={require("./img/Cayenne/porsche-normal.webp")} />
                        </div>
                    </Carousel>
                    </div>
                </div>
                <div id="macan" className="bottom-idea-block">
                    <div className="bottom-block-image">
                      <img src={require('./img/Cayenne/CY19J4OOX0004_low.jpg')} alt=""/>
                    </div>
                    <div className="bottom-block-text">
                      <div className="top-idea-block-title">Дизайн</div>
                      <div className="top-idea-block-info">Существует много SUV. Но есть только один, который еще до запуска двигателя позволяет ощутить атмосферу спортивного автомобиля.</div>
                    </div>
                </div>
              </div>       
              <p className="gallery-text">Оснащение</p>
      
              <div id="info4">
                  <div className="info2">
                  <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4OOX0001_low.jpg')+")"}} className="info-elem">
                    <p className="info-name">Дизайн Кузова</p>
                    <div style={this.state.opened===1 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button" onClick={()=>{this.open(1)}}><span className="info-button-text">{this.state.opened===1 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
      
                  {this.state.opened===1 && 
                    <div className="info-dropdown mobile-dp">
                      <div className="info-dropdown-text">
                      Особая динамика моделей Panamera GTS заметна уже с первого взгляда – в том числе благодаря использованию контрастного черного цвета. Так, планки на боковых окнах, боковые отверстия для выпуска воздуха, надписи на задней части или патрубки спортивной выхлопной системы выполнены в черном глянцевом цвете. Кроме того, нижняя часть моделей 
                      GTS выдержана в черном матовом цвете, включая 20-дюймовые колеса Panamera  Design. Затемнены также задние фонари и характерная светящаяся полоса. На заказ предлагаются затемненные светодиодные матричные фары с Porsche Dynamic Light System Plus.
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
      
                  <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HOD0002_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Дизайн Салона</p>
                    <div style={this.state.opened===2 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(2)}}><span className="info-button-text">{this.state.opened===2 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  </div>
                  {this.state.opened===1 && 
                    <div className="info-dropdown">
                      <div className="info-dropdown-text no-mobile-dp">
                        Macan своим динамичным видом доказывает, что он является настоящим спортивным автомобилем. Особенно эффектно смотрится новая задняя часть. Новая характерная светящаяся полоса подобна энергичному росчерку, украшающему логотип Porsche. А новые 4-точечные стопсигналы не только функциональны, но и исключительно красивы.
                        Широкие “плечи” над задними колесами вызывают ассоциации с 911. Кроме того, они подчеркивают уверенное положение нового Macan на дороге.
                        Боковая линия также типична для Porsche. Кажется, что у автомобиля напряжен каждый мускул, словно у хищника перед прыжком. Линия крыши, как у купе, спускается по направлению к задней части, что придает автомобилю спортивный вид и отличные аэродинамические качества. Наши дизайнеры называют такую линию Porsche Flyline.
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                   {this.state.opened===2 && 
                    <div className="info-dropdown">
                      <div className="info-dropdown-text">
                        Яркая череда новых эмоций. При этом Вам, разумеется, хочется все держать под контролем. Спортивные передние сиденья создают типичное для Macan ощущение: Вы сидите высоко над дорогой и прекрасно чувствуете ее.
                        Мы твердо уверены: водитель и автомобиль должны представлять собой единое целое. Поэтому Вы не просто сидите в Macan – эргономичная архитектура буквально “интегрирует” Вас в автомобиль.
                        Особое трехмерное расположение органов управления придает салону характер кокпита. Расстояние между серийным многофункциональным рулевым колесом и рычагом PDK (КПП Porsche Doppelkupplung), а также другими важнейшими органами управления сделано минимальным. В том числе и благодаря типичной для спортивного автомобиля наклонной центральной консоли. Замок зажигания, как и принято у Porsche, находится слева.
                        Новинка, которой мы особенно гордимся: новый 10,9-дюймовый сенсорный дисплей Porsche Communication Management (PCM). Он отличается новым дизайном и предлагает изображение в качестве Full-HD, а также возможность индивидуальной настройки стартового окна. Новая интуитивно понятная структура меню открывает Вам быстрый доступ ко всем важнейшим функциям.
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                  <div className="info2">
                   <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HOX0003_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Динамика и Управляемость</p>
                    <div style={this.state.opened===3 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(3)}}><span className="info-button-text">{this.state.opened===3 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  {this.state.opened===3 && 
                    <div className="info-dropdown mobile-dp">
                      <div className="info-dropdown-text">
                      Особая динамика моделей Panamera GTS заметна уже с первого взгляда – в том числе благодаря использованию контрастного черного цвета. Так, планки на боковых окнах, боковые отверстия для выпуска воздуха, надписи на задней части или патрубки спортивной выхлопной системы выполнены в черном глянцевом цвете. Кроме того, нижняя часть моделей 
                      GTS выдержана в черном матовом цвете, включая 20-дюймовые колеса Panamera  Design. Затемнены также задние фонари и характерная светящаяся полоса. На заказ предлагаются затемненные светодиодные матричные фары с Porsche Dynamic Light System Plus.
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                  <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HID0001_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Комфорт</p>
                    <div style={this.state.opened===4 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(4)}}><span className="info-button-text">{this.state.opened===4 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  </div>
                  {this.state.opened===3 && 
                    <div className="info-dropdown no-mobile-dp">
                      <div className="info-dropdown-text">
                        Macan своим динамичным видом доказывает, что он является настоящим спортивным автомобилем. Особенно эффектно смотрится новая задняя часть. Новая характерная светящаяся полоса подобна энергичному росчерку, украшающему логотип Porsche. А новые 4-точечные стопсигналы не только функциональны, но и исключительно красивы.
                        Широкие “плечи” над задними колесами вызывают ассоциации с 911. Кроме того, они подчеркивают уверенное положение нового Macan на дороге.
                        Боковая линия также типична для Porsche. Кажется, что у автомобиля напряжен каждый мускул, словно у хищника перед прыжком. Линия крыши, как у купе, спускается по направлению к задней части, что придает автомобилю спортивный вид и отличные аэродинамические качества. Наши дизайнеры называют такую линию Porsche Flyline.
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                   {this.state.opened===4 && 
                    <div className="info-dropdown">
                      <div className="info-dropdown-text">
                        Яркая череда новых эмоций. При этом Вам, разумеется, хочется все держать под контролем. Спортивные передние сиденья создают типичное для Macan ощущение: Вы сидите высоко над дорогой и прекрасно чувствуете ее.
                        Мы твердо уверены: водитель и автомобиль должны представлять собой единое целое. Поэтому Вы не просто сидите в Macan – эргономичная архитектура буквально “интегрирует” Вас в автомобиль.
                        Особое трехмерное расположение органов управления придает салону характер кокпита. Расстояние между серийным многофункциональным рулевым колесом и рычагом PDK (КПП Porsche Doppelkupplung), а также другими важнейшими органами управления сделано минимальным. В том числе и благодаря типичной для спортивного автомобиля наклонной центральной консоли. Замок зажигания, как и принято у Porsche, находится слева.
                        Новинка, которой мы особенно гордимся: новый 10,9-дюймовый сенсорный дисплей Porsche Communication Management (PCM). Он отличается новым дизайном и предлагает изображение в качестве Full-HD, а также возможность индивидуальной настройки стартового окна. Новая интуитивно понятная структура меню открывает Вам быстрый доступ ко всем важнейшим функциям.
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
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
      
              <p className="gallery-text">Галерея</p>
              <ImagesCayenne/>
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

export default Cayenne;
