import React, { useState, useEffect } from "react";
import './AllPages.css'
import url from "../host";
import axios from "axios";

export default function Page2() {
  const [table, setTable] = useState([])
  const [selectedValue, setSelectedValue] = useState([]);
  const [dars, setdars] = useState([])

  useEffect(() => {
    const zafik = async () => {
      axios
        .get(`${url}/employee`)
        .then((res) => {
          const filteredGroup = res.data.filter(
            (group) =>
              group.positionid === 5
          );
          axios
            .get(`${url}/person`)
            .then((res2) => {
              for (let i = 0; i < res2.data.length; i++) {
                for (let j = 0; j < filteredGroup.length; j++) {
                  if (res2.data[i].personid === filteredGroup[j].personid) {
                    filteredGroup[j].personlastname = res2.data[i].personlastname;
                    filteredGroup[j].employe = res2.data[i].employe;
                  }
                }
              }
              setTable(filteredGroup)
            })
          axios
            .get(`${url}/timetable`)
            .then((res3) => {
              setdars(res3.data)
            })
        })
        .catch((err) => {
          console.log(err);
        });

    }
    zafik()

  }, []);
  useEffect(
    () => {
      console.log(table);
      console.log(dars);
      // console.log("Selected value changed to:", selectedValue);
    },
    [table, dars],
  );
  // const handleSelectChange = (event) => {
  //   setSelectedValue(event.target.value);
  //   console.log(selectedValue);
  // };
  // useEffect(() => {
  //   console.log("Selected value changed to:", selectedValue);
  // }, [selectedValue]);
  return (
    <div className='The-Big'>
      <div className='Big-Page2'>
        <div className='data-group'>
          <select value={selectedValue} id='sxdcfgh'>
            {table.map((element) => (
              <option value={element.personlastname}>
                {element.personlastname}
              </option>
            ))}
          </select>

          <input type='date' />
        </div>
        {/* <div id='tables'>
          <div id='names'>
            <p></p>
            <p>ПН</p>
            <p>ВТ</p>
            <p>СР</p>
            <p>ЧТ</p>
            <p>ПТ</p>
            <p>СБ</p>
            <p>ВС</p>
          </div>
          <div id='inform1'>
            <div id='iconciAlo'>
              <p>09.00 - 09.25</p>
            </div>
          </div>
          <div id='inform2'>
            <div id='inform-p'>
              <p>09.35 - 10.00</p>
              <p>
                Волшебник 1 уровня <br />
                Эмоции каб.2
              </p>
              <p>
                Волшебник 2 уровня <br />
                Эмоции каб.2
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p>
                Волшебник 1 уровня <br />
                Эмоции каб.2
              </p>
              <div id='iconciAlo'></div>
            </div>
          </div>
          <div id='inform1'>
            <div id='inform-p'>
              <p>09.35 - 10.00</p>
              <p>
                Волшебник 1 уровня <br />
                Эмоции каб.2
              </p>
              <p>
                Волшебник 2 уровня <br />
                Эмоции каб.2
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p>
                Волшебник 1 уровня <br />
                Эмоции каб.2
              </p>
              <div id='iconciAlo'></div>
            </div>
          </div>
          <div id='inform2'>
            <div id='iconciAlo'>
              <p>09.00 - 09.25</p>
            </div>
          </div>
          <div id='inform1'>
            <div id='inform-p'>
              <p>09.35 - 10.00</p>
              <p>
                Волшебник 1 уровня <br />
                Эмоции каб.2
              </p>
              <p>
                Волшебник 2 уровня <br />
                Эмоции каб.2
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p>
                Волшебник 1 уровня <br />
                Эмоции каб.2
              </p>
              <div id='iconciAlo'></div>
            </div>
          </div>
          <div id='inform2'>
            <div id='iconciAlo'>
              <p>09.00 - 09.25</p>
            </div>
          </div>
          <div id='inform1'>
            <div id='iconciAlo'>
              <p>09.00 - 09.25</p>
            </div>
          </div>
        </div>
        <div className='zafik'>
          
          {dars.map((ele)=>{
            if (ele.weekday==="monday" && ele.begining==="2023-05-09T09:00:00.000Z" && ele.groupid===1) {
              return<h2>{ele.weekday}</h2>
            }
  

})}
        </div> */}
      </div>
      <div>

      </div>


      <div className="table_test">
        <div className="number_test">
          <p></p>
          <p>ПН</p>
          <p>ВТ</p>
          <p>СР</p>
          <p>ЧТ</p>
          <p>ПТ</p>
          <p>СБ</p>
          <p>ВС</p>
        </div>
        <div className="test_test">
          <p>09.00-09.25</p>
          <p>09.00-09.25</p>
          <p>09.00-09.25</p>
          <p>09.00-09.25</p>
          <p>09.00-09.25</p>
          <p>09.00-09.25</p>
          <p>09.00-09.25</p>
          <p>09.00-09.25</p>
        </div>
      </div>
    </div>
  )
}

