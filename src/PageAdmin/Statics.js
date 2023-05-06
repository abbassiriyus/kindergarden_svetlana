import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './css/Statics.css'
import hlo from '../img/Group 182 (2).png'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
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
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="KotaMui">
            <div className="HeadTabs">
                <h2>Статистика</h2>
                <button><img src={hlo} alt='' /> Экспортировать</button>
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Дети" {...a11yProps(0)} />
                        <Tab label="Посещаемость" {...a11yProps(1)} />
                        <Tab label="Занятия" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className="MuiTabs">
                        <div className="SlctDvs">
                            <select>
                                <option>Год</option>
                                <option>Год</option>
                                <option>Год</option>
                            </select>
                            <select>
                                <option> Месяц</option>
                                <option> Месяц</option>
                                <option> Месяц</option>
                            </select>
                            <select>
                                <option>Группа</option>
                                <option>Группа</option>
                                <option>Группа</option>
                            </select>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="MuiTabs">
                        <div className="SlctDvs">
                            <select>
                                <option> Месяц</option>
                                <option> Месяц</option>
                                <option> Месяц</option>
                            </select>
                            <select>
                                <option> Группа</option>
                                <option> Группа</option>
                                <option> Группа</option>
                            </select>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="MuiTabs">
                        <div className="SlctDvs">
                            <select>
                                <option>Год</option>
                                <option>Год</option>
                                <option>Год</option>
                            </select>
                            <select>
                                <option> Месяц</option>
                                <option> Месяц</option>
                                <option> Месяц</option>
                            </select>
                            <select>
                                <option>Группа</option>
                                <option>Группа</option>
                                <option>Группа</option>
                            </select>
                        </div>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}
