import './App.css';
import{useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['서울 우동 맛집','인천 우동 맛집','부천 우동 맛집']);
  let [logo, setLogo] = useState('ReactBlog');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="List">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="List">
        <h4>{글제목[1]}</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="List">
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
      </div>
      <h4 style={{color:'red',fontSize:'20px'}}>{post}</h4>
    </div>
  );
}

export default App;
