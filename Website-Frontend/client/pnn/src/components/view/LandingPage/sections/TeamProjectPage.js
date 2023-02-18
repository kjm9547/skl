
import React, { useState } from "react";
import AcademicProject from "./Tpp/AcademicProject";
import WebProject from "./Tpp/WebProject";

import { ScrollContainer } from "react-scroll-motion";
import { useNavigate } from "react-router-dom";
import "./Tpp/Tpp.css";
function TeamProjectPage() {
  let navigate = useNavigate();
  let [num, setNum] = useState(0);
  return (
    <>
    <button  onClick={()=>{setNum(0)}} class="btn-3d blue">학술제</button>
    <button onClick={()=>{setNum(1)}} class="btn-3d blue">동아리 웹</button>
    
    <TabPage tab={num}></TabPage>
    
    </>
  );
}
function TabPage(props) {
  return (
    <div>
      {props.tab == 0 ? (
        <AcademicProject></AcademicProject>
      ) : (
        <WebProject></WebProject>
      )}
    </div>
  );
}

export default TeamProjectPage;
