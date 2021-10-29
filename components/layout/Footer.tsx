// import { Container } from "next/app";
import {
  Typography,
  Container,
  Grid,
  Box,
  Divider,
  Button,
} from "@material-ui/core";

const title: any = {
  color: "white",
  fontSize: "18px",
  fontWeight: 700,
  textTransform: "none",
  fontFamily: "'DM Sans', sans-serif",
  marginBottom: "20px",
};

const content: any = {
  color: "#9fa4dd",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "26px",
};
const email: any = {
  color: "#fcd95a;",
  marginTop: "20px",
  fontWeight: 400,
  fontSize: "16px",
};

export default function Footer(): JSX.Element {
  return (
    <Box sx={{ pt: 3, backgroundColor: "#292F45" }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" sx={{ py: 5 }}>
          <Grid item xs={12} sm={3} sx={{ mr: 4 }}>
            <Typography variant="h5" sx={title}>
              Solana Soul NFT
            </Typography>
            <Typography sx={content}>
              10,000 algorithmically generated, cute and collectible NFTs with
              proof of ownership stored on the Solana blockchain.
            </Typography>
            <br />
            <Typography variant="h6" sx={email}>
              bol@solsoulsnft.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" sx={title}>
              Resources
            </Typography>
            <Typography sx={content}>
              Roadmap
            </Typography><br />
            <Typography sx={content}>
              FAQ
            </Typography><br />
            <Typography sx={content}>
              Quick Stats
            </Typography><br />
            <Typography sx={content}>
              Soul Fusion
            </Typography><br />
            <Typography sx={content}>
              Fusion Calculator
            </Typography><br />
            <Typography variant="h5" sx={title}>
              Launching your own NFTs?
            </Typography>
            <Typography sx={content}>
              We can help. Learn more.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" sx={title}>
              Community
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </Container>
      <Typography variant="body2" align="center">
        {"Copyright © My Company "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
