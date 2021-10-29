import React from "react";
import { Typography, Box, Grid, Container } from "@material-ui/core";
import Image from "next/image";

const styles: any = {
  boxStyle: {
    // py: "60px",
    alignItems: "center",
    display: "flex",
    textShadow: "0 2px 0 #4e1290",
  },
  span: {
    background: "#4e1290",
    color: "white",
    display: "inline-block",
    fontFamily: "'DM Sans', sans-serif",
    borderRadius: "3px",
    letterSpacing: "2px",
    lineHeight: "10px",
    padding: "7px 10px 6px 10px",
    fontSize: "12px",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold"
  },
  subtitle: {
    marginBottom: "30px",
    display: "block",
    visibility: "visible",
    color: "#9fa4dd",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
  },
  rate: {
    color: "white",
    fontSize: "36px",
    fontFamily: "'DM Sans', sans-serif",
  },
  comment: {
    color: "white",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "'DM Sans', sans-serif",
  },
};
export default function AttributeContent(): JSX.Element {
  return (
    <Box sx={styles.boxStyle}>
      <Box maxWidth="70%" sx={{ py: "60px", margin: "auto" }}>
        <Grid container alignItems="center" width="1200px">
          <Grid item xs={12} sm={4} px={2}>
            <span style={styles.span}>SOULS ARE RARE2</span>
            <Typography sx={styles.subtitle}>
              Over time, fusing Souls reduces the total supply of Souls.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} px={2}>
            <Grid container alignItems="center" width="100%">
              <Grid item xs={12} sm={4} px={2}>
                <Typography variant="h3" sx={styles.rate}>
                  10000
                </Typography>
                <Typography sx={styles.comment}>Souls Ever Minted</Typography>
              </Grid>
              <Grid item xs={12} sm={4} px={2}>
                <Typography variant="h3" sx={styles.rate}>
                  1338
                </Typography>
                <Typography sx={styles.comment}>Souls Fused</Typography>
              </Grid>
              <Grid item xs={12} sm={4} px={2}>
                <Typography variant="h3" sx={styles.rate}>
                  9331
                </Typography>
                <Typography sx={styles.comment}>
                  Total Souls Remaining
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontFamily: "'DM Sans', sans-serif",
            my: "60px",
          }}
        >
          Recent Fusions
        </Typography>
        <Grid container alignItems="center" width="1200px">
          <Grid item xs={12} sm={3} px={2}>
            <Box textAlign="center">
              <span style={styles.span}>ORIGINAL SOUL</span>
              <img src="assets/item1.png"></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1} px={2}>
            <Box textAlign="center">
              <img src="assets/plus.svg"></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} px={2}>
            <Box textAlign="center">
              <span style={styles.span}>ORIGINAL SOUL</span>
              <img src="assets/item2.png"></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1} px={2}>
            <Box textAlign="center">
              <img src="assets/equal.svg"></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} px={2}>
            <Box textAlign="center">
              <span style={styles.span}>ORIGINAL SOUL</span>
              <img src="assets/item3.png"></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
