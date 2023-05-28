import React, { useEffect, useState } from 'react'
import './AllAdmin.css'
import icon1 from '../img/free-icon-delete-5396993.png'
import icon2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios'
import url from '../host'

export default function Zapissi() {
  const [state, setState] = useState([])
  const [group, setGroup] = useState([])
  const [person, setPerson] = useState([])



  function getExcuse() {
    axios.get(`${url}/excuse`).then(res => {
      axios.get(`${url}/child`).then(res2 => {
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res2.data.length; j++) {
            if (res.data[i].childid == res2.data[j].childid) {
              res.data[i].childlastname = res2.data[j].childlastname
            }
          }
        }
        setState(res.data)
      })
    })
  }
 function openmodal () {
  document.querySelector(".headTools").style = "display: block !important";
 }
  useEffect(() => {
    axios.get(`${url}/group`).then(res => {
      setGroup( res.data )
    })
    axios.get(`${url}/child`).then(res => {
      setPerson( res.data )
    })
    getExcuse()
  }, [])


  function deleteExcuse(key) {
    axios.delete(`${url}/excuse/${key}`).then(res => {
      alert('deleted')
      window.location = '/zapissi'
    })
  }
  function modalSozdat () {
    document.querySelector('.modallses').style = 'display: flex'
  }

  function modalSozdat2 () {
    document.querySelector('.modallses').style = 'display: none'
  }


  return (
    <div className='asdasdasdasdasd'>
      <div className='modallses'>
       <div className="modalSozdat">
        <span className="clossedModal" onClick={() => modalSozdat2()}>
          X
        </span>
        <h4>Создать запись о пропуске занятий</h4>
        <br />
        <h4>Ребенок *</h4>
        <select id="uudeti" className="selectDeti">
                      <option>
                        halo
                      </option>
        </select>
        <div className="datanachl">
          <div className="hashla">
            <h4>Дата начала *</h4>
            <input id="uunachaolo" type="date" />
          </div>
          <div className="hashla">
            <h4>Дата окончания *</h4>
            <input id="konec" type="date" />
          </div>
        </div>
        <h4>Часть дня *</h4>
        <div className="checkboxForm">
          <select id="chast" className="selectDeti">
            <option>Утро</option>
            <option>Весь день</option>
            <option>После обеда</option>
          </select>
        </div>
        <h4>Причина *</h4>
        <select id="prichina" className="boleznS">
          <option>Болезнь</option>
          <option>Посещение врача</option>
          <option>Отпуск</option>
          <option>Семейные об-ва</option>
        </select>
        <button className="btnu">
        Создать
        </button>
      </div>
      </div>
      <div className='headTools'>
        <div>
          <select>
            {
              group.map(item => {
                return(
                  <option>{item.groupname}</option>
                )
              })
            }
          </select>
        </div>
        <div>
          <select>
            {
              person.map(item => {
                return(
                  <option>{item.childfirstname}</option>
                )
              })
            }
          </select>
        </div>
        <div>
          <input type='date' />
        </div>
        <div>
          <button onClick={() => modalSozdat()}>Добавить пропуск</button>
        </div>
      </div>
      <div className="tablle">
        <div className="numbersss">
          <p>ID</p>
          <p>Дата  <br />добавления</p>
          <p>Дата</p>
          <p>Ребенок</p>
          <p>Причина</p>
          <p>Автор</p>
          <p>Действие</p>
        </div>
        {
          state.map(item => {
            return (

              <div className="tesxtt">
                <p>{item.excuseid}</p>
                <p>{item.datestart.slice(0, 16)}</p>
                <p>{item.dateend.slice(0, 16)}</p>
                <p>{item.childlastname}</p>
                <p>{item.reason}</p>
                <p>Marina</p>
                <p>
                  <img src={icon2} alt="" />
                  <img src={icon1} onClick={() => deleteExcuse(item.excuseid)} alt="" />
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
