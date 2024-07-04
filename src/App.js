import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
//Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size : 24px;
  font-weight : bold;
  text-align : center;
`;

function App(props){
  return (
    <BrowserRouter>
      <MainTitleText>엘렌의 미니 블로그</MainTitleText>
      <Routes>
        {/* 인덱스 경로 */}
        <Route index element={<MainPage />}></Route>

        <Route path="post-write" element={<PostWritePage/>}></Route>
        
        <Route path="post/:postId" element={<PostViewPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;