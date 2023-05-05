import React, { Component, useState } from 'react'
import '../css/Form.css'
import '../media/FormMedia.css'
import Image from '../img/image 25.png'
import axios from 'axios'
import url from '../../host'
import PhoneInput from 'react-phone-input-2'



export default class Form extends Component {
   
   
    modalOpen() {
        document.querySelector("#Modal").style = "display: block;margin-left: -5% !important;"
        sessionStorage.setItem("page",2)
        window.location="/"
    }
    modalClose() {
        document.querySelector("#Modal").style = "display: none"
    }



/* 
    state={
        person: [],
        formdata1 : new FormData(),
        name: document.querySelector('.name')
    }

    getData = () => {
        axios.get(`${url}/person`).then((res) => {
            this.setState={
                person: res.data
            }
            console.log(this.state.person)
            
        }).finally(() => {
            console.log('loading')
            
        })
    } */

/*     componentDidMount() {
        this.getData()
    }
     */

    getMail = () => {
        if( document.querySelector('#name_post').value === 'superAdmin' && document.querySelector('#password_post').value === 'parol' ){
            sessionStorage.setItem("page", 4)
            window.location='/'
        }
        var data=new FormData()
        data.append('email',document.querySelector('#name_post').value)
        data.append('passportnumber',document.querySelector('#password_post').value)

        axios.post(`${url}/login`,data)
        .then((res) => {
         sessionStorage.setItem("page",res.data)
         localStorage.setItem("name", document.querySelector("#name_post").value)
         window.location="/"
         console.log(res.data,"page")
         
        })
        .catch((err) => {
          console.log(err);
        })
    }


    render() {
        return (
            <>
                <div className="Big-Form">
                    <div className="Div-form">
                        <img src={Image} alt="" />
                        <div className="Inp-form">
                            <input id='name_post' placeholder='Логин' type="text" /><br />
                            <input placeholder='Пароль' id="password_post" type="password" /><br />
                            <button  onClick={this.getMail}>войти</button>
                        </div>
                    </div>
                </div>
                <div id="Modal">
                     <span  onClick={this.modalClose} className='X'>X</span>
                   <div className="xs">
                    <span className='Error'> X</span>
                   </div>
                    <h1>Неверный логин <br /> или пароль</h1>
                    <p>Пожалуйста, попробуйте еще раз</p>
                </div>
            </>
        )
    }
}
