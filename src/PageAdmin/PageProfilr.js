import React, { Component, setUpdatedAt } from 'react'
import Img1 from '../img/free-icon-user-149071 1 (1).png'
import PhoneInput from 'react-phone-input-2'
import url from '../host'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import './css/PageProfil.css'

export default class PageProfil extends Component {

  render() {
    return (
      <div className="helo_you">
        <div className='only_you' onload={phone2 => this.state.usePhone2}>
          <div className='Cards-Page1'>
            <div className='CardProfil-Page1'>
              <img src={Img1} alt='' />
              <br />
              <button>Сменить фото</button>
              <input type='file' className='inpOpacity' />
            </div>
            <div className='Card-Page1'>
              <p>Aдминистратор</p>
              <div className='Input-grup'>
                <h4>Фамилия</h4>
                <input
                      className='prsnMiddle'
                      type='text'
                    />
              </div>
              <div className='Input-grup'>
                <h4>Имя</h4>
                <input
                      className='prsnlastName'
                      type='text'
                    />
              </div>
              <div className='Input-grup'>
                <h4>Отчество</h4>
                <input
                      className='prsnFirstNamr'
                      type='text'
                    />
              </div>
              <div className='Input-grup'>
                <h4>Дата рождения</h4>
                <input
                      type='date'
                      className='passportdaTE'
                    />
              </div>
              <div className='Input-grup'>
                <h4>Улица</h4>
                <input type='title' className='addressPt' />
              </div>
              <div className='Input-grup'>
                <h4>Дом</h4>
                <input type='title' className='housePt' />
              </div>
              <div className='Input-grup'>
                <h4>Квартира</h4>
                <input type='title' className='buildPt' />
              </div>
              <div className='Input-grup'>
                <h4>Номер телефона</h4>
                <PhoneInput
                  id='userNumber2'
                  className='userNumber2'
                  country={'ru'}
                />
              </div>
              <div className='Input-grup'>
                <h4>E-mail</h4>
                <input
                      className='emailInput'
                      type='title'
                    />
              </div>
              <div
                className='btn-groups
            '
              >
                <button
                  onClick={() => this.putPerson(this.state.person1[0].personid,)}
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}









