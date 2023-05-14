import React from 'react'

import Img1 from '../img/free-icon-daughter-8229500.png'
import Img2 from '../img/free-icon-kindergarden-5235725 1.png'
import './AllPages2.css'
import chil from './AllPages2.css'

export default function Page4 () {
  function openBodychild() {
    document.querySelector('.bodychil').style = 'display: block'
    document.querySelector('.kids-Page2').style = 'display: none'
  }
  return (
    <div>
      <div className='kids-Page2'>
        <div className='kid-Page2'>
          <div className='asd'>
            <img src={Img1} alt='' />
            <div className='kid-prfl'>
              <div className="fxdckhl">
              <h4>Маринина Наташа</h4>
              <p>4 года</p>
              </div>
              <h3 className='volss'>
                <img src={Img2} alt='' />
                Волшебник 2 уровня
              </h3>
            </div>
          </div>
          <button onClick={() => openBodychild()}>Подробнее</button>
        </div>
      </div>

      <div className='bodychil'>
        <div className='textchil_box'>
          <h2 className='bodychil_h2'>
            <b>ГРУППА</b> ВОЛШЕБНИК 1 УРОВНЯ
          </h2>
          <h2 className='bodychil_h2'>
            <b>День</b> <br /> ПН 01/23
          </h2>
        </div>
        <div className='btnchil_box1'>
          <table className='btnchil_table'>
            <tr className='btnchil_tr'>
              <th className='btnchil_th1'>Занятие</th>
              <th className='btnchil_th'>Тема</th>
              <th className='btnchil_th'>Время</th>
              <th className='btnchil_th'>Педагог</th>
              <th className='btnchil_th2'>Примечание</th>
            </tr>

            <tr className='btnchil_tr1'>
              <td className='btnchil_td1'> ФЭМП</td>
              <td className='btnchil_td1'> Порядок чисел от 1 до 10</td>
              <td className='btnchil_td1'>09.00 - 09.25 </td>
              <td className='btnchil_td1'>Ручкина К.Е. </td>
              <td className='btnchil_td1'> </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
