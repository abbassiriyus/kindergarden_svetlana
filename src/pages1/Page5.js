import React, { useState, useEffect } from "react";
import Img1 from "../img/free-icon-daughter-8229500.png";
import PhoneInput from "react-phone-input-2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Img002 from "../img/image 34.png";
import Img001 from "../img/free-icon-daughter-8229500 (1).png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ImgAcc from "../img/free-icon-calendar-1258262 1.png";
import Imgcca from "../img/free-icon-file-968545 1.png";
import axios from "axios";
import url from "../host";

export default function Page5() {
  const data = "<ЯНВАРЬ 2023>";
  const [data1, setData1] = useState([]);

  useEffect(() => {
    function getGroup() {
      axios.get(`${url}/group`).then((res) => {
        setData1(res.data);
      });
    }
    // var hashbir = document.querySelector(".hashbir").innerHTML;
    // console.log(hashbir);
    getGroup();
  }, []);

  return (
    <div className="The-Big" id="useirud2">
      <div className="Cards-Page1-1">
        <center>
          <h1>{data}</h1>
        </center>
        <div className="Stackk">
          <div className="divv">
            <Pagination className="promry" count={22} color="primary" />
          </div>
          <div className="divv">
            <img src={ImgAcc} alt="" />
            <input className="dateee" type="date" />
          </div>
        </div>
        {data1.map((item) => {
          return (
            <Accordion className="Accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="ush">
                  <img src={Img002} alt="" />
                  <h1 className="hashbir">{item.groupname}</h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <h1 className="volshevnk">ВОЛШЕБНИК 1 УРОВНЯ</h1>
                  <ul className="Ullu">
                    <li>5 отсутствует</li>
                    <li className="danger-li">5 отсутствует</li>
                  </ul>
                  <div className="kids-baby">
                    <div className="baby">
                      <img src={Img001} alt="" />
                      <h2>Марина</h2>
                    </div>
                    <div className="baby">
                      <img src={Img001} alt="" />
                      <h2>Марина</h2>
                    </div>
                    <div className="baby">
                      <img src={Img001} alt="" />
                      <h2>Марина</h2>
                    </div>
                    <div className="baby">
                      <img src={Img001} alt="" />
                      <h2>Марина</h2>
                    </div>
                    <div className="baby">
                      <img src={Img001} alt="" />
                      <h2>Марина</h2>
                    </div>
                  </div>
                  <a href="/page6">
                    <button className="class">
                      <img src={Imgcca} alt="" />
                      ЗАПИСИ О ПРОПУСКАХ
                    </button>
                  </a>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
        <div></div>
      </div>
    </div>
  );
}
