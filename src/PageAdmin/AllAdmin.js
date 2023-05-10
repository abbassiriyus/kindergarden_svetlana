import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from './Admin1'
import Page2 from './Employee'
import axios from 'axios'
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
import './AllAdmin.css'
import { FaPhone } from 'react-icons/fa'
import { TbBrandTelegram } from 'react-icons/tb'
import { SlSocialVkontakte } from 'react-icons/sl'
import ImgScrol from '../img/free-icon-news-5995360 1.png'
import { AiFillCaretUp } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
import url from '../host'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Emp2 from './Emp2'
import SpiskDti from './SpiskDti'
import GroupDti from './GroupDti'
import SpsRodtl from './SpsRodtl'
import Zayavv from './Zayavv'
import Vztsasd from './Vztsasd'
import Zodaniii from './Zodaniii'
import Plan from './Plan'
import ByGrupss from './ByGrupss'
import PageProfilr from './PageProfilr'
import Statics from './Statics'




const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



export default function AllAdmin() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    useEffect(() => {
        if(3>2){
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/person`)
                const filteredData = response.data.filter(
                    person => person.email === localStorage.getItem('name')
                )
                setData(filteredData)
                localStorage.setItem("personid", filteredData[0].personid)
                /* console.log(filteredData) */
            } catch (err) {
                console.error(err)
            }
        }}
        // fetchData()

        const fetchData2 = async () => {
            try {
                const response = await axios.get(`${url}/employee`)
                const filteredData2 = response.data.filter(
                    person => person.personid === localStorage.getItem("personid")
                )
                setData2(filteredData2)
                console.log(filteredData2)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData2()

    }, [])

    function openModal11() {
        document.querySelector('.pageUser11').style = 'display:block'
        document.querySelector('.pageUser112').style = 'display:block'
    }
    function closeModal11() {
        document.querySelector('.pageUser11').style = 'display:none'
        document.querySelector('.pageUser112').style = 'display:none'
    }

    function otke1() {
        var navigation = document.querySelector('.BottomNavigation')
        navigation.style = 'bottom: 0;'
        document.querySelector('.och').style = 'display: none;'
        document.querySelector('.yop').style = 'display: block;'
    }
    function otke2() {
        var navigation = document.querySelector('.BottomNavigation')
        navigation.style = ' bottom: -110px'

        document.querySelector('.och').style = 'display: block;'
        document.querySelector('.yop').style = 'display: none;'
    }
    return (
        <BrowserRouter>
            <div className="The-Big">

                <Navbar className='Navbar11' expand='lg'>
                    <Container>
                        <Navbar.Brand>
                            <img className='logoimg11' src={logoimg} alt='' onClick={() => {
                                sessionStorage.setItem("page", 1)
                                window.location = "/"
                            }} />{' '}
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
                                <p onClick={() => {
                                    sessionStorage.setItem("page", 1)
                                    window.location = "/"
                                }} >Выйти</p>
                            </div>
                        </div>
                        <Navbar.Toggle aria-controls='navbarScroll' />
                        <Navbar.Collapse id='navbarScroll'>
                            <Nav className='m-auto my-2 my-lg-0' navbarScroll>
                                <NavDropdown title='О нас' id='navbarScrollingDropdown'>
                                    <NavDropdown.Item onClick={() => {
                                        sessionStorage.setItem("page", 1)
                                        window.location = "/"
                                    }}>Page</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => {
                                        sessionStorage.setItem("page", 1)
                                        window.location = "/"
                                    }}>Page</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => {
                                        sessionStorage.setItem("page", 1)
                                        window.location = "/"
                                    }}>Page</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title='Расписание' id='navbarScrollingDropdown'>
                                    <NavDropdown.Item onClick={() => {
                                        sessionStorage.setItem("page", 1)
                                        window.location = "/"
                                    }}>Page</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => {
                                        sessionStorage.setItem("page", 1)
                                        window.location = "/"
                                    }}>Page</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => {
                                        sessionStorage.setItem("page", 1)
                                        window.location = "/"
                                    }}>Page</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link onClick={() => {
                                    sessionStorage.setItem("page", 1)
                                    window.location = "/"
                                }}>Программа</Nav.Link>
                                <Nav.Link onClick={() => {
                                    sessionStorage.setItem("page", 1)
                                    window.location = "/"
                                }}>Новости</Nav.Link>
                                <Nav.Link onClick={() => {
                                    sessionStorage.setItem("page", 1)
                                    window.location = "/"
                                }}>Команда</Nav.Link>
                                <Nav.Link onClick={() => {
                                    sessionStorage.setItem("page", 1)
                                    window.location = "/"
                                }}>Контакты</Nav.Link>
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
                                                <h2 className='h2_elem'>{element.personlastname}</h2>
                                            ))}
                                            <img src={accountImg} alt='' />

                                            <Link to='/PageProfilr' className='abu'>
                                                <p>Настройки</p>
                                            </Link>
                                            <p onClick={() => {
                                                sessionStorage.setItem("page", 1)
                                                window.location = "/"
                                            }}  >Выйти</p>
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
                <div className="bigbox">
                    <div className='Scroll-Page-Div'>
                        <a href='/' >
                            <p className='scrl-h4'><img src={ImgScrol} alt="" />ЛЕНТА НОВОСТЕЙ</p>
                        </a>
                        <Accordion className='Accor-Divs' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography><img src={ImgScrol} alt="" />СОТРУДНИКИ</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    <a href='/page2'>
                                        <h5>СОТРУДНИКИ</h5>
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='Accor-Divs' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography><img src={ImgScrol} alt="" />ДЕТИ</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    <a href="/SpiskDti">
                                        <h5>Список детей</h5>
                                    </a>
                                    <a href="/groupDti">
                                        <h5>Группы</h5>
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='Accor-Divs' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography><img src={ImgScrol} alt="" />РОДИТЕЛИ</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    <a href="/SpsRodtl">
                                        <h5>Список родителей</h5>
                                    </a>
                                    <a href="/Zayavv">
                                        <h5>Заявки</h5>
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion className='Accor-Divs' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography><img src={ImgScrol} alt="" />ЖУРНАЛ</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    <a href="/Vztsasd">
                                        <h5>Посещение</h5>
                                    </a>
                                    <h5>Записи о пропусках</h5>
                                    <a href="/Zodaniii">
                                        <h5>Задания</h5>
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='Accor-Divs' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography><img src={ImgScrol} alt="" />УЧЕБНЫЙ ПЛАН</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    <a href="/Plan">
                                        <h5>Учебный план</h5>
                                    </a>
                                    <a href="/ByGrupss">
                                        <h5>Расписание</h5>
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <a href="/Statics">
                            <p className='scrl-h4'><img src={ImgScrol} alt="" />СТАТИСТИКА</p>
                        </a>

                    </div>
                    <div className='routerDiv'>
                        <Routes>
                            <Route path="/" element={<Page1 />} />
                            <Route path="/page2" element={<Page2 />} />
                            <Route path="/Emp2" element={<Emp2 />} />
                            <Route path="/SpiskDti" element={<SpiskDti />} />
                            <Route path="/groupDti" element={<GroupDti />} />
                            <Route path="/SpsRodtl" element={<SpsRodtl />} />
                            <Route path="/Zayavv" element={<Zayavv />} />
                            <Route path="/Vztsasd" element={<Vztsasd />} />
                            <Route path="/Zodaniii" element={<Zodaniii />} />
                            <Route path="/Plan" element={<Plan />} />
                            <Route path="/ByGrupss" element={<ByGrupss />} />
                            <Route path="/PageProfilr" element={<PageProfilr />} />
                            <Route path="/Statics" element={<Statics />} >
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
