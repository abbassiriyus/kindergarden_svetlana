import '../css/Home.css';
import '../media/HomeMedia.css';
import Img1 from '../img/img1.png'
import Img2 from '../img/img2.png'
import Img3 from '../img/img3.png'
import Img4 from '../img/image 11.png'
import PhoneInput from 'react-phone-input-2'
import { useState } from 'react';





function App() {
  const [phone2, usePhone2] = useState()

  return (
    <div className="App">
      <h1 className='novs'>Новости</h1>
      <div className="cards-home">
        <div className="card-home">
          <img src={Img2} alt="" />
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis itaque ipsum ex, magni rem eaque autem ratione corporis, doloribus nesciunt numquam, nostrum laboriosam nisi hic aperiam beatae quam soluta?</p>
          <button>padrobnee</button>
        </div>
        <div className="card-home">
          <img src={Img2} alt="" />
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis itaque ipsum ex, magni rem eaque autem ratione corporis, doloribus nesciunt numquam, nostrum laboriosam nisi hic aperiam beatae quam soluta?</p>
          <button>padrobnee</button>
        </div>
        <div className="card-home">
          <img src={Img2} alt="" />
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis itaque ipsum ex, magni rem eaque autem ratione corporis, doloribus nesciunt numquam, nostrum laboriosam nisi hic aperiam beatae quam soluta?</p>
          <button>padrobnee</button>
        </div>
      </div>
      <div className="btn-01">
        <button className='smotr-et'>смотреть еще новости</button>
      </div>
      <div className="blog">
        <div className="bgs">
          <div className="blogs">
            <h1>Остались вопросы? Получите
              бесплатную консультацию</h1>
            <p>Оставьте телефон и мы перезвоним
              и расскажем все подробности о филиале</p>
            <div className="forms">
            <PhoneInput
             id="userNumber2"
             className='userNumber2'
             country={'ru'}
             value={phone2}
             onChange={phone2 => usePhone2}
             />
              <button>отправить</button>
            </div>
          </div>
          <div className="blogs">
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
