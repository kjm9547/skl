import React, { useState } from "react";
import "./Landing.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
function GuestLandingPage() {
  const [img] = useState(["semina.jpg", "coding.jpg", "onlineLecture.jpg"]);

  const [cardTitle] = useState(["세미나", "팀프로젝트", "기타"]);

  const [card] = useState(["semina", "team", "etc"]);
  const text =
    "Programming을 즐기는 네트워크라는 뜻을 가진 \n인제대학교 컴퓨터공학부 학술 동아리입니다.";

  return (
    <div>
      <div className="title">
        P & N <p className="subTitle">{text}</p>
        <hr />
      </div>
      <p className="activity">Activity</p>
      <div className="card">
        <Box sx={{ flexGrow: 1 }} alignItems="center" alignContent="center">
          <Grid container spacing={4}>
            {card.map((a, i) => {
              return (
                <Grid item xs={4} key={i}>
                  <GuestCard cardTitle={cardTitle} img={img} i={i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default GuestLandingPage;

function GuestCard(props) {
  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea
        onClick={() => {
          if (props.i === 0) {
            navigate("/semina");
          } else if (props.i === 1) {
            navigate("/teamProject");
          } else {
            navigate("/etc");
          }
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={`${process.env.PUBLIC_URL}/images/${props.img[props.i]}`}
          alt="card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardTitle[props.i]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            --
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
