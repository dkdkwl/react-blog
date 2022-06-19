import './App.css';
import{useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','부천 우동 맛집']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);


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
        <h4>{글제목[0]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="List">
        <h4>{글제목[1]}111</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="List">
        <button onClick = {()=>{setModal(!modal)}}>{글제목[2]}팝업버튼</button>
        <p>2월 19일 발행</p>
      </div>
      <h4 style={{color:'red',fontSize:'20px'}}>{post}</h4>
      {
        modal == true ? <Modal/> : null
      }

      {
        글제목.map(function(a,i){
          return (
          <div className="List" key = {i}>
            <h4>
            <span onClick={() => {
              let copy = [...따봉];
              copy[i] = copy[i]+1;
              따봉변경(copy)
            }}>{따봉[i]}</span>
            </h4>
            <p>2월 18일 발행</p>
          </div>
          )
        })
      }
      
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
