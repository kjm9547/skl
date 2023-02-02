import React from "react";
import styled from 'styled-components';
import {Table} from 'react-bootstrap';



 let Box = styled.div`

margin-left: 30px;
margin-right: 30px;

  height : 100px;
  weight : 100px;
  padding : 20px;
  background: grey;
  text-align: center;
`;


function WebProject(){
    return(
        <div>
           <Table>
          <tbody>
          <tr>
              <td><img src ={process.env.PUBLIC_URL+'/images/team-skl/1.png'} width="100" height="100" /></td>
              <td><Box> 홈페이지 제작과정은 노션에 정리하였습니다.</Box></td>
          </tr>
          <tr>
              <td><img src ={process.env.PUBLIC_URL+'/images/team-skl/2.png'} width="100" height="100" /></td>
              <td><Box> 팀프로젝트 제작 기간은 22/11/15 ~ 23/02/30 입니다.</Box></td>
          </tr>
          <tr>
              <td><img src ={process.env.PUBLIC_URL+'/images/team-skl/3.png'} width="100" height="100" /></td>
              <td><Box> 제작을 위한 세미나 또는 회의입니다.</Box></td>
          </tr>
     
          <tr>
              <td><img src ={process.env.PUBLIC_URL+'/images/team-skl/discord.png'} width="100" height="100" /></td>
              <td><Box> 방학중 비대면 회의로 디스코드 사용하였습니다.</Box></td>
          </tr>
          <tr>
              <td><img src ={process.env.PUBLIC_URL+'/images/team-skl/figma.png'} width="100" height="100" /></td>
              <td><Box> 초기 화면 설정 디자인을 피그마를 이용하여 계획하였습니다.</Box></td>
          </tr>
          </tbody>
          </Table>
    
        </div>
    
      );
    }
export default WebProject