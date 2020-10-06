import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

const HrStyle = styled.hr`
  background-color: #003458;
`;
const TitleStyle = styled.h1`
  text-align: center;
  color: #003458;
`;
function App() {
  return (
    <div>
      <TitleStyle>영화관리페이지</TitleStyle>
      <HrStyle />
      <Header />
      <HrStyle />
      <Main />
    </div>
  );
}

export default App;
