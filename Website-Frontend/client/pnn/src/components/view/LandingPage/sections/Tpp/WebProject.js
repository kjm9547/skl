import React, { useContext, useState, Component } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { MotionAnimate } from "react-motion-animate";
import "./Tpp.css";
import "swiper/swiper.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiFillCaretDown } from "react-icons/ai";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
} from "swiper";
import {BsChevronDoubleDown} from 'react-icons/bs'
SwiperCore.use([Navigation, Pagination, Autoplay]);
function AcademicProject() {
  let [visible,setVisible] = useState(false)
  let [visibleF,setVisibleF] = useState(false)
  let [visibleGit,setVisibleGit] = useState(false)
  return (
      <ScrollContainer style={{
        fontFamily:'Noto Sans',
    }}>
 <ScrollPage style={{}}>
          <Animator >
            <div  style={{fontSize:40, paddingTop:40, paddingBottom:40}}>
              2023 P&N 동아리 홈페이지
              <br/>
            </div>
            <hr></hr>
            <FrameMain></FrameMain>
          </Animator>
        </ScrollPage>
        <ScrollPage style={{
          backgroundColor:"cornflowerblue",
          color:"white"
        }} >
          
          <a name="test"/>
          <Animator animation={batch(Move(0,500),Fade(), Sticky(50,50),  MoveOut(0,-400))}>
            <div style={{fontSize:30}}>2023 P&N <br/><hr></hr>동아리 홈페이지 제작</div>
          </Animator>
        </ScrollPage>
        <ScrollPage style={{backgroundColor:""}} >
          <Animator animation={batch(Move(0,1600),StickyIn(), FadeIn(), ZoomIn(7,0))}style={{fontSize:40, margin:"auto"}}>
            <h1>
              이미지추가<br/>
            동아리 구성원들이 함께 제작<br/></h1><hr/>
            <div style={{fontSize:30}}>백엔드와 프론트엔드 팀으로 구성하여 참여
            <br></br>
            <button style={{marginTop:20,fontSize:20}}
              onClick={()=>{
                visibleF=checkState(visibleF)
                setVisible(!visible)
               
              }}
            >백엔드??</button><button style={{marginTop:20,fontSize:20}}
            onClick={()=>{
             
              setVisibleF(!visibleF)
              console.log(visibleF)
            }}>프론트엔드??</button>
            {

              visible?<BackEnd/>:null
              
            }
            {
              visibleF?<FrontEnd/>:null
            }
            </div>
            
          </Animator>
        </ScrollPage>
        <ScrollPage >
        <hr/>
          <Animator animation={batch(Move(0,2400),StickyIn(), FadeIn(), ZoomIn())}style={{fontSize:40, margin:"auto"}}>
          
          <img src={process.env.PUBLIC_URL +"/images/team-skl/webImg1.png"} style={{width:300}} />
          <img src={process.env.PUBLIC_URL +"/images/team-skl/webImg2.png"} style={{width:300}} /><br></br>
          <hr></hr>
          <span>리액트와 스프링을 활용한 웹 개발</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <hr/>
          <Animator animation={batch(Move(0,2400),StickyIn(), FadeIn(), ZoomIn())} style={{fontSize:40}}>
          <img src={process.env.PUBLIC_URL +"/images/team-skl/webImg4.jpg"} style={{width:300}} />
          <img src={process.env.PUBLIC_URL +"/images/team-skl/webImg5.png"} style={{width:300}} />
          <br/> 
            <hr></hr>
          디스코드와 노션을 활용하여 회의 및 세미나 진행
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <hr/>
          <Animator animation={batch(Move(0,2400),StickyIn(), FadeIn(), ZoomIn())} style={{fontSize:40}}>
          <img src={process.env.PUBLIC_URL +"/images/team-skl/webImg6.png"} style={{width:300}} />
          <br/> 
            <hr></hr>
          깃허브를 통한 협업 <AiFillCaretDown onClick={()=>{setVisibleGit(!visibleGit)}}></AiFillCaretDown>
          {
            visibleGit?<InfoGit/>:null
          }
          </Animator>
        </ScrollPage>
      </ScrollContainer>

  );
}
function checkState(data){
  if(data){
    return false;
  }
}
function InfoGit(){
  return(
    
    <div style={{
      fontSize:25,
      marginTop:20
    }}>
      💻 실무에서도 많이 사용되는 협업툴 💻
    </div>
  )
}
function BackEnd(){
  return(
  <div>
    <span> 💡 회원정보와 같은 서버 관련 데이터를 다루는 영역 </span>
  </div>
  )
}
function FrontEnd(){
  return(

<div>
    <span> 💡 웹 화면에 표현되는 버튼 글자 이미지등 눈에 보이는 것들을 다루는 영역 </span>
  </div>
  )
}
function FrameMain() {
  return (
    <>
      
        <Swiper
          className="frameImg"
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/team-skl/webImg3.png"} className="slideImg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/team-skl/Unity2.png"} className="slideImg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/team-skl/Unity3.png"} className="slideImg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/team-skl/Unity4.png"} className="slideImg" />
          </SwiperSlide>
        </Swiper>
        <div className="frame">
          홈페이지 프리뷰
          <br></br> <br></br> <br></br>
          
          
          
          
        </div>
        <a href="#test"><BsChevronDoubleDown size={55} style={{marginTop:20}}/></a>
      
    
    </>
  );
}
export default AcademicProject;
