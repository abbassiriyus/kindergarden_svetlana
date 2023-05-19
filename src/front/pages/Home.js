import "../css/Home.css";
import "../media/HomeMedia.css";
import Img1 from "../img/img1.png";
import Img2 from "../img/img2.png";
import Img3 from "../img/img3.png";
import Img4 from "../img/image 11.png";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
function App() {
  const [phone2, usePhone2] = useState();

  return (
    <div className="App">
      <h1 className="novs">Новости</h1>
      <div className="cards-home">
        <div className="card-home">
          <img src={Img2} alt="" />
          <h1>Волшебный новый год</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veritatis itaque ipsum ex, magni rem eaque autem ratione corporis,
            doloribus nesciunt numquam, nostrum laboriosam nisi hic aperiam
            beatae quam soluta?
          </p>
          <a href="/news">
            <button>padrobnee</button>
          </a>
        </div>
        <div className="card-home">
          <img src={Img2} alt="" />
          <h1>Волшебный новый год</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veritatis itaque ipsum ex, magni rem eaque autem ratione corporis,
            doloribus nesciunt numquam, nostrum laboriosam nisi hic aperiam
            beatae quam soluta?
          </p>
          <a href="/news">
            <button>padrobnee</button>
          </a>
        </div>
        <div className="card-home">
          <img src={Img2} alt="" />
          <h1>Волшебный новый год</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veritatis itaque ipsum ex, magni rem eaque autem ratione corporis,
            doloribus nesciunt numquam, nostrum laboriosam nisi hic aperiam
            beatae quam soluta?
          </p>
          <a href="/news">
            <button>padrobnee</button>
          </a>
        </div>
      </div>
      <div className="btn-01">
        <a href="/news">
          <button className="smotr-et">смотреть еще новости</button>
        </a>
      </div>
      <div className="blog">
        <div className="bgs">
          <div className="blogs">
            <h1>Остались вопросы? Получите бесплатную консультацию</h1>
            <p>
              Оставьте телефон и мы перезвоним и расскажем все подробности о
              филиале
            </p>
            <div className="forms">
              <PhoneInput
                id="userNumber2"
                className="userNumber2"
                country={"ru"}
                value={phone2}
                onChange={(phone2) => usePhone2}
              />
              <button>отправить</button>
            </div>
          </div>
          <div className="blogs">
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.126783016199!2d69.35125797648543!3d41.284345102379696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef58a2f81879b%3A0x9111f25766467abb!2z0JTQtdGC0YHQutC40Lkg0YHQsNC0IOKEliA5Mw!5e0!3m2!1sru!2s!4v1684415277496!5m2!1sru!2s"
        height="450"
        style={{ border: "0", width: "100%", marginTop: "10px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default App;
