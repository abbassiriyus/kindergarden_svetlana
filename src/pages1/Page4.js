/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Dropdown from 'react-bootstrap/Dropdown';
import './AllPages.css';
import icon1 from "../img/free-icon-edit-3756597.png"
import usr from '../img/free-icon-group-5942363 1.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../host';



function App() {
  const [state, setState] = useState([])
  const [state2, setState2] = useState([])

  function openbypg4() {
    document.querySelector('.ModalByPage-4').style = 'opacity: 1;z-index: 99;'
  }
  function closebypg4() {
    document.querySelector('.ModalByPage-4').style = 'opacity: 0;z-index: -99;'
  }
  function group() {
    let u =document.querySelector('#lect').value
    setState2(u);
  }



  useEffect(() => {
    axios.get(`${url}/group`).then(res => {
      setState(res.data)
    }
    )

  }, [])


  return (
    <div className='The-Big'>
      <div className='Bodys'>
        <div className='body'>
          <div className="ModalByPage-4">
            <h1>Редактировать запись 01/23/2023 </h1>
            <h4>Тема</h4>
            <input type="text" name="" id="" />
            <h4>Примечание</h4>
            <textarea className=""></textarea>
            <div className="btnsby-pg4">
              <button onClick={() => closebypg4()}>Сохранит</button>
              <button onClick={() => closebypg4()}>Отмена</button>
            </div>
          </div>
          <div className='data-group'>
            <select onClick={() => group()} id='lect'>
              {
                state.map(item => {
                  return (
                    <option>{item.groupname}</option>
                  )
                })
              }
            </select>
            <input type='date' />
          </div>
          <div className="dv-usr">
                <h3>{state2}</h3>
            <div className="Ten"><img src={usr} alt="" /> 10</div>
            <p>2023/01/23 - 2023/01/29</p>
          </div>
          <div className="biga-pages">
          </div>
          <div id='tables'>
            <div id='names'>
              <p>День</p>
              <p>Отсутствующие</p>
              <p>Тема</p>
              <p>Примечание</p>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>ПН 01/23</p>
                <p>10/9/1</p>
                <p>Лес</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
                {/* <div id='iconciAlo'> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
}

export default App;