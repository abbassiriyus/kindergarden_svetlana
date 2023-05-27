import React, { useEffect, useState } from 'react'
import './AllAdmin.css'
import icon1 from '../img/free-icon-delete-5396993.png'
import icon2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios'
import url from '../host'

export default function Zapissi() {
  const [state, setState] = useState([])


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
    getExcuse()
  }, [])


  function deleteExcuse(key) {
    axios.delete(`${url}/excuse/${key}`).then(res => {
      alert('deleted')
      window.location = '/zapissi'
    })
  }


  return (
    <div className='asdasdasdasdasd'>
      <div className='headTools'>
        <div>
          <select>
            <option>Группа</option>
          </select>
        </div>
        <div>
          <select>
            <option>Ребенок</option>
          </select>
        </div>
        <div>
          <input type='date' />
        </div>
        <div>
          <button>Добавить пропуск</button>
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
