import React from "react";
import { Typography, Box, Grid, Container } from "@material-ui/core";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  children?: React.ReactNodeArray;
};
const boxStyle = {
  py: '90px',
  alignItems: "center",
  display: "flex",
  textShadow: "0 2px 0 #4e1290",
};
const titleStyle = {
  fontFamily: "'DM Sans', sans-serif",
  color: "white",
  fontSize: "50px",
  marginBottom: "20px",
  lineHeight: "1.2em",
  letterSpacing: "-1px",
};
const context = {
  fontFamily: "'DM Sans', sans-serif",
  color: "white",
  fontSize: "18px",
  lineHeight: "1.7rem",
  marginTop: 0,
  fontWeight: 400,
  marginBottom: "20px",
};
const h6Style = {
  fontSize: "24px",
  letterSpacing: "2px",
  color: "#ffda59",
  fontFamily: "'VT323', monospace",
};
const titleMain = {
  fontFamily: "'VT323', monospace",
  letterSpacing: "3px",
  fontSize: "140%",
  wordSpacing: "-10px",
  marginLeft: "15px",
};
const subTitle = {
  color: "#fcd95a",
  animationDelay: "1s",
  animationN: "fadeInUp",
  fontSize: "18px",
  lineHeight: "1.7em",
  marginTop: 0,
  fontWeight: 400,
  fontFamily: "'DM Sans', sans-serif",
};
export default function AttributeHeroSection({
  title,
  subtitle,
  image,
  children,
}: Props): JSX.Element {
  return (
    <Box sx={boxStyle}>
      <Box maxWidth="70%" sx={{ py: 1, margin: "auto", height:"100px" }}>
        <Grid container alignItems="center" sx={{ py: 12 }}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h1" sx={titleStyle}>
              Soul Attribute
            </Typography>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
