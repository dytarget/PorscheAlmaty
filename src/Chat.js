import React, { Component } from 'react';
import io from 'socket.io-client';
import {ListGroup,Form,Button} from 'react-bootstrap';
import './App.css';
import {Launcher} from 'react-chat-window';


var socket;

export class Chat extends Component {
    state={
        messages:[],
        first:'',
        user_message:'',
        chatId:'',
        showChat:false
    }
    componentDidMount(){
   
        if(!socket){
          socket=io(':5005');
          socket.on("message",(msg)=>{
                if(this.state.messages.length===0){
                    let msn={author:msg.sendBy==='c' ? 'me':'them',type:'text',data:{text:msg.msg}}
                    this.setState(old=>({messages:[...old.messages,msn],chatId:msg.id}));
                }
                else if(msg.id===this.state.chatId){
                    let msn={author:msg.sendBy==='c' ? 'me':'them',type:'text',data:{text:msg.msg}}
                    this.setState(old=>({messages:[...old.messages,msn]}));
                }
          });
        }
      }
      sendMessage=(text)=>{          
          if (text.data.text.length > 0) {
            socket.emit('message',{id:this.state.chatId,msg:text.data.text});
          }
      }
    render() {
        return (
            <div style={{position:'fixed',zIndex:1000000000000000000}}>
                <Launcher
                style={{zIndex:1000000000000000000}}
                agentProfile={{
                    teamName: 'Чат с менеджером',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={text=>(this.sendMessage(text))}
                messageList={this.state.messages}
                showEmoji
                />
            </div>
        )
    }
}

export default Chat;
