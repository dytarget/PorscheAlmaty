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



export class CayenneCoupe extends React.Component {
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
                <p className="car-name">Cayenne Coupe</p>
              </div>
            </header>
            <section>
              <div id="infopage" className="infopage">
                <div className="info-text3">
                  {/* <p className="infopage-car-category">Macan SUV</p> */}
                  <p style={{  fontSize: "calc(10px + 2.5vmin)"}} className="infopage-car-name">Новые модели</p>
                  <p className="infopage-car-name">Porsche Cayenne Coupe</p>
                  <p><span className="infopage-car-year">2019 <br/></span> {/*<span className="tag-ot">от</span><span className="infopage-car-price"> 24 000 000 ₸</span>*/}</p>
                  {/* <a href="#images"><p className="infopage-go-button">Посмотреть</p></a> */}
                  <div className="text-mobile-none">
                    <div className="infopage-left-elem">
                      <p className="infopage-left-title">Двигатель</p>
                      <p className="infopage-left-info">3.0L <br/>6-цилиндровый</p>
                    </div>
                    <div className="infopage-left-elem">
                      <p className="infopage-left-title">Мощность</p>
                      <p className="infopage-left-info">340 л.с./250 кВт</p>
                    </div>
                    <div className="infopage-left-elem">
                      <p className="infopage-left-title">Разгон 0-100 км/ч</p>
                      <p className="infopage-left-info">6,0 сек</p>
                    </div>
                  </div>
                </div>
                <img className="photo" src={require('./img/Cayenne/crop.jpg')} alt=""/>
                <div className="infopage-left">
                <div className="infopage-left-elem">
                  <p className="infopage-left-title">Двигатель</p>
                  <p className="infopage-left-info">3.0L Hybrid <br/>6-цилиндровый</p>
                </div>
                <div className="infopage-left-elem">
                  <p className="infopage-left-title">Мощность</p>
                  <p className="infopage-left-info">340 л.с./250 кВт</p>
                </div>
                <div className="infopage-left-elem">
                  <p className="infopage-left-title">Разгон 0-100 км/ч</p>
                  <p className="infopage-left-info">6,0 сек</p>
                </div>
              </div>
              <div className="infopage-logo">
                  <img style={{fill:'white'}} src={logo} className="App-logo2" alt="logo" />
                </div>
              </div>
        
      
              <div className="idea-page">
                <div className="top-idea-block">
                    <div className="top-idea-block-text">
                          <div className="top-idea-block-title">Форма определена содержанием.</div>
                          <div className="top-idea-block-info">Эта неповторимая форма. Она существует уже на протяжении многих лет и всегда узнаваема. Эта форма символизирует все то, за что мы всегда боролись.
                          <div className="top-idea-block-info">Новый Cayenne Coupe.</div>
                    </div>
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
                      <div className="top-idea-block-info">Так выглядит истинная мощь</div>
                    </div>
                </div>
              </div>       
              <p className="gallery-text">Оснащение</p>
      
              <div id="info4">
                  <div className="info2">
                  <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4OOX0001_low.jpg')+")"}} className="info-elem">
                    <p className="info-name">Привод</p>
                    <div style={this.state.opened===1 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button" onClick={()=>{this.open(1)}}><span className="info-button-text">{this.state.opened===1 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
      
                  {this.state.opened===1 && 
                    <div className="info-dropdown mobile-dp">
                      <div className="info-dropdown-text">
                     
                      
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
      
                  <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HOD0002_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Ходовая часть и тормоза</p>
                    <div style={this.state.opened===2 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(2)}}><span className="info-button-text">{this.state.opened===2 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  </div>
                  {this.state.opened===1 && 
                    <div className="info-dropdown">
                      <div className="info-dropdown-text no-mobile-dp">
                        <div>
                          <div className ="top-block-title">Пакет Sport Chrono</div>
                          <div>В пакет Sport Chrono наряду с аналоговым секундомером на передней панели входит переключатель режимов движения на многофункциональном спортивном рулевом колесе. Он позволяет выбрать один из четырех вариантов настройки: Normal, SPORT, SPORT PLUS и режим Individual. 
                            В результате Вы одним движением руки можете изменить настройки ходовой части своего автомобиля и динамику привода. Информация о продольных и поперечных ускорениях отображается на приборной панели, а также на индикаторе прохождения кругов в Porsche Communication Management (PCM).</div>
                            <div className ="top-block-title-marginTop">8-ступенчатая АКПП Tiptronic S</div>
                          <div>Насколько спортивным будет характер вождения, зависит только от Вас – самое главное то, что новая 8-ступенчатая АКПП Tiptronic S соответствует Вашим требованиям. Дополнительно снижается расход топлива и повышается уровень комфорта.</div>
                          <div className ="top-block-title-marginTop">Движение накатом</div>
                          <div>Экономию топлива в определенных ситуациях обеспечивает так называемое движение накатом. При этом двигатель отсоединяется от трансмиссии и работает на оборотах холостого хода.</div>
                        
                        </div>
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                   {this.state.opened===2 && 
                    <div className="info-dropdown">
                      <div className="info-dropdown-text">
                        <div>
                          <div className ="top-block-title">Тормозная система Porsche Surface Coated Brake (PSCB)</div>
                          <div>Новое керамическое покрытие дисков из карбида вольфрама позволяет им даже после долгого простоя сохранить свой блеск, так как это покрытие не ржавеет и не мутнеет и способствует меньшему образованию тормозной пыли. Система Porsche Surface Coated Brake (PSCB) обеспечивает стабильное торможение даже при самых высоких нагрузках.</div>
                          <div className ="top-block-title-marginTop">Тормозная система Porsche Ceramic Composite Brake (PCCB)</div>
                          <div>Перфорированные керамические тормозные диски Porsche Ceramic Composite Brake (PCCB) обеспечивают оптимальную тормозную мощность даже при высокой нагрузке, а их высокая устойчивость к перегреву позволяет добиться короткого тормозного пути.
                               Керамические диски весят примерно наполовину меньше аналогичных чугунных дисков, что положительно сказывается на динамике движения.</div>
                          <div className ="top-block-title-marginTop">Система Porsche 4D-Chassis Control</div>
                          <div>Новый уровень регулировки подвески обеспечивает система Porsche 4D-Chassis Control. Она контролирует условия движения с учетом продольных, поперечных и вертикальных ускорений. На этой основе она рассчитывает оптимальные настройки и синхронизирует работу всех систем 
                            регулировки подвески в реальном времени, которое в данном случае является четвертым измерением. Все это способствует улучшению динамики.</div>
                          <div className ="top-block-title-marginTop">Porsche Dynamic Chassis Control (PDCC) и Porsche Torque Vectoring Plus (PTV Plus)</div>
                          <div>Porsche Dynamic Chassis Control (PDCC) – это система, которая служит для активного подавления кренов. С помощью электромеханических стабилизаторов система значительно снижает крены на поворотах. Кроме того, она сокращает раскачку автомобиля на волнистой поверхности. 
                            Результат: больше маневренности и динамики. В сочетании с Porsche Torque Vectoring Plus (PTV Plus) дополнительно улучшаются устойчивость движения и управляемость.</div>
                        
                        </div>
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                  <div className="info2">
                   <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HOX0003_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Облегченный пакет Sport</p>
                    <div style={this.state.opened===3 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(3)}}><span className="info-button-text">{this.state.opened===3 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  {this.state.opened===3 && 
                    <div className="info-dropdown mobile-dp">
                      <div className="info-dropdown-text">
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                  <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HID0001_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Аудиосистемы</p>
                    <div style={this.state.opened===4 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(4)}}><span className="info-button-text">{this.state.opened===4 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  </div>
                  {this.state.opened===3 && 
                    <div className="info-dropdown no-mobile-dp">
                      <div className="info-dropdown-text">
                      <div>
                          <div className ="top-block-title">Облегченный пакет Sport</div>
                          <div>Спортивные пакеты предлагаются в трех вариантах. Во все три пакета входят профильная карбоновая крыша, пакет SportDesign с карбоновым диффузором, 22-дюймовые диски GT Design и спортивная выхлопная система для Cayenne Turbo Coupé. 
                            В черном салоне Вас встречает пакет отделки карбоном, а также четыре спортивных сиденья с частичной/полной кожаной обивкой черного цвета и центральными частями из ткани с классическим клетчатым рисунком. Потолок и рулевое колесо отделаны Alcantara®.</div>
                          <div className ="top-block-title-marginTop">Облегченный пакет Sport черного цвета*</div>
                          <div>На заказ предлагается спортивный пакет черного цвета с нижней частью заднего бампера, накладками на колесные арки, пороги и двери, нижней частью переднего бампера, решетками воздухозаборников, дефлекторами матового черного цвета, 
                            а также 22-дюймовые диски GT Design с окраской в черный цвет с шелковистым блеском. </div>
                          <div className ="top-block-title-marginTop">Облегченный пакет Sport с отделкой карбоном**</div>
                          <div>В спортивный пакет с отделкой карбоном входят карбоновые дефлекторы в передних воздухозаборниках и верхние части наружных зеркал заднего вида. 
                            Решетки воздухозаборников и нижние части корпусов наружных зеркал заднего вида, а также их ножки выполнены в глянцевом черном цвете.</div> 
                        </div>
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                   {this.state.opened===4 && 
                    <div className="info-dropdown">
                      <div className="info-dropdown-text">
                        <div>
                          <div className ="top-block-title">Аудиосистема BOSE® Surround Sound</div>
                          <div>Аудиосистема BOSE® Surround Sound имеет 14 каналов усилителя. Общая мощность: 710 Вт. 14 динамиков, включая отдельный сабвуфер, обеспечивают сбалансированное звучание, точно соответствующее оригиналу. 
                            Еще более высокое качество звука и его динамику при воспроизведении файлов, записанных в форматах со сжатием, как например MP3, обеспечивает технология BOSE® SoundTrue Enhancement. Технология AudioPilot позволяет компенсировать внешние шумы.</div>
                          <div className ="top-block-title-marginTop">Аудиосистема Burmester® 3D High End Surround Sound</div>
                          <div>Технические данные внушают уважение: суммарная мощность 1455 Вт, 21 динамик с индивидуальным управлением, включая активный сабвуфер с 400-ваттным цифровым усилителем класса D, 2-канальная центральная система и общая площадь мембран более 2500 см². Впечатляет новый эффект трехмерности звука, который создается благодаря встроенным в передние стойки динамикам и специальному алгоритму Auro-3D®. 
                            Элегантные гальванизированные накладки и надписи "Burmester®" на отдельных динамиках не только свидетельствуют об эксклюзивности автомобиля, но и являются доказательством того, что идеальный саундтрек способен в значительной мере усилить эмоциональное воздействие техники.</div>
                        </div>
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                  <div className="info2">
                   <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HOX0003_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Porsche Connect</p>
                    <div style={this.state.opened===5 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(5)}}><span className="info-button-text">{this.state.opened===5 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  {this.state.opened===5 && 
                    <div className="info-dropdown mobile-dp">
                      <div className="info-dropdown-text">
                      </div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                  <div style={{backgroundImage:"url("+require('./img/Cayenne/CY19J4HID0001_low.jpg')+")"}}  className="info-elem">
                    <p className="info-name">Светотехника и системы помощи водителю</p>
                    <div style={this.state.opened===6 ? {backgroundColor:'#BD081C',color:'white',borderColor:'#BD081C'}:null} className="info-button"  onClick={()=>{this.open(6)}}><span className="info-button-text">{this.state.opened===6 ? ("Закрыть"):("Подробнее")}</span></div>
                  </div>
                  </div>
                  {this.state.opened===5 && 
                    <div className="info-dropdown no-mobile-dp">
                      <div className="info-dropdown-text">
                      <div>
                          <div>Как добиться более высоких результатов? Благодаря правильному настрою. Porsche Communication Management (PCM) и Porsche Connect позволяют дополнить возможности новых моделей Cayenne Coupé интеллектуальными сервисами и приложениями. Система предоставляет Вам в реальном времени информацию о дорожной ситуации, подыскивает рестораны и показывает свободные парковочные места в месте назначения.
                             Дополнительно Вы получаете возможность пользоваться Apple® CarPlay.</div>
                          <div className ="top-block-title-marginTop">My Porsche</div>
                          <div>Знать все о своем автомобиле еще до того, как Вы сядете за руль. Воспользуйтесь порталом My Porsche, чтобы, например, заранее заложить свой маршрут в навигационную систему, узнать уровень топлива в баке или проверить, закрыты ли окна и двери.</div>
                        </div></div>
                      <div className="closebtn">
      
                      </div>
                    </div>
                  }
                   {this.state.opened===6 && 
                    <div className="info-dropdown">
                      <div className="info-dropdown-text">
                        <div>
                          <div className ="top-block-title">Porsche InnoDrive с адаптивным круиз-контролем*</div>
                          <div>Умение сконцентрироваться имеет исключительно важное значение. И чтобы ничто не омрачало Вашу поездку, адаптивный круиз-контроль автоматически поддерживает безопасную дистанцию до находящегося впереди автомобиля. В сочетании с системой Porsche InnoDrive он получил инновационные дополнительные функции. Оптимизация скорости производится с упреждением, система распознает ограничения скорости и направление дороги, оптимально адаптируя к ним стратегию своей работы. 
                            Еще одной важной составляющей является система активного ведения по полосе. Она сочетает в себе функции адаптивного круиз-контроля и контроля полосы движения, которые работают на хорошо обустроенных загородных дорогах и скоростных магистралях – в том числе и в пробках.</div>
                          <div>*в некоторых странах Porsche InnoDrive не предлагается.</div>
                          <div className ="top-block-title-marginTop">Проекционный дисплей</div>
                          <div>Вы можете также заказать новый полноцветный проекционный дисплей, который способен оказать Вам существенную поддержку. Вы, не отвлекаясь от дороги, получаете всю важную информацию о движении непосредственно в поле своего зрения.</div>
                          <div className ="top-block-title-marginTop">Светодиодные матричные фары с Porsche Dynamic Light System Plus (PDLS Plus)</div>
                          <div>84 светодиода адаптируют уровень освещения к текущей транспортной ситуации, используя светорегулировку или полное отключение. Преимущество заключается в том, что свет фар не слепит водителей попутных и встречных автомобилей, 
                                но при этом обочины и соседние участки оказываются хорошо освещены. Это позволяет Вам полностью сосредоточиться на своих целях.
                                Porsche Dynamic Light System Plus (PDLS Plus) дополнительно обладает электронно-управляемой функцией поворота фар, а также функцией освещения перекрестков, работающей на основании данных навигационной системы. 
                                Если Вы приближаетесь к перекрестку, то конус света укорачивается, а левая и правая сторона дороги освещаются с большей интенсивностью.</div> 
                        </div>
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

export default CayenneCoupe;
