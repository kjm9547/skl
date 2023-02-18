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
  return (
      <ScrollContainer style={{
        fontFamily:'Noto Sans',
        
    }}>
 <ScrollPage style={{}}>
          <Animator >
            <div  style={{fontSize:40, paddingTop:40, paddingBottom:40}}>
              2022 P&N 학술제
              <br/>
            </div>
            <hr></hr>
            <FrameMain></FrameMain>
          </Animator>
        </ScrollPage>
        <ScrollPage style={{backgroundColor:"cornflowerblue",
        color:"white"}}>
          <a name="test"/>
          <Animator animation={batch(Move(0,500),Fade(), Sticky(50,50),  MoveOut(0,-400))}>
            <div style={{fontSize:30}}>2022 학술제 <hr></hr>2022년도 학술제 1위🥇</div>
          </Animator>
        </ScrollPage>
        <ScrollPage style={{backgroundColor:""}} >
        
          <Animator animation={batch(Move(0,1600),StickyIn(), FadeIn(), ZoomIn(7,0))}style={{fontSize:40, margin:"auto"}}>
            <span>
            Unity 프로그램을 활용한<hr/>
            <img src={process.env.PUBLIC_URL+'/images/team-skl/Unity.jpg'}
            width="400vh"
            height="250vh"
          ></img>
          
            </span><br/>
            <span>Unity? <AiFillCaretDown onClick={()=>{setVisible(!visible)}}/>
              {
                visible?<InfoUnity/>:null
              }
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <hr/>
          <Animator animation={batch(Move(0,2400),StickyIn(), FadeIn(), ZoomIn())}
          style={{fontSize:40, margin:"auto"}}>
          VR 기기 사용 가상 현실 게임 <hr></hr><br/>
          <img src={process.env.PUBLIC_URL +"/images/team-skl/Unity3.png"} style={{width:500}} />
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <hr/>
          <Animator animation={batch(Move(0,3200),StickyIn(), FadeIn(), ZoomIn())} style={{fontSize:40, margin:"auto"}}>
          <img src={process.env.PUBLIC_URL +"/images/team-skl/Unity4.png"} style={{width:500}}/>
          <br/><br/><hr></hr>
          🎮게임을 플레이하고 기록도 확인🏆
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <hr/>
          <Animator animation={batch(Move(0,800),Fade(), Sticky())} style={{fontSize:40}}>
            함께 만들어봐요 2023 P&N<br/>
            ☜(ﾟヮﾟ☜)(☞ﾟヮﾟ)☞<br></br><hr></hr><br></br>
            <img src={process.env.PUBLIC_URL +"/images/team-skl/pnnLogo.png"}  />
          </Animator>
        </ScrollPage>
      </ScrollContainer>

  );
}
function InfoUnity(){
  return(
    <div>
      3D 및 2D 비디오 게임의 개발 환경을 제공한는 게임 엔진
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
            <img src={process.env.PUBLIC_URL + "/images/team-skl/VrTest.jpg"} className="slideImg" />
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
          학술제
          <br></br> <br></br> <br></br>
          
          매년 학과에서 진행하는 대회입니다.
          
          
        </div>
        <a href="#test"><BsChevronDoubleDown size={55} style={{marginTop:20}}/></a>
      
    
    </>
  );
}
export default AcademicProject;
