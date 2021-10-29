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
  height: "100vh",
  alignItems: "center",
  display: "flex",
  textShadow: '0 2px 0 #4e1290',
}
const titleStyle = {
  fontFamily: "'DM Sans', sans-serif",
  color: "white",
  fontSize: "50px",
  marginBottom: "20px",
  lineHeight: "1.2em",
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
export default function HeroSection({
  title,
  subtitle,
  image,
  children,
}: Props): JSX.Element {
  return (
    <Box sx={boxStyle}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" sx={{ py: 12 }}>
          <Grid item xs={12} sm={3}>
            <Container>
              <Image src={image} width={400} height={400} alt="Oops" />
            </Container>
          </Grid>
          <Grid item xs={12} sm={9} sx={{ paddingLeft: "30px" }}>
            <Typography variant="h6" sx={h6Style}>
              NEW: FUSION IS OUT! MERGE YOUR SOULS NOW
            </Typography>
            <Typography variant="h1" sx={titleStyle}>
              Introducing <span style={titleMain}>Sol Souls</span>
            </Typography>
            <Typography variant="h3" sx={subTitle}>
              SOLD OUT - 10,000 uniquely generated, cute and collectible pixel
              art souls with proof of ownership stored on the Solana blockchain.
            </Typography>
            {/* <Typography variant="body1">{subtitle}</Typography> */}
            {children}
            <Typography variant="h3" sx={subTitle}>
              Our mint is over, & our team is busy working on our
              roadmap.However, if you &apos re looking to launch your own NFTs & join
              the Solana community - we can help.
              <span style={{ color: 'white' }}>Click here to find out more.</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
