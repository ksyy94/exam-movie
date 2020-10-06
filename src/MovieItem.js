import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItemStyle = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 70% 30%;
  justify-content: space-around;
  border: 2px solid #003458;
  border-radius: 10px;
  padding: 10px 10px;
`;
const MovieImageStyle = styled.img`
  width: 200px;
  height: 150px;
`;
const MovieImageBoxStyle = styled.div`
  width: 200px;
  height: 150px;
  text-align: center;
`;
const MovieTextStyle = styled.div`
  display: grid;
`;
const MovieButtonStyle = styled.button`
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
const MovieItem = (props) => {
  const { id, title, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;
  return (
    <MovieItemStyle>
      <MovieImageBoxStyle>
        <MovieImageStyle src={medium_cover_image} alt="" />
      </MovieImageBoxStyle>
      <MovieTextStyle>
        <Link to={"/MovieDetail/" + id}>{title}</Link>
        <br />
        <MovieButtonStyle onClick={() => deleteById(id)}>삭제</MovieButtonStyle>
      </MovieTextStyle>
    </MovieItemStyle>
  );
};

export default MovieItem;
