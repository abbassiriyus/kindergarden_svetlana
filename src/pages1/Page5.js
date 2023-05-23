import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Img002 from "../img/image 34.png";
import Img001 from "../img/free-icon-daughter-8229500 (1).png";
import axios from "axios";
import url from "../host";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ImgAcc from "../img/free-icon-calendar-1258262 1.png";
import Imgcca from "../img/free-icon-file-968545 1.png";

export default function Page1() {
  const [up, setup] = useState([]);
  const [child, setChild] = useState([]);
  const [selectedKid, setSelectedKid] = useState([]);

  const handleKidClick = (chilid) => {
    setSelectedKid(chilid);
    var nn = document.querySelector(".Cards-Page1-1");
    var ff = document.querySelector(".Cards-Page1");
    ff.style = "display: flex;";
    nn.style = "display: none;";
  };
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${url}/group_emp`)
        .then((res) => {
          const filteredGroup = res.data.filter(
            (group) =>
              group.employeeid === parseInt(localStorage.getItem("employ"))
          );
          axios.get(`${url}/group`).then((res2) => {
            for (let i = 0; i < res2.data.length; i++) {
              for (let j = 0; j < filteredGroup.length; j++) {
                if (res2.data[i].groupid === filteredGroup[j].groupid) {
                  filteredGroup[j].groupname = res2.data[i].groupname;
                }
              }
            }
            setup(filteredGroup);
          });
          axios.get(`${url}/child`).then((res3) => {
            setChild(res3.data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(up);
    console.log(child);
  }, [child, up]);

  function hello() {
    var asd = document.querySelector(".MuiSvgIcon-root").innerHTML;
    console.log(asd);
  }

  return (
    <div className="The-Big" id="useirud">
      <div className="Stackk">
        <div className="divv">
          <Pagination
            onClick={() => hello()}
            className="promry"
            count={30}
          />
        </div>
        <div className="divv">
          <img src={ImgAcc} alt="" />
          <input className="dateee" type="date" />
        </div>
      </div>
      <div className="Cards-Page1-1">
        {up.map((element) => (
          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="ush">
                <img src={Img002} alt="" />
                <h1>{element.groupname}</h1>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typogRaf">
                {child.map((item) => {
                  if (element.groupid === item.groupid) {
                    return (
                      <div
                        onClick={() => handleKidClick(item)}
                        className="kids-baby"
                      >
                        <div className="baby">
                          <img src={Img001} alt="" />
                          <h2>{item.childfirstname}</h2>
                        </div>
                      </div>
                    );
                  }
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {selectedKid && (
        <div className="Cards-Page1">
          <div className="CardProfil-Page1">
            <img src={selectedKid.photo} alt="" />
            <br />
            <h4>{selectedKid.name}</h4>
          </div>
          <div className="Card-Page1">
            <div className="Input-grup">
              <h4>Фамилия</h4>
              <p>{selectedKid.childlastname}</p>
            </div>
            <div className="Input-grup">
              <h4>Имя</h4>
              <p>{selectedKid.childfirstname}</p>
            </div>
            <div className="Input-grup">
              <h4>Группа</h4>
              <p>{selectedKid.groupid}</p>
            </div>
            <div className="Input-grup">
              <h4>Дата рождения</h4>
              <p>{selectedKid.dateofbirth}</p>
            </div>
            <div className="Input-grup">
              <h4>Представители</h4>
              <ul>
                {/* {selectedKid.representatives.map((rep, index) => (
                  <li key={index}>
                    {rep.name} {rep.phone}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
