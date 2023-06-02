/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Dropdown from 'react-bootstrap/Dropdown';
import './AllPages.css';
import icon1 from "../img/free-icon-edit-3756597.png"
import usr from '../img/free-icon-group-5942363 1.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../host';
import imgOpn from '../img/free-icon-information-932010.png'
import { AiOutlineArrowLeft } from 'react-icons/ai'



function App() {
  const [state, setState] = useState([])
  const [state2, setState2] = useState([])
  const [state3, setState3] = useState([])
  const [state4, setState4] = useState([])
  const [stateday1, setstateday1] = useState([])
  const [stateday2, setstateday2] = useState([])
  const [stateday3, setstateday3] = useState([])
  const [stateday4, setstateday4] = useState([])
  const [stateday5, setstateday5] = useState([])
  const [stateday6, setstateday6] = useState([])
  function openbypg4() {
    document.querySelector('.ModalByPage-4').style = 'opacity: 1;z-index: 99;'
  }
  function closebypg4() {
    document.querySelector('.ModalByPage-4').style = 'opacity: 0;z-index: -99;'
  }
  function data() {
    let u =document.querySelector('#kkk').value
    setState3(u.slice(8,10));
    setState4(u.slice(8,10)*1+7)
    setstateday1(u.slice(8,10)*1+2)
    setstateday2(u.slice(8,10)*1+3)
    setstateday3(u.slice(8,10)*1+4)
    setstateday4(u.slice(8,10)*1+5)
    setstateday5(u.slice(8,10)*1+6)
    setstateday6(u.slice(8,10)*1+7)
    let o =document.querySelector('#lect').value
    setState2(o);
    document.querySelector('.biga-pages').style = 'display: flex !important;'
  }



  useEffect(() => {
    const currentEmpId = parseInt(localStorage.getItem("employ"));
    const groupsArr = [];
    
    axios.get(`${url}/group_emp`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].employeeid === currentEmpId) {
            groupsArr.push(res.data[i].groupid);
          }
        }
        return axios.get(`${url}/group`);
      })
      .then((res2) => {
        const filteredGroups = res2.data.filter((group) => groupsArr.includes(group.groupid));
        setState(filteredGroups);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  function openTable2 () {
    document.querySelector('.tables2').style = 'display: block'
    document.querySelector('.biga-pages').style = 'display: none !important'
    document.querySelector('.data-group').style = 'display: none !important'
  }

  function closeTable2 () {
    document.querySelector('.tables2').style = 'display: none'
    document.querySelector('.biga-pages').style = 'display: block !important'
    document.querySelector('.data-group').style = 'display: block !important'
  }



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
              <button onClick={() => closebypg4()}>Сохранить</button>
              <button onClick={() => closebypg4()}>Отмена</button>
            </div>
          </div>
          <div className='data-group'>
            <select id='lect'>
              {
                state.map(item => {
                  return (
                    <option>{item.groupname}</option>
                  )
                })
              }
            </select>
            <input  id='kkk' type='date' />
            <button onClick={() => data()} className='btnk'>Сохранить</button>
          </div>
          <div className="biga-pages">
          <div className="dv-usr">
                <h3>{state2}</h3>
            <div className="Ten"><img src={usr} alt="" /> 10</div>
            <p>2023/05/{state3} - 2023/05/{state4}</p>
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
                <p>ПН 05/{state3}<img src={imgOpn} onClick={() => openTable2()} /></p>
                <p>10/9/1</p>
                <p>Лес</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>ВТ 05/{stateday1}<img src={imgOpn} onClick={() => openTable2()} /></p>
                <p>10/8/2</p>
                <p>Горы</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>СР 05/{stateday2}<img src={imgOpn} onClick={() => openTable2()} /></p>
                <p>10/10/0</p>
                <p>Реки и моря</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>ЧТ 05/{stateday3}<img src={imgOpn} onClick={() => openTable2()} /></p>
                <p>10/5/5</p>
                <p>Космос</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>ПТ 05/{stateday4}<img src={imgOpn} onClick={() => openTable2()} /></p>
                <p>10/2/8</p>
                <p>Я люблю природу</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>СБ 01/{stateday5}<img src={imgOpn} onClick={() => openTable2()} /></p>
                <p>10/1/9</p>
                <p>Лес</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>ВС 01/{stateday6}<img src={imgOpn} onClick={() => openTable2()} /></p>
                <p>10/7/3</p>
                <p>Космос</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
          </div>
          </div>


          <div className='tables2'>
            <span className='belgi' onClick={() => closeTable2()}><AiOutlineArrowLeft /></span>
            <h1 className='tble2Btn'><span>ГРУППА </span>ВОЛШЕБНИК 1 УРОВНЯ</h1>
              <div className='f-dlex'>
            <h1><span>День </span><br /> ПН 01/23</h1>
            <h1><span>Отсутствующие </span><br /> 10/9/1</h1>
              </div>
            <div id='names'>
              <p>Занятие</p>
              <p>Тема</p>
              <p>Время</p>
              <p>Педагог</p>
              <p>Примечание</p>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>ФЭМП</p>
                <p>Порядок чисел от <br/> 1 до 10</p>
                <p>09.00 - 09.25</p>
                <p>Ручкина К.Е.</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1' className='back'>
              <div id='inform-p'>
                <p>Ритмика</p>
                <p>Марш</p>
                <p>09.35 - 10.00</p>
                <p>Азанова А.А.</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>Лепка</p>
                <p>Работа с глиной</p>
                <p>10.00 - 10.25</p>
                <p>Солнцева В.А.</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1' className='back'>
              <div id='inform-p'>
                <p>Музыка</p>
                <p>Жанры</p>
                <p>10.35 - 11.00</p>
                <p>Азанова А.А.</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1'>
              <div id='inform-p'>
                <p>Психолог</p>
                <p>Обида</p>
                <p>15.05 - 15.30</p>
                <p>Кнопкина О.П.</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
            <div id='inform1' className='back'>
              <div id='inform-p'>
                <p>ОФП</p>
                <p>Работа с мячом</p>
                <p>16.00 - 16.30</p>
                <p>Бубнов Р.А.</p>
                <p><img id='iconciAlo' onClick={() => openbypg4()} src={icon1} alt='' /></p>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
}

export default App;