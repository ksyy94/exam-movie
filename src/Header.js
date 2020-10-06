import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RouterStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
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

const Header = () => {
  return (
    <RouterStyle>
      <Link to="/Movie">
        <ButtonStyle>영화 등록</ButtonStyle>
      </Link>
      <Link to="/MovieList">
        <ButtonStyle>영화 목록</ButtonStyle>
      </Link>
    </RouterStyle>
  );
};

export default Header;
