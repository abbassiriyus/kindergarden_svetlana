import React, { Component, useState } from "react";
import "../css/Number.css";
import "../media/NumberMedia.css";
import Image from "../img/image 25.png";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import url from "../../host";

export default class Form extends Component {
  state = {
    phone2: "",
  };

  modalOpen() {
    document.querySelector("#Modal").style = "display: block";
  }
  modalClose() {
    document.querySelector("#Modal").style = "display: none";
  }

  state = {
    person: [],
  };

  getMail = () => {
    var data = new FormData();
    data.append("phone", document.querySelector(".form-control").value);
    axios
      .post(`${url}/login`, data)
      .then((res) => {
        sessionStorage.setItem("page", res.data);
        localStorage.setItem(
          "num",
          document.querySelector(".form-control").value
        );
        window.location = "/page";
        console.log(res.data, "page");
        console.log("ok");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="Big-Form">
          <div className="Div-form">
            <img src={Image} alt="" />
            <div className="Inp-form">
              <input type="number" className="form-control" />
              <br />
              <button onClick={this.getMail}>Далее</button>
            </div>
          </div>
        </div>
        <div id="Modal">
          <span onClick={this.modalClose} className="X">
            X
          </span>
          <div className="xs">
            <span className="Error"> X</span>
          </div>
          <h1>
            Неверный номер <br />
            телефона
          </h1>
          <p>Введите номер телефона, указанный в договоре</p>
        </div>
      </>
    );
  }
}
