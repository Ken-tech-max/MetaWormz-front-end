import {
  Typography,
  Container,
  Grid,
  Box,
  Divider,
  Button,
} from "@material-ui/core";
// import { useRouter } from "next/router";
import Link from "next/link";

const headerButton = {
  color: "white",
  fontFamily: "var(--title-font)",
  fontSize: "14px",
  padding: "30px 15px",
  textShadow: "0 2px 0 #000",
};
export default function Header(): JSX.Element {
  // const router = useRouter();
  return (
    <Box sx={{position:'fixed', width:'100%'}}>
      <Box maxWidth="70%" sx={{ py: 1, margin:'auto' }}>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: "white",
                fontSize: "36px",
                letterSpacing: "1px",
                fontFamily: "'VT323', monospace",
                textShadow: "0 2px 0 #000",
              }}
            >
              Sol Souls
            </Typography>
          </Grid>
          <Grid container item xs={8} justifyContent="flex-end">
            <Link href="/" passHref>
              <Button
                sx={headerButton}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Home
              </Button>
            </Link>
            <Link href="fusion" passHref>
              <Button
                sx={headerButton}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Fusion
              </Button>
            </Link>
            <Link href="#" passHref>
              <Button
                sx={headerButton}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Roadmap
              </Button>
            </Link>
            <Link href="#" passHref>
              <Button
                sx={headerButton}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Rarity Ranking
              </Button>
            </Link>
            <Link href="#" passHref>
              <Button
                sx={headerButton}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Attributes
              </Button>
            </Link>
            <Link href="#" passHref>
              <Button
                sx={headerButton}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Mint Stats
              </Button>
            </Link>
            <Link href="#" passHref>
              <Button
                sx={headerButton}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                FAQ
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href="#" passHref>
              <Button
                sx={{
                  color: "white",
                  fontFamily: "var(--title-font)",
                  fontSize: "14px",
                  padding: "6px 20px",
                  textShadow: "0 2px 0 #000",
                  backgroundColor: "#4e1290",
                }}
                // color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Market Place
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Box>
  );
}
