import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  display: grid;
  justify-items: center;
`;
const InputStyle = styled.input`
  height: 45px;
  width: 50%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;

const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: end;
  padding: 20px 0px;
`;
const ButtonStyle = styled.button`
  background-color: #003458;
  color: white;
  width: 80px;
  height: 45px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 6px;
  border: 0px;
  cursor: pointer;
`;
const MovieDetail = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  const id = props.match.params.id;

  console.log(id);
  useEffect(() => {
    console.log("아이디 정보 들고 옴");
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }, []);

  function inputHandle(e) {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  }

  function ModifyMovie(e) {
    e.preventDefault();

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        if (res === "ok") {
          alert("수정 되었습니다.");
        }
      });
  }

  return (
    <div>
      <FormStyle>
        <InputStyle
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
          placeholder="제목을 입력하세요"
        />
        <br />
        <InputStyle
          type="text"
          name="rating"
          onChange={inputHandle}
          value={movie.rating}
          placeholder="평점을 입력하세요"
        />
        <br />
        <InputStyle
          type="text"
          onChange={inputHandle}
          name="summary"
          value={movie.summary}
          placeholder="줄거리를 입력하세요"
        />
        <br />
        <InputStyle
          type="text"
          name="medium_cover_image"
          onChange={inputHandle}
          value={movie.medium_cover_image}
          placeholder="이미지 주소를 입력하세요"
        />
        <br />
        <ButtonBoxStyle>
          <ButtonStyle onClick={ModifyMovie}>수정</ButtonStyle>
        </ButtonBoxStyle>
      </FormStyle>
    </div>
  );
};

export default MovieDetail;
