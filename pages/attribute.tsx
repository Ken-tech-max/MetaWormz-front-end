import { Button, Container, Box } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import Page from "../components/layout/Page";
import AttributeHeroSection from "../components/AttributeHero";
import AttributeContent from "../components/FusionHistory"
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

const mainButton = {
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
const fuseButton = {
  fontSize: "18px",
  padding: "10px 30px",
  background: "white",
  color: "#7540ab",
  borderRadius: "6px",
  fontFamily: "'DM Sans', sans-serif",
  letterSpacing: "1px",
  marginTop: "20px",
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
        <AttributeHeroSection image="/assets/soul_fusion.gif" title="sole_fusion" subtitle="sol_fusion">
        </AttributeHeroSection>
      </div>
      <AttributeContent />
      {/* <Footer /> */}
    </Page>
  );
}
