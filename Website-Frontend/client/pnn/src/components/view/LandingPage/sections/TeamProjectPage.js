
import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import AcademicProject from "./Tpp/AcademicProject";
import WebProject from "./Tpp/WebProject";
import "./Tpp/Tpp.css";
function TeamProjectPage() {
  let [num, setNum] = useState(0);
  return (
    <div className="container">
      <div className="header" >
        <div className="titleImg" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL+'/images/team-skl/TppBgImage.png'})`
    }}>
         
            P & N
          
          <h4>프로젝트 소개</h4>
          </div>
        <div className="navigation">
          <Nav defaultActiveKey="/home" as="ul" >
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1"  className="nav"
                onClick={() => {
                  setNum(0);
                }}>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2"   className="nav"
                onClick={() => {
                  setNum(1);
                }}>Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>{/*헤더 영역*/}
      <div className="content">
        <TabPage tab={num}></TabPage>
      </div>
    </div>
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
