import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      textAlign             : 'center'
    }
  };




export class Forms extends Component {

    state={
        name:"",
        phone:"",
        email:"",
        message:"",
        soglasie:true,
        error:false,
        modalIsOpen: false,
        closable:false

    }

    handleChange=(event)=>{
        if (event.target.name==="phone" && !isNaN(event.target.value) && event.target.value.length<=11) {
            this.setState({[event.target.name]:event.target.value});        
        }
        if (event.target.name!=="phone") {
            this.setState({[event.target.name]:event.target.value});        
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        var {name,phone,email,message}=this.state;
        this.openModal();   
        if (name.length && phone.length && email.length) {
            axios.post('http://94.247.128.182:5005/voprsy',{name:name,phone_number:phone,email:email}).then(res=>{
                this.setState({ name:"",
                phone:"",
                email:"",
                message:"",error:false,closable:true})
            }).catch(error=>{window.alert("Произошла ошибка!")});
        }
        else{
            this.setState({error:true})
        }
       
    }
    openModal=()=> {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal=()=> {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000';
        this.subtitle.style.fontSize='24px';
      }
    
      closeModal=()=> {
        this.setState({modalIsOpen: false});
      }


    render() {
        return (
            <div id="field" className="field">
                <p className="form-label">
                Успейте получите свой максимум! <br/>
                Оставтье заявку и мы вам перезвоним

                </p>
                <form onSubmit={this.handleSubmit} className="form-input">
                    <div className="form-body">
                        <div className="little-fields">
                            <label htmlFor="name">ФИО</label>
                            <input value={this.state.name} onChange={this.handleChange} placeholder="Введите ФИО" name="name" required type="text"/>
                            <label htmlFor="phone">Номер телефона</label>
                            <input value={this.state.phone} onChange={this.handleChange} placeholder="Введите номер телефона" name="phone" required type="tel"/>
                            <label htmlFor="email">Ваш e-mail</label>
                            <input value={this.state.email} onChange={this.handleChange} placeholder="Введите -mail" name="email" required type="email"/>
                        </div>
                    </div>
                    <p className="soglasie"><input name="soglasie" value={this.state.soglasie} onChange={this.handleChange} type="checkbox"/>Подтверждаю своё согласие на коммуникацию</p>
                    {this.state.error && <p style={{textAlign:"center",color:"#2a4b6d"}}>Заполните все данные и условия</p>}
                    <div className="submit-form">
                        <input type="reset" value="Очистить"/>
                        <input onClick={this.handleSubmit} type="submit" value="Отправить"/>
                    </div>
                </form>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                    <p ref={subtitle => this.subtitle = subtitle}>{this.state.closable ? "Спасибо, ваша заявка принята!":"Пожалуйста, подождите!"}</p>
                    {this.state.closable && <p>Мы свяжемся с вами в ближайшее время</p>}
                    {this.state.closable ? <button style={{background:'transparent',padding:'8px 15px',borderColor:'black',color:'black',borderWidth:1,cursor:'pointer'}} onClick={this.closeModal}>Закрыть</button>
                    :     <ReactLoading style={{margin:'0 auto',height:'20%',width:'20%'}} type="bars" color={"#000"} height={'20%'} width={'20%'} />}

                </Modal>
            </div>
        )
    }
}

export default Forms;
