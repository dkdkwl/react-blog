import './App.css';
import{useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','부천 우동 맛집']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0);
  let [입력값,입력값변경] = useState('');



  return (
    <div className="App">
      <h4 style={{color:'red',fontSize:'20px'}}>{post}</h4>
      {
        글제목.map(function(a,i){
          return (
          <div className="List" key = {i}>
            <h4 onClick={()=>{
              setModal(true);
              setTitle(i);
            }}>{글제목[i]}
            <span onClick={() => {
              let copy = [...따봉];
              copy[i] = copy[i]+1;
              따봉변경(copy)
            }}>{따봉[i]}</span>
            </h4>
            <p></p>
            <button onClick={(e)=>{
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy)
            }}>삭제</button>
          </div>
          )
        })
      }

      <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button>

      <input className='userInput' />
      <button onClick={()=>{
        let userData = document.querySelector('.userInput').value;
        if(!userData == ''){
          let copy = [...글제목];
          copy.unshift(userData);
          글제목변경(copy);
          let copy2 = [...따봉];
          copy2.unshift(0);
          따봉변경(copy2);
        }} 
      }>
        추가하기
      </button>
      <textarea/>

      {
        modal == true ? <Modal title = {title} 글제목변경={글제목변경} color={'coral'} 글제목={글제목}/> : null
      }
    </div>
  );
}



function Modal(props){
  return (
    <>
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}


export default App;
