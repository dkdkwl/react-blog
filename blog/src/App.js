import './App.css';
import{useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','부천 우동 맛집']);
  let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4></h4>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)
      }}>글 수정</button>

      <button onClick={
        ()=>{
          let titleSort = [...글제목];
          titleSort.sort();
          글제목변경(titleSort)
        }
      }>순서변경하기</button>


      <div className="List">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>좋아요</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="List">
        <h4>{글제목[1]}111</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="List">
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
      </div>
      <h4 style={{color:'red',fontSize:'20px'}}>{post}</h4>

      <Modal/>
    </div>
  );
}

function Modal(){
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

export default App;
