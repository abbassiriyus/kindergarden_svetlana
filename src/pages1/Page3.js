import React, { useState } from 'react'
import Img1 from '../img/free-icon-daughter-8229500.png'
import PhoneInput from 'react-phone-input-2'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Img002 from '../img/image 34.png'
import Img001 from '../img/free-icon-daughter-8229500 (1).png'

export default function Page1 () {
  const [phone2, usePhone2] = useState()
  function kidsDetail() {
    document.querySelector('.Cards-Page1-1').style='display: none;'
    document.querySelector('.Cards-Page1').style='display: flex;'
  }
  return (
    <div className='The-Big'>
      <div className='Cards-Page1-1'>
        <Accordion className='Accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className='ush'>
              <img src={Img002} alt='' />
              <h1>ВОЛШЕБНИК 1 УРОВНЯ</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="kids-baby">
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='Accordion'>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className='ush'>
              <img src={Img002} alt='' />
              <h1>ВОЛШЕБНИК 1 УРОВНЯ</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="kids-baby">
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
                <div onClick={() => kidsDetail()} className="baby">
                  <img src={Img001} alt="" />
                  <h2>Марина</h2>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div></div>
      </div>
      <div className='Cards-Page1'>
        <div className='CardProfil-Page1'>
          <img src={Img1} alt='' />
          <br />
          <h4>Наташа</h4>
        </div>
        <div className='Card-Page1'>
          <div className='Input-grup'>
            <h4>Фамилия</h4>
            <p>Маринина</p>
          </div>

          <div className='Input-grup'>
            <h4>Имя</h4>
            <p>Наташа</p>
          </div>

          <div className='Input-grup'>
            <h4>Группа</h4>
            <p>Волшебник 2 уровня</p>
          </div>

          <div className='Input-grup'>
            <h4>Дата рождения</h4>
            <p>2018/08/20</p>
          </div>

          <div className='Input-grup'>
            <h4>Представители</h4>
            <ul>
              <li> мать Маринина Марина Николаевна +7987-333-33-33 </li>
              <li> мать Маринина Марина Николаевна +7987-333-33-33 </li>
            </ul>
          </div>

          <div className='Input-grup'>
            <h4>Дополнительно</h4>
            <p>Аллергия на пыль</p>
          </div>
        </div>
      </div>
    </div>
  )
}
