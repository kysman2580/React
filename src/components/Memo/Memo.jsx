/* userState 활용해보기 */
import { useState } from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  width : 1000px;
  height : 800px;
  margin : auto;
  border : 1px solid rgba(0,0,0,0.17);
  border-radius : 12px;
  padding : 25px;

`;

const StyledTitle = styled.h1`
  font-size : 40px;
  color : lightpink;
  text-align: center;
`;

const StyledHr = styled.div`
  border : 1px solid rgba(0,0,0,0.1);
  margin : 50px 0px;
  width : 100%;
`;

const StyledMemo = styled.div`
  width : 250px;
  height : 160px;
  margin : 20px;
  padding : 7px;
  background-color : lightyellow;
  border : 1px solid yellow;
  border-radius : 2px;
  box-shadow : 0px 0px 1px 2px;
  display : inline-block;
`;

const StyledContent = styled.div`
  width : 90%;
  height : 60%;
  margin : auto;
  padding : 7px;
  font-size 10px;
  text-align : center;

`;

const StyledWriter = styled.div`
  width : 90%;
  height : 20%;
  font-weight : bold;
  text-align: right;
  margin : auto;

`;

const StyledButton = styled.button`
  width : 180px;
  height 50px;
  border : solid 1px black;
  border-radius : 30px;
  background-color : lightgreen;
  margin-top : 30px;

`;





const Memo = () => {
  // AJAX요청을 잘 보내서 응답을 받았다는 가정하에 메모들이 반환됨(Table에서 조회됨)
  const [memos, setMemos] = useState([
    {
      writer: '짱구',
      content: '울라울라',
    },
    {
      writer: '훈이',
      content: '찡찡',
    },
    {
      writer: '철수',
      content: 'zzz',
    },
    {
      writer: '맹구',
      content: '콧물 찍찎',
    },
  ])


  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  // state : 컴포넌트에서 사용할 변수
  // state의 변화가 일어나면 컴포넌트가 재렌더링
  // useState() => [value, setValue] == value 인자로 전달한 초기값의 식별자
  //                                 == setValue value를 변경할 수 있는 setter 함수


  const inputContentHandler = (e) => {
    setContent(e.target.value);
  };

  const inputWriterHandler = (e) => {
    setWriter(e.target.value);
  };

  // 추가하기 버튼 클릭 시 memoState에 새롭게 요소를 추가할 핸들러
  const addMemo = () => {
    const memo = { writer : writer, content : content };

    // setState를 이용해서 memo state를 변경
    // memos.push(memo);
    setMemos([...memos, memo]);

    setContent('');
    setWriter('');
  };



  return (
    <>
      <StyledWrap>
        <StyledTitle>메모 작성해보기</StyledTitle>
        <StyledHr />
        {
          memos ? ( memos.map((memo, i) => (
              <StyledMemo key={i}>
                <StyledContent>{memo.content}</StyledContent>
                <StyledWriter>{memo.writer}</StyledWriter>
              </StyledMemo>
          ))
        ) : (
        <h2>메모가 존재하지 않습니다.</h2>
        )}
        <div>
            <h4>내용을 입력해주세요~</h4>
            <input onChange={inputContentHandler} type="text" value={content}/>
            <br />
        </div>
        <div>
            <h4>작성자를 입력해주세요</h4>
            <input onChange={inputWriterHandler} type="text" value={writer}/>
            <br />
        </div>
        <StyledButton onClick={addMemo}>메모추가하기</StyledButton>
      </StyledWrap>
    </>
  );
};

export default Memo;