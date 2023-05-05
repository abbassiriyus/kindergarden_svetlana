import React from 'react'
import './AllPages2.css'
import Img1 from '../img/free-icon-daughter-8229500.png'
import Img2 from '../img/free-icon-kindergarden-5235725 1.png'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Img3 from '../img/image 37.png'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function Page2 () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
function KidsBlock() {
  document.querySelector('.box-ss').style = 'display: block;'
  document.querySelector('.kids-Page2').style = 'display: none;'
}
  return (
    <div>
      <Box sx={{ width: '100%' }} className='box-ss'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='Профиль' {...a11yProps(0)} />
            <Tab label='Задания' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className='divs-tst'>
            <h1>Какой из этих предметов не относится к живой природе?</h1>
            <div className='dvasew'>
              <img src={Img3} alt='' />
              <div className='aysdu'>
                <div className='inpsgrps'>
                  <h2>1</h2>
                  <input type='checkbox' />
                </div>
                <div className='inpsgrps'>
                  <h2>2</h2>
                  <input type='checkbox' />
                </div>
                <div className='inpsgrps'>
                  <h2>3</h2>
                  <input type='checkbox' />
                </div>
                <div className='inpsgrps'>
                  <h2>4</h2>
                  <input type='checkbox' />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
      <div className='kids-Page2'>
        <div className='kid-Page2'>
          <div className='asd'>
            <img src={Img1} alt='' />
            <div className='kid-prfl'>
              <h4>Маринина Наташа</h4>
              <p>4 года</p>
              <h3 className='volss'>
                <img src={Img2} alt='' />
                Волшебник 2 уровня
              </h3>
            </div>
          </div>
          <button onClick={() => KidsBlock()}>Подробнее</button>
        </div>
      </div>
    </div>
  )
}
