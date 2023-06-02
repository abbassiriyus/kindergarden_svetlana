import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'
import accountImg from '../img/free-icon-user-149071 1.png'
import logoimg from '../img/Group 109.png'
import './AllPages.css'
import { FaPhone } from 'react-icons/fa'
import { TbBrandTelegram } from 'react-icons/tb'
import { SlSocialVkontakte } from 'react-icons/sl'
import ImgScrol from '../img/free-icon-news-5995360 1.png'
import ImgScrol2 from '../img/free-icon-calendar-1254164 1.png'
import ImgScrol3 from '../img/free-icon-family-7541766 1.png'
import ImgScrol4 from '../img/free-icon-magazine-4621852 1.png'
import ImgScrol5 from '../img/free-icon-business-report-7087350 1.png'
import ImgScrol6 from '../img/free-icon-file-968545 1.png'
import ImgScrol7 from '../img/free-icon-homework-3290148 1 (2).png'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import PageProfilr from './PageProfilr'
import { AiFillCaretUp } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
import url from '../host'
export default function App () {
  const [data, setData] = useState([])
   const[data2, setData2]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/person`)
        const filteredData = response.data.filter(
          person => person.email === localStorage.getItem('name')
        )
        setData(filteredData)
        localStorage.setItem("personid", filteredData[0].personid )
        /* console.log(filteredData) */
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()

    const fetchData2 = async () => {
      try {
        const response = await axios.get(`${url}/employee`);
        const filteredData2 = response.data.filter(
          person => person.personid === parseInt(localStorage.getItem("personid"))
        );
        localStorage.setItem("employ", filteredData2[0].employeeid)
        // console.log(filteredData2[0]);
      } catch (error) {
        console.log(error);
      }

  
    }
    fetchData2()
    
    
  }, [])
  function openModal11 () {
    document.querySelector('.pageUser11').style = 'display:block'
    document.querySelector('.pageUser112').style = 'display:block'
  }
  function closeModal11 () {
    document.querySelector('.pageUser11').style = 'display:none'
    document.querySelector('.pageUser112').style = 'display:none'
  }

  function otke1() {
    var navigation = document.querySelector('.BottomNavigation')
    navigation.style='bottom: 0;'
    document.querySelector('.och').style='display: none;'
    document.querySelector('.yop').style='display: block;'
  }
  function otke2() {
    var navigation = document.querySelector('.BottomNavigation')
    navigation.style=' bottom: -110px'
    
    document.querySelector('.och').style='display: block;'
    document.querySelector('.yop').style='display: none;'
  }
  return (
    <BrowserRouter>
      <div className='The-Big'>
        {' '}
        <Navbar className='Navbar11' expand='lg'>
          <Container>
            <Navbar.Brand>
              <img className='logoimg11' src={logoimg} alt='' onClick={()=>{ sessionStorage.setItem("page",1)
        window.location="/"}} />{' '}
            </Navbar.Brand>
            <div id='pageUser112' className='minimodal11'>
              <img
                alt=''
                onMouseEnter={() => openModal11()}
                src={accountImg}
              />
              <div
                onMouseLeave={() => closeModal11()}
                className='pageUser112'
              >
                <p>

                  <img src={accountImg} alt='' />
                </p>
                <a
                  className='abu'
                  onClick={() => {
                    window.location = '/PageProfilr'
                  }}
                  href='/PageProfilr'
                >
                  <p>Настройки</p>
                </a>
                <p onClick={()=>{ sessionStorage.setItem("page",1)
        window.location="/"}} >Выйти</p>
              </div>
            </div>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
              <Nav className='m-auto my-2 my-lg-0' navbarScroll>
                <NavDropdown title='О нас' id='navbarScrollingDropdown'>
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Расписание' id='navbarScrollingDropdown'>
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>dddd</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Программа</Nav.Link>
                <Nav.Link>Новости</Nav.Link>
                <Nav.Link>Команда</Nav.Link>
                <Nav.Link>Контакты</Nav.Link>
                <Nav.Link id='pageUser111' className='minimodal11'>
                  <img
                    alt=''
                    onMouseEnter={() => openModal11()}
                    src={accountImg}
                  />
                  <a href='/PageProfilr'>
                    <div
                      onMouseLeave={() => closeModal11()}
                      className='pageUser11'
                    >
                      
                      {data.map(element => (
                          <p className='h2_elem'>{element.personlastname}</p>
                        ))}
                        <img src={accountImg} alt='' />
                      
                      <Link to='/PageProfilr' className='abu'>
                        <p>Настройки</p>
                      </Link>
                      <p onClick={()=>{ sessionStorage.setItem("page",1)
        window.location="/"}}  >Выйти</p>
                    </div>
                  </a>
                </Nav.Link>
              </Nav>
              <Form className='d-block'>
                <span>Саратов, ул. Пугачева д.98/100</span>

                <div className='cantact11'>
                  <FaPhone />
                  <a href='tel:+7 (8452) 57 79 35'>+7 (8452) 57 79 35</a>
                  <a href=''>
                    <TbBrandTelegram />
                  </a>
                  <a href=''>
                    <SlSocialVkontakte />
                  </a>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='BigNavs'>
          <div className='ScrollBar'>
            <a href='/'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol} alt='' />
                <h2>ЛЕНТА НОВОСТЕЙ</h2>
              </div>
            </a>
            <a href='/page2'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol2} alt='' />
                <h2>РАСПИСАНИЕ</h2>
              </div>
            </a>
            <a href='/page3'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol3} alt='' />
                <h2>ГРУППЫ</h2>
              </div>
            </a>
            <a href='/page4'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol4} alt='' />
                <h2>ЖУРНАЛ</h2>
              </div>
            </a>
            <a href='/page5'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol5} alt='' />
                <h2>ПОСЕЩЕНИЕ</h2>
              </div>
            </a>
            <a href='/page6'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol6} alt='' />
                <h2>ЗАПИСИ О ПРОПУСКАХ</h2>
              </div>
            </a>
            <a href='/page7'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol7} alt='' />
                <h2>ЗАДАНИЯ</h2>
              </div>
            </a>
          </div>
          <div className='Pages'>
            <Routes>
              <Route path='/' element={<Page1 />} />
              <Route path='/Page2' element={<Page2 />} />
              <Route path='/Page3' element={<Page3 />} />
              <Route path='/Page4' element={<Page4 />} />
              <Route path='/Page5' element={<Page5 />} />
              <Route path='/Page6' element={<Page6 />} />
              <Route path='/Page7' element={<Page7 />} />
              <Route path='/PageProfilr' element={<PageProfilr />} />
            </Routes>
          </div>
      </div>
      <div className="otke" title='Open BottomNavigation'>
        <h1 className='och' onClick={() => otke1()}>
          <AiFillCaretUp />
        </h1>
        <h1 className='yop' onClick={() => otke2()}>
          <BsFillCaretDownFill />
        </h1>
      </div>
        <div className="BottomNavigation">
          <a className='Page-a' href="/">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page2">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page3">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page4">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page5">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page6">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page7">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
        </div>
        </div>
    </BrowserRouter>
  )
}