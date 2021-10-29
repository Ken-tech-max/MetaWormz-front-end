import { Button, Container, Box } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import Page from "../components/layout/Page";
import FusionHeroSection from "../components/FusionHero";
import FusionHistory from "../components/FusionHistory"
import React from "react";
import FeatureContainer from "../components/FeatureContainer";
import FeatureBlocksContainer from "../components/FeatureBlocksContainer";
import FeatureBlock from "../components/FeatureBlock";
import BigSection from "../components/BigSection";
import CompaniesSection from "../components/CompaniesSection";
import { companies } from "../data/companies";
import Image from "next/image";
import TestimonialSection from "../components/TestimonialSection";
import { testimonials } from "../data/testimonials";
import ContactSection from "../components/ContactSection";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MintSection from "../components/MintSection";
import { TabComponent } from "../components/TabComponent";


const mainButton: any = {
  mr: "3px",
  my: 2,
  padding: "8px 40px",
  fontSize: "14px",
  fontWeight: 800,
  letterSpacing: "1px",
  backgroundColor: "#ffda59",
  color: "#000",
  textAlign: "center",
  borderRadius: "6px",
  fontFamily: "'DM Sans', sans-serif",
};
const fuseButton: any = {
  fontSize: "18px",
  padding: "10px 30px",
  background: "white",
  color: "#7540ab",
  borderRadius: "6px",
  fontFamily: "'DM Sans', sans-serif",
  letterSpacing: "1px",
  marginTop: "20px",
};
const styles: any = {
  boxStyle: {
    // py: "60px",
    alignItems: "center",
    display: "flex",
    textShadow: "0 2px 0 #4e1290",
  }
};
export default function FusionPage(): JSX.Element {
  return (
    <Page maxWidth={false}>
      <div
        style={{
          background: `url("assets/2d.jpg")`,
          textShadow: "0 2px 0 #000",
        }}
      >
        <Header />
        <FusionHeroSection image="/assets/soul_fusion.gif" title="sol_fusion" subtitle="sol_fusion">
          {/* <Link href="/react" passHref> */}
          <Button variant="contained" sx={fuseButton}>
            Fuse Now
          </Button>
          <br />
          <Button variant="contained" disableElevation sx={mainButton}>
            See Fusions
          </Button>
          {/* </Link> */}
          &nbsp;&nbsp;
          {/* <Link href="/ios" passHref> */}
          <Button variant="contained" disableElevation sx={mainButton}>
            Fusion Calculator
          </Button>
          {/* </Link> */}
        </FusionHeroSection>

      </div>
      <FusionHistory />
      <Box sx={styles.boxStyle}>
        <Box maxWidth="70%" sx={{ py: "60px", margin: "auto" }}>
          <TabComponent />
        </Box>
      </Box>
      {/* <Footer /> */}
    </Page>
  );
}
