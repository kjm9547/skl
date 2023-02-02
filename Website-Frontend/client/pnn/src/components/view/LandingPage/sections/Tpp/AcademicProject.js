import React, { useContext, useState } from "react";
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md'
import "./Tpp.css";
function AcademicProject() {
  const [frame, setFrame] = useState(0);
  const [hideLeft,setHideLeft] = useState(false);
  const [hideRight,setHideRight] = useState(false);
  
  return (
    <>
      <div className="contentDiv">
       
        <div onMouseEnter={()=>{setHideLeft(true)}} onMouseLeave={()=>{setHideLeft(false)}}
        className ="sideSection"
        >
            {
                hideLeft?<ButtonLeft></ButtonLeft>:null
            }   
          </div>
          <div><FrameMain></FrameMain></div>
          <div onMouseEnter={()=>{setHideRight(true)}} onMouseLeave={()=>{setHideRight(false)}}
            className="sideSection"
          >
            {
                hideRight?<ButtonRight></ButtonRight>:null
            }   
          </div>
        
      </div>
    </>
  );
}
function ButtonRight (){
    return(
    <>
    
    <button> <MdNavigateNext></MdNavigateNext></button>
    {/*사이즈 칼라 타이틀 지정 가능*/}
</>
    )
}
function ButtonLeft (){
    return(
    <>
    
    <button> <MdNavigateBefore></MdNavigateBefore></button>
</>
    )
}
function FrameMain(){
    return(
        <>
        <p>학술제</p>
        <p>학과에서 진행하는 동아리 프로젝트</p>
        <div className="frameImg">
            사진 들어올겨
        </div>
        <p>부과 설명</p>
        <p> 좌우 버튼 클릭 시 중간 화면 조절하면서 학술제 설명 예정? 
            <br/>버튼은 좌우 섹션에 마우스 올리면 보여요</p>
        </>
    )
}
export default AcademicProject;
