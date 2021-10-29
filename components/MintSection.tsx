import React from "react";
import { Container, Divider, Grid, Typography, Box } from "@material-ui/core";
import Company from "../interfaces/Company";
import Image from "next/image";

const styles: any = {
  header: {
    textAlign: "center",
    marginTop: 0,
    marginBottom: "10px",
    fontSize: "36px",
    lineHeight: "46px",
    color: "white",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "30px",
    display: "block",
    visibility: "visible",
    color: "#9fa4dd",
  },
  context: {
    color: 'white',
    fontSize: '32px',
    fontWeight: 700,
    fontFamily: '"DM Sans", Helvetica, Arial, sans-serif'
  }
};
export default function MintSection(): JSX.Element {
  return (
    <Box maxWidth="70%" sx={{ py: { xs: 4, md: 12 }, margin: 'auto' }}>
      <Typography variant="h1" sx={styles.header}>
        Mint a Soul Sol
      </Typography>
      <Typography sx={styles.subtitle}>
        Mint a Soul Sol by connecting your Solana Sollet or Phantom wallet.
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <Grid
          item
          container
          justifySelf="center"
          alignItems="center"
          xs={12}
          sm={6}
          sx={{ padding: '10px' }}
        >
          <Image
            src={"/assets/city.svg"}
            alt="hello"
            height={500}
            width={500}
          />
        </Grid>
        <Grid
          item
          container
          justifySelf="center"
          alignItems="center"
          xs={12}
          sm={6}
          sx={{ padding: '10px' }}
        >
          <Box sx={{ backgroundColor: "#21273e", width: '100%' }}>
            <Box sx={{ padding: '30px', textAlign: 'center' }}>
              <Typography variant="h2" sx={styles.context}>Single</Typography>
              <Typography sx={{ color: '#9fa4dd', fontSize: '16px' }}>1 Soul Sol</Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "#7540ab", width: '100%' }}>
            <Box sx={{ padding: '30px', textAlign: 'center' }}>
              <Typography variant="h2" sx={{ color: 'white' }}>3</Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "#21273e", width: '100%' }}>
            <Box sx={{ padding: '30px', textAlign: 'center' }}>
              <Typography variant="h2" sx={{ color: 'white' }}>Single</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
