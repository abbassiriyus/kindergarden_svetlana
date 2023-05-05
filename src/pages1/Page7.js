import React from 'react'
import ImgTest from '../img/image 37.png'
import Succes from '../img/301-3011314_pe-success-icon-task-done-removebg-preview.png'

export default function Page7 () {
  function openTest() {
  document.querySelector('.btns-pg7').style = 'display: none'
  document.querySelector('.Test-Page7').style = 'display: block'
  }
  function openModal() {
    document.querySelector('.Modal-Page7').style = 'display: block;'
    setInterval(() => {
    document.querySelector('.Modal-Page7').style = 'display: none;'
    }, 3000);
    
  }
  function closeModal() {
    document.querySelector('.Modal-Page7').style = 'display: none;'
  }
  return (
    <div className='Bnt' >
      <div className='btns-pg7'>
        <div className='btnss-pg7'>
          <button onClick={() => openTest()}>ЯНВАРЬ</button>
          <button onClick={() => openTest()}>ФЕВРАЛЬ</button>
          <button onClick={() => openTest()}>МАРТ</button>
        </div>
        <div className='btnss-pg7'>
          <button onClick={() => openTest()}>АПРЕЛЬ</button>
          <button onClick={() => openTest()}>МАЙ</button>
          <button onClick={() => openTest()}>ИЮНЬ</button>
        </div>
        <div className='btnss-pg7'>
          <button onClick={() => openTest()}>ИЮЛЬ</button>
          <button onClick={() => openTest()}>АВГУСТ</button>
          <button onClick={() => openTest()}>СЕНТЯБРЬ</button>
        </div>
        <div className='btnss-pg7'>
          <button onClick={() => openTest()}>ОКТЯБРЬ</button>
          <button onClick={() => openTest()}>НОЯБРЬ</button>
          <button onClick={() => openTest()}>ДЕКАБРЬ</button>
        </div>
      </div>
      <div className='Test-Page7'>
        <div className='Tests'>
          <h2>Какой из этих предметов не относится к живой природе?</h2>
          <div className='Testt'>
            <img src={ImgTest} alt='' />
            <div className='inpt'>
              <div className='inpss'>
                <input type='checkbox' />
                <p>1</p>
              </div>
              <div className='inpss'>
                <input type='checkbox' />
                <p>2</p>
              </div>
              <div className='inpss'>
                <input type='checkbox' />
                <p>3</p>
              </div>
              <div className='inpss'>
                <input type='checkbox' />
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => openModal()} className='otprTst'>Отправить</button>
      </div>
      <div className="Modal-Page7">
        <h1>Отправление</h1>
        <img src={Succes} alt="" />
      </div>
    </div>
  )
}
