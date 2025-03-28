import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const StyledWrap = styled.div`
    width: 1200px;
    height: auto;
    min-height: 1200px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid #c8d6db;
    box-shadow: 0 0 1px 2px rgba(0,0,0,0.03);
`;


const StyledTitle = styled.h1`
  font-size : 60px;
  font-weight : 800;
  color : skyblue;
  text-align: center;
  margin: 15px 0px;
`;



const StyledInnerWrap = styled.div`
  width: 1100px;
  margin: auto;
  height: auto;
  min-height: 800px;
  padding: 12px;
  border : 1px solid rgb(99 135 135);
  border-radius: 30px;

  `;

const StyledCard = styled.div`
  width: 330px;
  height : 250px;
  margin: 9px 9px;
  padding : 5px;
  box-shadow : 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
  text-align: center;
  border-radius: 40px;

  &:hover{
    cursor : pointer;
    box-shadow : 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
    opacity: 0.9;
  }

`;

const StyledImage = styled.img`
  width: 320px;
  height : 150px;
  border-radius: 30px;
`;

const StyledContent = styled.div`
  width : 300px;
  height : 33 px;
  font-weight : bold;
  font-size : 20px;
  margin-top: 30px;
  text-align: center;
`;


const StyledMoreButton = styled.div`
  width: 150px;
  height : 40px;
  margin: auto;
  border-radius: 22px;
  background-color:rgb(66, 192, 238);
  color: white;
  font-weight: 900;
  border : 2px dotted lightblue;
  text-align: center;
  margin-top: 30px;
  margin-bottom:30px;
  cursor : pointer;
  line-height: 40px; /* height와 동일한 값 */


  &:hover{
  background-color: white;
  color: rgb(66, 192, 238);
  }

`;




const Foods = () => {

  const [pageNo, setPageNo] = useState(1);
  const [foods, setFoods] = useState([]);
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지


  const navi = useNavigate();
  useEffect(() => {
    /* fetch(`http://localhost/srping/busans?pageNo=${pageNo}`
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error("문제발생 삐용", err))
    ); */

    /*  axios({
       url: `http://localhost/spring/busans?pageNo=${pageNo}`,
       method: 'get',
     }.then((result) => console.log(result))); */






    axios
      .get(`http://localhost/spring/busans?pageNo=${pageNo}`)
      .then((result) => {
        console.log(result);
        const response = result.data.getFoodKr.item;
        console.log(response);

        setFoods([...foods, ...response]);
        if (response.length < 9) {
          setHasMore(false);
        }

      });
  }, [pageNo]);

  const clickToButtonHandler = () => {
    setPageNo(pageNo => pageNo + 1);
  };



  return (
    <>
      <StyledWrap>
        <StyledTitle>부산 풀코스</StyledTitle>
        <StyledInnerWrap>
          {

            foods.length === 0 ? (
              <h3>음식점 목록을 불러오는 중입니다.</h3>
            ) : (
              foods.map((e) =>
                <StyledCard
                  key={e.UC_SEQ}
                  onClick={() => navi(`/foods/${e.UC_SEQ}`, {
                    state: { e },
                  })
                  }
                >
                  <StyledImage src={e.MAIN_IMG_THUMB} />
                  <StyledContent>
                    {e.MAIN_TITLE}
                  </StyledContent>
                </StyledCard>)
            )}
        </StyledInnerWrap>
        {hasMore && (
          <StyledMoreButton onClick={clickToButtonHandler}>
            더보기 ▽
          </StyledMoreButton>
        )}
      </StyledWrap>
    </>
  );
};


export default Foods;

